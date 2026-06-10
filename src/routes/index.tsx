import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Zap, Droplets, Bot, Cpu, BrainCircuit, Orbit, Hexagon, Radio } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pomah Living AI — AI-powered living spaces that manage themselves" },
      { name: "description", content: "Smart home and property automation with AI Agents." },
      { property: "og:title", content: "Pomah Living AI" },
      { property: "og:description", content: "AI-powered living spaces that manage themselves." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-[#d7d0c7] p-3 sm:p-5 lg:p-7 selection:bg-indigo-500/30">
      <header className="sticky top-3 z-[999] isolation-isolate overflow-hidden rounded-t-[28px] rounded-b-none border-x border-t border-white/70 bg-[#02050a] shadow-[0_30px_90px_rgba(2,5,10,0.55)] sm:top-5 sm:rounded-t-[38px] lg:top-7 lg:rounded-t-[56px]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#02050a]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.18),transparent_58%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/[0.08]" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10 lg:py-5">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative"><div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/35 lg:h-12 lg:w-12">P</div><div className="absolute -inset-2 rounded-full bg-purple-500/25 blur-xl transition-opacity group-hover:opacity-80" /></div>
            <span className="text-lg font-semibold tracking-tight text-white lg:text-xl">pomah<span className="text-indigo-400">/living</span></span>
          </Link>
          <nav className="hidden items-center gap-12 text-base font-medium md:flex">{["Agents", "Stats", "Pricing"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-white/42 transition-colors hover:text-white/85">{item}</a>)}</nav>
          <Link to="/auth"><Button className="h-11 rounded-full bg-white px-7 text-base font-semibold text-slate-950 hover:bg-white/90 lg:h-12 lg:px-8">Get started</Button></Link>
        </div>
      </header>

      <main className="relative -mt-[1px] min-h-[calc(100vh-88px)] overflow-hidden rounded-none border-x border-b border-white/70 bg-[#02050a] shadow-[0_35px_100px_rgba(15,23,42,0.35)]">
        <div className="pointer-events-none absolute inset-0 z-0"><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.18),transparent_50%)]" /><div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(168,85,247,0.13),transparent_50%)]" /><div className="absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px]" /><div className="absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/5 blur-[100px]" /><div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`, backgroundSize: '80px 80px' }} /></div>
        <section className="relative z-10 px-5 pb-20 pt-12 sm:px-8 lg:px-12 lg:pb-28"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div className="space-y-6"><div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-500/15 bg-indigo-500/[0.06] px-4 py-1.5 text-xs text-indigo-200/90"><span className="h-2 w-2 rounded-full bg-emerald-400" /><span className="font-mono">v3.0 — neural core operational</span></div><h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-balance md:text-7xl"><span className="text-white">living spaces that</span><br /><span className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">manage themselves</span><span className="text-white/10">.</span></h1><p className="max-w-xl text-base font-light leading-relaxed tracking-wide text-white/35 md:text-lg">Deploy AI agents across every device in your property portfolio. Security, energy, water, and maintenance — fully autonomous.</p><div className="flex flex-wrap gap-3"><Link to="/auth"><Button size="lg" className="h-12 rounded-2xl bg-indigo-600 px-7 text-base text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500">Deploy now <ArrowRight className="ml-1.5 h-4 w-4" /></Button></Link><a href="#agents"><Button size="lg" variant="outline" className="h-12 rounded-2xl border-white/[0.1] bg-white/[0.03] text-white/70 hover:bg-white/[0.08] hover:text-white"><BrainCircuit className="mr-1.5 h-4 w-4" />Watch demo</Button></a></div><div className="max-w-xl overflow-hidden rounded-[28px] border border-white/[0.06] bg-black/45 backdrop-blur-sm"><div className="flex items-center gap-1.5 border-b border-white/[0.04] px-4 py-2"><div className="h-2 w-2 rounded-full bg-rose-500/60" /><div className="h-2 w-2 rounded-full bg-amber-500/60" /><div className="h-2 w-2 rounded-full bg-emerald-500/60" /><span className="ml-2 text-[10px] uppercase tracking-wider text-white/20">agent terminal</span></div><div className="space-y-1 px-4 py-3 font-mono text-[11px] text-white/30">{TERMINAL_LINES.map((line) => <div key={line}>{line}</div>)}</div></div></div><div className="relative flex items-center justify-center py-8"><div className="absolute h-[440px] w-[440px] rounded-full border border-indigo-500/10" /><div className="relative group"><div className="absolute -inset-[2px] rounded-[34px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-45 blur-sm" /><div className="relative overflow-hidden rounded-[34px] border border-white/[0.08] bg-[#040a14] shadow-2xl"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80" alt="Modern smart home" width={900} height={675} className="aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#02050a] via-[#02050a]/35 to-transparent" /><div className="absolute left-4 right-4 top-4 flex justify-between"><div className="rounded-2xl border border-white/[0.08] bg-black/60 px-3 py-2 text-xs text-white/60 backdrop-blur-md">LIVE</div><div className="rounded-2xl border border-white/[0.08] bg-black/60 px-3 py-2 text-xs text-white/60 backdrop-blur-md">98.4%</div></div><div className="absolute bottom-4 left-4 right-4 rounded-[24px] border border-white/[0.08] bg-black/55 p-4 backdrop-blur-xl"><div className="grid grid-cols-4 gap-2 text-center text-xs"><div><div className="text-white/25">DEVICES</div><div className="font-semibold text-white">20</div></div><div><div className="text-white/25">PROPS</div><div className="font-semibold text-white">4</div></div><div><div className="text-white/25">AGENTS</div><div className="font-semibold text-emerald-400">6</div></div><div><div className="text-white/25">PING</div><div className="font-semibold text-emerald-400">4ms</div></div></div></div></div></div></div></div></section>
        <section id="stats" className="relative z-10 border-t border-white/[0.04] px-5 py-16 sm:px-8 lg:px-12"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4">{STATS.map((s) => <div key={s.label} className="rounded-[28px] border border-white/[0.06] bg-white/[0.03] p-6 text-center"><div className="mb-1 bg-gradient-to-b from-white to-white/30 bg-clip-text font-mono text-4xl font-bold text-transparent md:text-5xl">{s.value}</div><div className="text-sm text-white/35">{s.label}</div></div>)}</div></section>
        <section id="agents" className="relative z-10 border-t border-white/[0.04] px-5 py-24 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl text-center"><Badge variant="outline" className="mb-5 rounded-full border-indigo-500/20 bg-indigo-500/[0.04] px-4 py-1.5 text-xs text-indigo-300"><Orbit className="mr-1.5 h-3 w-3" />AGENT ECOSYSTEM</Badge><h2 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">Intelligence at every layer</h2><p className="mx-auto mb-12 max-w-2xl text-white/30">Six specialized neural agents work in parallel, continuously learning your patterns and optimizing your environments.</p><div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">{FEATURES.map((f) => <div key={f.title} className="rounded-[28px] border border-white/[0.06] bg-white/[0.03] p-5 text-left transition-colors hover:bg-white/[0.06]"><div className="flex items-start gap-4"><div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${f.gradient} shadow-lg ${f.iconBg}`}><f.icon className="h-5 w-5 text-white" /></div><div><div className="mb-0.5 text-sm font-semibold text-white">{f.title}</div><div className="text-xs text-white/35">{f.desc}</div></div></div></div>)}</div></div></section>
        <section id="pricing" className="relative z-10 border-t border-white/[0.04] px-5 py-24 sm:px-8 lg:px-12"><div className="mx-auto max-w-7xl text-center"><Badge variant="outline" className="mb-5 rounded-full border-indigo-500/20 bg-indigo-500/[0.04] px-4 py-1.5 text-xs text-indigo-300"><Hexagon className="mr-1.5 h-3 w-3" />PRICING</Badge><h2 className="mb-3 text-4xl font-bold tracking-tight text-white md:text-5xl">Scale from one home to a portfolio</h2><div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">{PLANS.map((p) => <div key={p.name} className={`rounded-[32px] border p-6 text-left ${p.featured ? 'border-indigo-500/30 bg-indigo-500/[0.06]' : 'border-white/[0.06] bg-white/[0.03]'}`}><div className="mb-1 text-xs uppercase tracking-wider text-white/35">{p.name}</div><div className="mb-1 font-mono text-3xl font-bold text-white">{p.price}<span className="text-sm font-normal text-white/25">/mo</span></div><div className="mb-6 text-xs text-white/35">{p.desc}</div><Button className="mb-6 w-full rounded-2xl bg-white text-slate-950 hover:bg-white/90">Deploy {p.name}</Button><ul className="space-y-2">{p.features.map((f) => <li key={f} className="text-xs text-white/40">• {f}</li>)}</ul></div>)}</div></div></section>
        <footer className="relative z-10 border-t border-white/[0.04] px-5 py-8 sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-white/25 md:flex-row md:items-center md:justify-between"><div>pomah/living — neural property os</div><div>© 2026 pomah living ai</div></div></footer>
      </main>
    </div>
  );
}

