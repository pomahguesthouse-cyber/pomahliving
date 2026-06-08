import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Switch } from "@/components/ui/switch";
import {
  Lightbulb, Plug, Lock, Snowflake, Thermometer, Droplets, Video, ShieldAlert, Activity,
  Blinds, Wifi, Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/devices")({
  head: () => ({ meta: [{ title: "Devices — Pomah Living AI" }] }),
  component: Devices,
});

const ICONS: Record<string, any> = {
  light: Lightbulb, smart_switch: Lightbulb, smart_plug: Plug, water_pump: Droplets,
  cctv: Video, smart_lock: Lock, door_sensor: ShieldAlert, motion_sensor: Activity,
  smoke_detector: ShieldAlert, gas_detector: ShieldAlert, water_level_sensor: Droplets,
  power_meter: Activity, temperature_sensor: Thermometer, humidity_sensor: Droplets,
  air_conditioner: Snowflake, smart_curtain: Blinds, smart_ir_remote: Cpu,
};

const GRAD: Record<string, string> = {
  light: "gradient-peach", smart_plug: "gradient-mint", air_conditioner: "gradient-sky",
  smart_lock: "gradient-lilac", cctv: "gradient-coral", water_pump: "gradient-sky",
  smart_curtain: "gradient-peach", default: "gradient-aurora",
};

function Devices() {
  const qc = useQueryClient();
  const rooms = useQuery({ queryKey: ["rooms"], queryFn: async () => (await supabase.from("rooms").select("*")).data ?? [] });
  const devices = useQuery({ queryKey: ["devices"], queryFn: async () => (await supabase.from("devices").select("*")).data ?? [] });

  const toggle = async (id: string, current: boolean) => {
    await supabase.from("devices").update({ power_state: !current }).eq("id", id);
    qc.invalidateQueries({ queryKey: ["devices"] });
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Devices</h1>
        <p className="text-muted-foreground">Control everything across your rooms.</p>
      </header>

      {(rooms.data ?? []).map((room: any) => {
        const items = (devices.data ?? []).filter((d: any) => d.room_id === room.id);
        if (!items.length) return null;
        return (
          <section key={room.id} className="space-y-3">
            <h2 className="text-lg font-medium px-1">{room.room_name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {items.map((d: any) => {
                const Icon = ICONS[d.device_type] ?? Cpu;
                const on = d.power_state;
                const grad = GRAD[d.device_type] ?? GRAD.default;
                return (
                  <div
                    key={d.id}
                    className={cn(
                      "rounded-3xl p-4 shadow-soft transition-all relative overflow-hidden",
                      on ? "glass-strong" : "glass",
                    )}
                  >
                    {on && <div className={`${grad} absolute inset-0 opacity-20 pointer-events-none`} />}
                    <div className="relative flex items-start justify-between mb-6">
                      <div className={cn("h-11 w-11 rounded-2xl flex items-center justify-center", on ? `${grad} text-white` : "bg-muted text-muted-foreground")}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <Switch checked={on} onCheckedChange={() => toggle(d.id, on)} />
                    </div>
                    <div className="relative">
                      <div className="font-medium truncate">{d.device_name}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Wifi className={cn("h-3 w-3", d.online_status ? "text-mint" : "text-muted-foreground")} />
                        {d.reading_value != null
                          ? `${d.reading_value}${d.reading_unit ?? ""}`
                          : on ? "On" : "Off"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
      {!devices.data?.length && <p className="text-muted-foreground">Seeding your demo property…</p>}
    </div>
  );
}
