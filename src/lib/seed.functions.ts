import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const ROOMS = ["Living Room", "Kitchen", "Master Bedroom", "Garden", "Garage", "Pool Area"];

type DT =
  | "smart_switch" | "smart_plug" | "water_pump" | "cctv" | "smart_lock"
  | "door_sensor" | "motion_sensor" | "smoke_detector" | "gas_detector"
  | "water_level_sensor" | "power_meter" | "temperature_sensor"
  | "humidity_sensor" | "air_conditioner" | "smart_curtain"
  | "smart_ir_remote" | "light";

const DEVICES: Array<{ name: string; type: DT; room: number; reading?: number; unit?: string; on?: boolean }> = [
  { name: "Living Room Lights", type: "light", room: 0, on: true },
  { name: "Ambient Lamp", type: "light", room: 0, on: false },
  { name: "Living Room AC", type: "air_conditioner", room: 0, reading: 24, unit: "°C", on: true },
  { name: "Curtains", type: "smart_curtain", room: 0, on: true },
  { name: "TV Plug", type: "smart_plug", room: 0, on: false },
  { name: "Kitchen Lights", type: "light", room: 1, on: true },
  { name: "Coffee Machine", type: "smart_plug", room: 1, on: false },
  { name: "Gas Leak Detector", type: "gas_detector", room: 1, on: true, reading: 0, unit: "ppm" },
  { name: "Bedroom Lights", type: "light", room: 2, on: false },
  { name: "Bedroom AC", type: "air_conditioner", room: 2, reading: 22, unit: "°C", on: true },
  { name: "Door Lock", type: "smart_lock", room: 2, on: true },
  { name: "Motion Sensor", type: "motion_sensor", room: 2, on: true },
  { name: "Garden Camera", type: "cctv", room: 3, on: true },
  { name: "Garden Lights", type: "light", room: 3, on: false },
  { name: "Sprinkler Pump", type: "water_pump", room: 3, on: false },
  { name: "Garage Door", type: "smart_lock", room: 4, on: true },
  { name: "Power Meter", type: "power_meter", room: 4, reading: 4.2, unit: "kW", on: true },
  { name: "Water Tank", type: "water_level_sensor", room: 5, reading: 78, unit: "%", on: true },
  { name: "Pool Pump", type: "water_pump", room: 5, on: true },
  { name: "Pool Camera", type: "cctv", room: 5, on: true },
];

const AGENTS = [
  { agent_name: "Security Agent", agent_type: "security", description: "Monitors cameras, detects intrusions, and alerts you." },
  { agent_name: "Energy Agent", agent_type: "energy", description: "Optimizes electricity consumption and flags anomalies." },
  { agent_name: "Water Agent", agent_type: "water", description: "Monitors tanks and pumps, detects leaks." },
  { agent_name: "Maintenance Agent", agent_type: "maintenance", description: "Predicts device failures and schedules service." },
  { agent_name: "Family Assistant", agent_type: "assistant", description: "Executes voice commands and daily routines." },
  { agent_name: "Property Manager", agent_type: "manager", description: "Generates weekly summaries and insight reports." },
];

export const ensureDemoData = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase } = context;

    const { data: profile } = await supabase.from("profiles").select("tenant_id").maybeSingle();
    if (!profile?.tenant_id) throw new Error("No tenant for user");
    const tenant_id = profile.tenant_id;

    const { data: existing } = await supabase.from("properties").select("id").limit(1);
    if (existing && existing.length > 0) return { seeded: false };

    // Property
    const { data: prop, error: propErr } = await supabase
      .from("properties")
      .insert({
        tenant_id, property_name: "Villa Azure",
        property_type: "villa", address: "Jl. Pantai Indah 88, Bali",
        latitude: -8.4095, longitude: 115.1889, cover_color: "#7CC4FF",
      })
      .select("id").single();
    if (propErr) throw propErr;

    const rooms = await supabase.from("rooms").insert(
      ROOMS.map((room_name) => ({ tenant_id, property_id: prop.id, room_name })),
    ).select("id");
    if (rooms.error) throw rooms.error;

    await supabase.from("devices").insert(
      DEVICES.map((d) => ({
        tenant_id, property_id: prop.id, room_id: rooms.data![d.room].id,
        device_name: d.name, device_type: d.type, manufacturer: "Pomah",
        online_status: true, power_state: !!d.on,
        reading_value: d.reading ?? null, reading_unit: d.unit ?? null,
      })),
    );

    await supabase.from("ai_agents").insert(AGENTS.map((a) => ({ tenant_id, ...a })));

    // A few events
    const events = [
      { event_type: "motion", severity: "info", event_data: { area: "Garden" } },
      { event_type: "door_unlocked", severity: "info", event_data: { door: "Front" } },
      { event_type: "high_energy", severity: "warning", event_data: { delta: "+18%" } },
    ];
    const { data: dev } = await supabase.from("devices").select("id").limit(3);
    if (dev) {
      await supabase.from("device_events").insert(
        dev.map((d, i) => ({ tenant_id, device_id: d.id, ...events[i] })),
      );
    }

    await supabase.from("notifications").insert([
      { tenant_id, title: "Welcome to Pomah Living AI", body: "Your villa is now online. 20 devices connected.", severity: "info" },
      { tenant_id, title: "AI Insight", body: "Living room AC consumed 18% more energy yesterday.", severity: "warning" },
    ]);

    return { seeded: true, property_id: prop.id };
  });