const FEATURES = [
  { icon: Shield, title: "Security Agent", desc: "24/7 CCTV monitoring with intrusion detection.", gradient: "from-sky-400 via-blue-500 to-indigo-600", iconBg: "shadow-sky-500/25" },
  { icon: Zap, title: "Energy Agent", desc: "Optimize electricity and detect anomalies.", gradient: "from-amber-400 via-orange-500 to-rose-600", iconBg: "shadow-amber-500/25" },
  { icon: Droplets, title: "Water Agent", desc: "Tank levels, leaks, and pump control.", gradient: "from-cyan-400 via-teal-500 to-emerald-600", iconBg: "shadow-cyan-500/25" },
  { icon: Bot, title: "Family Assistant", desc: "Voice commands, scenes, and routines.", gradient: "from-violet-400 via-purple-500 to-fuchsia-600", iconBg: "shadow-violet-500/25" },
  { icon: Cpu, title: "Edge AI", desc: "On-device inference for sub-100ms response.", gradient: "from-emerald-400 via-teal-500 to-cyan-600", iconBg: "shadow-emerald-500/25" },
  { icon: Radio, title: "Mesh Network", desc: "Self-healing IoT mesh with 10km range.", gradient: "from-pink-400 via-rose-500 to-red-600", iconBg: "shadow-pink-500/25" },
];

