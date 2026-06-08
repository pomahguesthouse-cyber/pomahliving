import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ensureDemoData } from "@/lib/seed.functions";
import { Home, Cpu, Wifi, WifiOff, Video, Zap, Droplets, Workflow, Sparkles, TrendingUp } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";

export const Route = createFileRoute("/_authenticated/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Pomah Living AI" }] }),
  component: Dashboard,
});

const HOURS = Array.from({ length: 12 }, (_, i) => {
  const h = (new Date().getHours() - 11 + i + 24) % 24;
  return { time: `${h}:00`, energy: 1.5 + Math.sin(i / 2) * 1.2 + Math.random() * 0.6, water: 30 + Math.cos(i / 3) * 15 + Math.random() * 8 };
});

function Kpi({ icon: Icon, label, value, hint, grad }: { icon: any; label: string; value: string; hint?: string; grad: string }) {
  return (
    <div className="glass-strong rounded-3xl p-5 shadow-soft">
      <div className="flex items-center justify-between mb-3">
        <div className={`${grad} h-10 w-10 rounded-2xl flex items-center justify-center text-white`}><Icon className="h-5 w-5" /></div>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      {hint && <div className="text-xs text-muted-foreground mt-1">{hint}</div>}
    </div>
  );
}

function Dashboard() {
  const seed = useServerFn(ensureDemoData);
  const [seeded, setSeeded] = useState(false);
  useEffect(() => { seed({}).then(() => setSeeded(true)).catch(() => setSeeded(true)); }, [seed]);

  const devices = useQuery({
    queryKey: ["devices", seeded],
    enabled: seeded,
    queryFn: async () => (await supabase.from("devices").select("*")).data ?? [],
  });
  const props = useQuery({
    queryKey: ["properties", seeded],
    enabled: seeded,
    queryFn: async () => (await supabase.from("properties").select("*")).data ?? [],
  });
  const events = useQuery({
    queryKey: ["events", seeded],
    enabled: seeded,
    queryFn: async () => (await supabase.from("device_events").select("*").order("created_at", { ascending: false }).limit(8)).data ?? [],
  });

  const stats = useMemo(() => {
    const d = devices.data ?? [];
    return {
      properties: (props.data ?? []).length,
      online: d.filter((x) => x.online_status).length,
      offline: d.filter((x) => !x.online_status).length,
      cameras: d.filter((x) => x.device_type === "cctv").length,
      automations: 6,
    };
  }, [devices.data, props.data]);

  return (
    <div className="space-y-6">
      <header className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Good {greet()}</h1>
          <p className="text-muted-foreground">Your properties are calm and connected.</p>
        </div>
        <div className="glass rounded-2xl px-4 py-2 text-sm flex items-center gap-2">
          <span className="live-dot inline-block h-2 w-2 rounded-full bg-mint" /> Live
        </div>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <Kpi icon={Home} label="Properties" value={String(stats.properties || 1)} grad="gradient-sky" />
        <Kpi icon={Wifi} label="Online" value={String(stats.online)} hint="devices reachable" grad="gradient-mint" />
        <Kpi icon={WifiOff} label="Offline" value={String(stats.offline)} hint="needs attention" grad="gradient-coral" />
        <Kpi icon={Video} label="Cameras" value={String(stats.cameras)} hint="streaming" grad="gradient-lilac" />
        <Kpi icon={Workflow} label="Automations" value={String(stats.automations)} hint="running" grad="gradient-peach" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="glass-strong rounded-3xl p-5 shadow-soft lg:col-span-2">
          <div className="flex items-center gap-2 mb-3"><Zap className="h-4 w-4 text-peach" /><div className="font-medium">Energy today</div><span className="ml-auto text-xs text-muted-foreground">kWh</span></div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={HOURS}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--peach)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="var(--peach)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="time" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Area type="monotone" dataKey="energy" stroke="var(--peach)" fill="url(#g1)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-strong rounded-3xl p-5 shadow-soft">
          <div className="flex items-center gap-2 mb-3"><Droplets className="h-4 w-4 text-sky" /><div className="font-medium">Water</div><span className="ml-auto text-xs text-muted-foreground">L</span></div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={HOURS}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="time" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis stroke="var(--muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--popover)", border: "1px solid var(--border)", borderRadius: 12 }} />
                <Bar dataKey="water" fill="var(--sky)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="glass-strong rounded-3xl p-5 shadow-soft">
          <div className="flex items-center gap-2 mb-4"><Sparkles className="h-4 w-4 text-lilac" /><div className="font-medium">AI Insights</div></div>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><span className="gradient-peach h-9 w-9 rounded-2xl shrink-0 flex items-center justify-center text-white"><TrendingUp className="h-4 w-4" /></span>
              <div><div className="font-medium">Living Room AC used 18% more energy</div><div className="text-muted-foreground text-xs">Consider raising setpoint by 1°C overnight.</div></div></li>
            <li className="flex gap-3"><span className="gradient-sky h-9 w-9 rounded-2xl shrink-0 flex items-center justify-center text-white"><Droplets className="h-4 w-4" /></span>
              <div><div className="font-medium">Water tank stable at 78%</div><div className="text-muted-foreground text-xs">No leaks detected in the last 24h.</div></div></li>
            <li className="flex gap-3"><span className="gradient-coral h-9 w-9 rounded-2xl shrink-0 flex items-center justify-center text-white"><Video className="h-4 w-4" /></span>
              <div><div className="font-medium">Motion at Garden 02:14 AM</div><div className="text-muted-foreground text-xs">Likely animal — no recurring pattern.</div></div></li>
          </ul>
        </div>

        <div className="glass-strong rounded-3xl p-5 shadow-soft">
          <div className="flex items-center gap-2 mb-4"><Cpu className="h-4 w-4 text-primary" /><div className="font-medium">Recent activity</div></div>
          <ul className="space-y-2 text-sm">
            {(events.data ?? []).map((e: any) => (
              <li key={e.id} className="flex items-center gap-3 rounded-2xl px-3 py-2 hover:bg-accent">
                <span className="h-2 w-2 rounded-full bg-mint" />
                <div className="flex-1">
                  <div className="font-medium capitalize">{e.event_type.replace(/_/g, " ")}</div>
                  <div className="text-xs text-muted-foreground">{JSON.stringify(e.event_data)}</div>
                </div>
                <span className="text-xs text-muted-foreground">{new Date(e.created_at).toLocaleTimeString()}</span>
              </li>
            ))}
            {!events.data?.length && <li className="text-muted-foreground text-sm">No events yet.</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

function greet() {
  const h = new Date().getHours();
  return h < 5 ? "night" : h < 12 ? "morning" : h < 18 ? "afternoon" : "evening";
}
