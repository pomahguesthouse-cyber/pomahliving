import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Shield, Zap, Droplets, Bot, Sparkles,
  Cpu, Globe, Radar, BrainCircuit, Layers, Hexagon,
  Activity, BarChart3, Fingerprint, Orbit, Workflow,
  Satellite, ScanEye, Wifi, Radio,
} from "lucide-react";

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

const TERMINAL_LINES = [
  "[INIT] bootstrap v3.2.1 — neural core starting...",
  "[ OK ] cortex.spatial — 4 properties mapped",
  "[ OK ] cortex.devices — 20 nodes registered",
  "[ OK ] cortex.security — 8 cameras calibrated",
  "[ OK ] cortex.energy — grid profile loaded",
  "[INFO] inference pipeline running at 4.7ms",
  "[ OK ] system nominal — all agents green",
];

function Landing() {
  return (
    <div className="relative min-h-screen bg-[#02050a] overflow-hidden selection:bg-indigo-500/30">
      {/* ── Deep Space Background ── */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(168,85,247,0.08),transparent_50%)]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />

        {/* Starfield - multiple layers for parallax depth */}
        <div className="absolute inset-0 bg-[length:2px_2px] opacity-40"
          style={{ backgroundImage: `radial-gradient(circle at 20% 30%, #fff 0.5px, transparent 0.5px), radial-gradient(circle at 45% 70%, #fff 0.5px, transparent 0.5px), radial-gradient(circle at 70% 20%, #fff 0.5px, transparent 0.5px), radial-gradient(circle at 85% 60%, #fff 0.5px, transparent 0.5px), radial-gradient(circle at 10% 80%, #fff 0.5px, transparent 0.5px), radial-gradient(circle at 55% 40%, #fff 0.5px, transparent 0.5px), radial-gradient(circle at 35% 90%, #fff 0.5px, transparent 0.5px), radial-gradient(circle at 90% 10%, #fff 0.5px, transparent 0.5px)`,
            backgroundSize: '400px 400px, 300px 300px, 500px 500px, 350px 350px, 250px 250px, 450px 450px, 200px 200px, 380px 380px' }}
        />
        <div className="absolute inset-0 bg-[length:4px_4px] opacity-20"
          style={{ backgroundImage: `radial-gradient(circle at 15% 25%, rgba(255,255,255,0.6) 0.5px, transparent 0.5px), radial-gradient(circle at 60% 55%, rgba(255,255,255,0.6) 0.5px, transparent 0.5px), radial-gradient(circle at 80% 85%, rgba(255,255,255,0.6) 0.5px, transparent 0.5px)`,
            backgroundSize: '600px 600px, 500px 500px, 400px 400px' }}
        />

        {/* Scanning grid lines */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px' }}
        />

        {/* Horizontal scanline */}
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-scan" />
      </div>

      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#02050a]/60 border-b border-white/[0.03]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-500/30 relative z-10">
                P
              </div>
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-600 opacity-30 group-hover:opacity-60 blur-md transition-all duration-700" />
              <div className="absolute -inset-2 rounded-xl bg-indigo-500/10 animate-ping-slow opacity-0 group-hover:opacity-100" />
            </div>
            <span className="font-semibold tracking-tight text-white">
              pomah<span className="text-indigo-400">/living</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {["Agents", "Stats", "Pricing"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="text-white/30 hover:text-white/80 transition-all duration-300 relative group/nav">
                {item}
                <span className="absolute -bottom-0.5 left-0 right-0 h-[1px] bg-indigo-400/50 scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/auth"><Button variant="ghost" className="rounded-xl text-white/40 hover:text-white hover:bg-white/[0.04]">Sign in</Button></Link>
            <Link to="/auth"><Button className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20">Get started</Button></Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative z-10 pt-12 pb-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-indigo-500/15 bg-indigo-500/[0.04] px-4 py-1.5 text-xs text-indigo-300/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono">v3.0 — neural core operational</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[0.95]">
              <span className="text-white">living spaces that</span>
              <br />
              <span className="relative inline-block mt-1">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 animate-shimmer bg-[length:200%_100%]">
                  manage themselves
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 rounded-full blur-sm" />
              </span>
              <span className="text-white/10">.</span>
            </h1>

            <p className="text-base md:text-lg text-white/25 max-w-xl leading-relaxed font-light tracking-wide">
              Deploy AI agents across every device in your property portfolio. Security, energy, water, and maintenance — fully autonomous.
            </p>

            <div className="flex gap-3">
              <Link to="/auth">
                <Button size="lg" className="rounded-xl h-12 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 group text-base px-7">
                  Deploy now
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#agents">
                <Button size="lg" variant="outline" className="rounded-xl h-12 border-white/[0.08] text-white/50 hover:text-white hover:bg-white/[0.04] bg-transparent">
                  <BrainCircuit className="mr-1.5 h-4 w-4" />
                  Watch demo
                </Button>
              </a>
            </div>

            {/* Terminal Feed */}
            <div className="max-w-xl rounded-2xl border border-white/[0.04] bg-black/40 backdrop-blur-sm overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/[0.04]">
                <div className="h-2 w-2 rounded-full bg-rose-500/60" />
                <div className="h-2 w-2 rounded-full bg-amber-500/60" />
                <div className="h-2 w-2 rounded-full bg-emerald-500/60" />
                <span className="ml-2 text-[10px] text-white/15 font-mono tracking-wider uppercase">agent terminal — boot sequence</span>
              </div>
              <div className="px-4 py-3 space-y-1">
                {TERMINAL_LINES.map((line, i) => (
                  <div key={i} className="text-[11px] font-mono text-white/30 animate-fadeIn" style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'both' }}>
                    <span className={line.startsWith("[ OK ]") ? "text-emerald-400/70" : line.startsWith("[INFO]") ? "text-indigo-400/50" : "text-white/20"}>
                      {line}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-1 text-[11px] font-mono">
                  <span className="text-emerald-400/70">$</span>
                  <span className="text-white/20 animate-type-cursor">_</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Holographic 3D Scene */}
          <div className="relative flex items-center justify-center py-8">
            {/* Orbital rings */}
            <div className="absolute w-[440px] h-[440px] rounded-full border border-indigo-500/10 animate-spin-slow" />
            <div className="absolute w-[360px] h-[360px] rounded-full border border-purple-500/10 animate-spin-slower" style={{ animationDirection: 'reverse' }} />
            <div className="absolute w-[280px] h-[280px] rounded-full border border-indigo-400/10 animate-spin-slowest" />

            {/* Orbital dots */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
              <div key={i} className="absolute w-[440px] h-[440px] animate-spin-slow" style={{ animationDelay: `${i * 0.5}s` }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400/40 shadow-[0_0_6px_rgba(99,102,241,0.3)]"
                  style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)`, transformOrigin: 'center 220px' }} />
              </div>
            ))}

            {/* Center — Main holographic card */}
            <div className="relative group perspective-[1000px]">
              {/* Rotating gradient border */}
              <div className="absolute -inset-[2px] rounded-3xl bg-[conic-gradient(from_var(--angle,0deg),#6366f1,#a855f7,#ec4899,#6366f1)] opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-border-spin" />
              <div className="absolute -inset-[2px] rounded-3xl bg-[conic-gradient(from_var(--angle,0deg),#6366f1,#a855f7,#ec4899,#6366f1)] opacity-20 blur-xl animate-border-spin" />

              <div className="relative rounded-3xl overflow-hidden bg-[#040a14] border border-white/[0.06] transform-gpu group-hover:rotate-y-2 group-hover:rotate-x-1 transition-transform duration-700 ease-out"
                style={{ transformStyle: 'preserve-3d' }}>
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                  alt=""
                  width={800} height={600}
                  className="object-cover aspect-[4/3] scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050a] via-[#02050a]/40 to-transparent" />

                {/* HUD overlay elements */}
                <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                  <div className="flex items-center gap-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/[0.06] px-2.5 py-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] text-white/50 font-mono tracking-wider">LIVE</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/[0.06] px-2.5 py-1.5">
                    <span className="text-[10px] text-white/30 font-mono">98.4%</span>
                    <Activity className="h-3 w-3 text-emerald-400" />
                  </div>
                </div>

                {/* Center badge - appearing on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
                    <div className="text-xs text-white/60 font-mono text-center">
                      <ScanEye className="h-5 w-5 mx-auto mb-1 text-indigo-400" />
                      AI SCANNING
                    </div>
                  </div>
                </div>

                {/* Radar sweep overlay */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(99,102,241,0.08)_60%,transparent_70%)] animate-pulse-slow" />
                </div>

                {/* Bottom HUD */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="backdrop-blur-xl bg-black/50 border border-white/[0.06] rounded-xl p-3">
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div>
                        <div className="text-[9px] text-white/25 font-mono tracking-wider">DEVICES</div>
                        <div className="text-sm font-semibold text-white">20</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-white/25 font-mono tracking-wider">PROPS</div>
                        <div className="text-sm font-semibold text-white">4</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-white/25 font-mono tracking-wider">AGENTS</div>
                        <div className="text-sm font-semibold text-emerald-400">6</div>
                      </div>
                      <div>
                        <div className="text-[9px] text-white/25 font-mono tracking-wider">PING</div>
                        <div className="text-sm font-semibold text-emerald-400">4ms</div>
                      </div>
                    </div>
                    <div className="mt-2 h-[2px] rounded-full bg-white/[0.04] overflow-hidden">
                      <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse-slow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating data chips */}
            <div className="hidden lg:block absolute -right-6 top-8 backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 py-2 animate-float" style={{ animationDelay: '0s' }}>
              <div className="flex items-center gap-2 text-xs">
                <Shield className="h-3 w-3 text-emerald-400" />
                <span className="text-white/50">AI Guard</span>
                <span className="text-emerald-400/70">active</span>
              </div>
            </div>
            <div className="hidden lg:block absolute -left-8 bottom-16 backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 py-2 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2 text-xs">
                <Zap className="h-3 w-3 text-amber-400" />
                <span className="text-white/50">Energy</span>
                <span className="text-amber-400/70">-23%</span>
              </div>
            </div>
            <div className="hidden lg:block absolute right-4 bottom-2 backdrop-blur-xl bg-white/[0.03] border border-white/[0.06] rounded-xl px-3 py-2 animate-float" style={{ animationDelay: '4s' }}>
              <div className="flex items-center gap-2 text-xs">
                <Wifi className="h-3 w-3 text-indigo-400" />
                <span className="text-white/50">Mesh</span>
                <span className="text-indigo-400/70">stable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section id="stats" className="relative z-10 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <div key={s.label}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.04] p-6 text-center overflow-hidden hover:bg-white/[0.04] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/30 bg-clip-text text-transparent mb-1 font-mono tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-sm text-white/30">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agents Section ── */}
      <section id="agents" className="relative z-10 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Badge variant="outline" className="rounded-full border-indigo-500/20 text-indigo-300 bg-indigo-500/[0.04] mb-5 px-4 py-1.5 text-xs font-mono tracking-wider">
              <Orbit className="h-3 w-3 mr-1.5" />
              AGENT_ECOSYSTEM v3.0
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
              Intelligence at every layer
            </h2>
            <p className="text-white/25 max-w-2xl mx-auto font-light">
              Six specialized neural agents work in parallel, continuously learning your patterns and optimizing your environments in real-time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {FEATURES.map((f) => (
              <div key={f.title}
                className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.04] p-5 hover:bg-white/[0.04] transition-all duration-500 overflow-hidden">
                {/* Hover scanline effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />

                <div className="relative flex items-start gap-4">
                  <div className={`shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center shadow-lg ${f.iconBg}`}>
                    <f.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-white text-sm mb-0.5">{f.title}</div>
                    <div className="text-xs text-white/30">{f.desc}</div>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="relative mt-4 h-[1px] bg-white/[0.04] overflow-hidden">
                  <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent transition-all duration-700" />
                </div>
              </div>
            ))}
          </div>

          {/* Capabilities marquee */}
          <div className="mt-12 overflow-hidden">
            <div className="flex gap-3 animate-marquee">
              {[...CAPABILITIES, ...CAPABILITIES].map((c, i) => (
                <span key={i}
                  className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-mono tracking-wide transition-all duration-300 ${
                    c.active
                      ? "bg-indigo-500/8 text-indigo-300/80 border border-indigo-500/15"
                      : "bg-white/[0.02] text-white/20 border border-white/[0.04]"
                  }`}>
                  {c.active && <span className="h-1 w-1 rounded-full bg-emerald-400/60" />}
                  {c.label}
                  {!c.active && <span className="text-[9px] text-white/15 ml-0.5">(dev)</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Architecture Preview ── */}
      <section className="relative z-10 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Badge variant="outline" className="rounded-full border-purple-500/20 text-purple-300 bg-purple-500/[0.04] mb-5 px-4 py-1.5 text-xs font-mono tracking-wider">
                <Layers className="h-3 w-3 mr-1.5" />
                UNIFIED_ARCHITECTURE
              </Badge>
              <h2 className="text-4xl font-bold tracking-tight text-white mb-3">
                One neural fabric to rule them all
              </h2>
              <p className="text-white/25 mb-8 leading-relaxed font-light">
                From security cameras to water pumps, every device communicates through our encrypted mesh. Monitor, automate, and analyze across all properties from a single holographic interface.
              </p>
              <div className="space-y-2.5">
                {[
                  { icon: Globe, label: "Multi-property neural dashboard" },
                  { icon: Workflow, label: "Cross-device autonomous workflows" },
                  { icon: Satellite, label: "Distributed AI inference engine" },
                  { icon: Fingerprint, label: "Zero-trust device authentication" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-white/40 group/item cursor-default">
                    <div className="h-8 w-8 rounded-lg bg-indigo-500/[0.06] border border-indigo-500/10 flex items-center justify-center shrink-0 group-hover/item:bg-indigo-500/[0.1] transition-colors">
                      <item.icon className="h-4 w-4 text-indigo-400/60" />
                    </div>
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Holographic dashboard preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 via-indigo-500/5 to-transparent rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl border border-white/[0.04] bg-[#040a14]/80 backdrop-blur-sm overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.04]">
                  <div className="h-2 w-2 rounded-full bg-rose-500/60" />
                  <div className="h-2 w-2 rounded-full bg-amber-500/60" />
                  <div className="h-2 w-2 rounded-full bg-emerald-500/60" />
                  <span className="ml-2 text-[10px] text-white/15 font-mono tracking-wider uppercase">neural.console — live</span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping-slow" />
                    <span className="text-[10px] text-emerald-400/50 font-mono">streaming</span>
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Security", value: "98%", color: "from-emerald-500 to-emerald-400" },
                      { label: "Energy", value: "76%", color: "from-amber-500 to-amber-400" },
                      { label: "Water", value: "92%", color: "from-cyan-500 to-cyan-400" },
                      { label: "Climate", value: "84%", color: "from-violet-500 to-violet-400" },
                    ].map((m) => (
                      <div key={m.label} className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] text-white/30 font-mono tracking-wider">{m.label}</span>
                          <span className="text-xs font-mono text-white/50">{m.value}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                          <div className={`h-full rounded-full bg-gradient-to-r ${m.color} animate-pulse-slow`}
                            style={{ width: m.value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-white/30 font-mono tracking-wider">NEURAL LOAD</span>
                      <div className="flex items-center gap-1">
                        {[1,2,3,4,5].map((i) => (
                          <div key={i} className="h-3 w-1 rounded-full bg-emerald-400/30"
                            style={{ animationDelay: `${i * 0.1}s` }}>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
                      <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="relative z-10 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <Badge variant="outline" className="rounded-full border-indigo-500/20 text-indigo-300 bg-indigo-500/[0.04] mb-5 px-4 py-1.5 text-xs font-mono tracking-wider">
              <Hexagon className="h-3 w-3 mr-1.5" />
              PRICING_TABLE
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
              Scale from one home to a portfolio
            </h2>
            <p className="text-white/25 max-w-2xl mx-auto font-light">
              No hidden fees. No long-term contracts. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {PLANS.map((p) => (
              <div key={p.name}
                className={`group relative rounded-2xl border transition-all duration-500 ${
                  p.featured
                    ? "border-indigo-500/30 bg-gradient-to-b from-indigo-500/[0.04] to-transparent shadow-xl shadow-indigo-500/5 scale-[1.02] md:scale-105"
                    : "border-white/[0.04] bg-white/[0.02] hover:border-white/[0.08]"
                }`}>
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-0.5 text-[10px] font-semibold text-white tracking-wider font-mono uppercase shadow-lg shadow-indigo-600/30">
                    flagship
                  </div>
                )}
                <div className="p-6">
                  <div className="text-xs text-white/30 font-mono tracking-wider mb-1">{p.name}</div>
                  <div className="text-3xl font-bold text-white mb-1 font-mono tracking-tight">
                    {p.price}
                    <span className="text-sm text-white/20 font-normal font-sans">/mo</span>
                  </div>
                  <div className="text-xs text-white/25 mb-6">{p.desc}</div>
                  <Link to="/auth">
                    <Button className={`w-full rounded-xl mb-6 text-sm ${
                      p.featured
                        ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                        : "bg-white/[0.04] hover:bg-white/[0.08] text-white/60 border border-white/[0.06]"
                    }`}>
                      Deploy {p.name}
                    </Button>
                  </Link>
                  <ul className="space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-white/35">
                        <div className="h-1 w-1 rounded-full bg-emerald-500/50 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-10 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.04] bg-gradient-to-br from-indigo-600/[0.06] via-purple-600/[0.03] to-transparent p-14 md:p-24 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(99,102,241,0.08),transparent_60%)]" />
            <div className="absolute inset-0 opacity-[0.03]"
              style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px' }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/10 bg-indigo-500/[0.04] px-4 py-1.5 text-xs text-indigo-300/60 mb-6 font-mono">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                ready to deploy — 2,847 agents active
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Ready to make your space intelligent?
              </h2>
              <p className="text-white/25 max-w-xl mx-auto mb-8 font-light">
                Join thousands of property managers and homeowners who trust the Pomah neural network.
              </p>
              <Link to="/auth">
                <Button size="lg" className="rounded-xl h-12 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 group text-base px-8">
                  Initialize deployment
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative z-10 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-white/20 font-mono">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-[10px]">P</div>
            pomah/living — neural property os
          </div>
          <div className="text-xs text-white/15 font-mono">
            © 2026 pomah living ai — all systems nominal
          </div>
          <nav className="flex items-center gap-6 text-xs text-white/20 font-mono">
            <a href="#" className="hover:text-white/50 transition-colors">privacy</a>
            <a href="#" className="hover:text-white/50 transition-colors">terms</a>
            <a href="#" className="hover:text-white/50 transition-colors">status</a>
          </nav>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scan {
          0% { top: -2%; }
          100% { top: 102%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes spin-slowest {
          from { transform: rotate(0deg); }
          to { transform: rotate(180deg); }
        }
        @keyframes border-spin {
          to { --angle: 360deg; }
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes type-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.8); opacity: 0; }
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
        .animate-scan { animation: scan 6s linear infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-slower { animation: spin-slower 25s linear infinite; }
        .animate-spin-slowest { animation: spin-slowest 30s linear infinite; }
        .animate-border-spin { animation: border-spin 4s linear infinite; }
        .animate-shimmer { animation: shimmer 6s linear infinite; }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out both; }
        .animate-type-cursor { animation: type-cursor 0.8s step-end infinite; }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-ping-slow { animation: ping-slow 3s ease-out infinite; }
        .animate-pulse-slow { animation: pulse 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

const CAPABILITIES = [
  { label: "anomaly detection", active: true },
  { label: "predictive analytics", active: true },
  { label: "real-time monitoring", active: true },
  { label: "edge computing", active: true },
  { label: "biometric access", active: false },
  { label: "neural forecasting", active: true },
  { label: "mesh routing", active: true },
  { label: "voice control", active: false },
  { label: "cross-correlation", active: true },
  { label: "auto-remediation", active: true },
  { label: "digital twin", active: false },
  { label: "federated learning", active: false },
];