const STATS = [
  { value: "10K+", label: "Devices Connected" },
  { value: "99.9%", label: "Uptime" },
  { value: "2.5M", label: "Automations Run" },
  { value: "<0.3s", label: "Avg Response" },
];

const PLANS = [
  { name: "Basic", price: "$19", desc: "1 property · 20 devices · Core AI", features: ["Security monitoring", "Energy insights", "Water alerts", "Mobile access"] },
  { name: "Plus", price: "$49", desc: "3 properties · 100 devices · Advanced AI", featured: true, features: ["Everything in Basic", "Multi-property view", "Advanced automation", "AI recommendations", "Priority support"] },
  { name: "Enterprise", price: "Custom", desc: "Unlimited · Full agent suite", features: ["Everything in Plus", "Unlimited devices", "Custom AI training", "On-prem option", "Dedicated engineer", "SLA guarantee"] },
];

const TERMINAL_LINES = ["[INIT] bootstrap v3.2.1 — neural core starting...", "[ OK ] cortex.spatial — 4 properties mapped", "[ OK ] cortex.devices — 20 nodes registered", "[ OK ] cortex.security — 8 cameras calibrated", "[ OK ] cortex.energy — grid profile loaded", "[INFO] inference pipeline running at 4.7ms", "[ OK ] system nominal — all agents green"];
