import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Droplets, Bot, Sparkles } from "lucide-react";
import hero from "@/assets/hero-villa.jpg";
import logo from "@/assets/pomah-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pomah Living AI — AI-powered living spaces that manage themselves" },
      { name: "description", content: "Smart home and property automation with AI Agents. Subscription-based monitoring, automation, and insights for homes, villas, offices, and more." },
      { property: "og:title", content: "Pomah Living AI" },
      { property: "og:description", content: "AI-powered living spaces that manage themselves." },
    ],
  }),
  component: Landing,
});

const FEATURES = [
  { icon: Shield, title: "Security Agent", desc: "24/7 CCTV monitoring with intrusion detection.", grad: "gradient-coral" },
  { icon: Zap, title: "Energy Agent", desc: "Optimize electricity and detect anomalies.", grad: "gradient-peach" },
  { icon: Droplets, title: "Water Agent", desc: "Tank levels, leaks, and pump control.", grad: "gradient-sky" },
  { icon: Bot, title: "Family Assistant", desc: "Voice commands, scenes, and routines.", grad: "gradient-lilac" },
];
const PLANS = [
  { name: "Basic", price: "$19", desc: "1 property · 20 devices · Core AI agents" },
  { name: "Plus", price: "$49", desc: "3 properties · 100 devices · Advanced AI", featured: true },
  { name: "Enterprise", price: "Custom", desc: "Unlimited everything · Full agent suite" },
];

function Landing() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 glass border-b border-border/40">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="" className="h-9 w-9 rounded-xl" />
            <span className="font-semibold tracking-tight">Pomah Living AI</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/auth"><Button variant="ghost" className="rounded-xl">Sign in</Button></Link>
            <Link to="/auth"><Button className="rounded-xl">Get started</Button></Link>
          </div>
        </div>
      </header>

      <section className="relative gradient-hero">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs mb-5">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> AI Property Operating System
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.05]">
              Living spaces that <span className="bg-clip-text text-transparent gradient-sky">manage themselves</span>.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground text-balance max-w-xl">
              Connect every device. Let AI Agents handle security, energy, water, and maintenance — across your home, villa, or portfolio.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/auth"><Button size="lg" className="rounded-xl h-12">Start free trial <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <a href="#features"><Button size="lg" variant="outline" className="rounded-xl h-12 glass">See agents</Button></a>
            </div>
          </div>
          <div className="relative">
            <img src={hero} alt="Modern smart villa at dusk" width={1920} height={1080} className="rounded-3xl shadow-lift object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -left-6 glass-strong rounded-2xl p-4 shadow-soft hidden md:block">
              <div className="text-xs text-muted-foreground">Active right now</div>
              <div className="text-2xl font-semibold">20 devices online</div>
              <div className="text-xs text-mint">All systems nominal</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight mb-2">Your AI Agent ecosystem</h2>
        <p className="text-muted-foreground mb-10">Six specialized agents, one calm interface.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="glass-strong rounded-3xl p-6 shadow-soft">
              <div className={`${f.grad} h-12 w-12 rounded-2xl flex items-center justify-center text-white mb-4`}>
                <f.icon className="h-6 w-6" />
              </div>
              <div className="font-semibold mb-1">{f.title}</div>
              <div className="text-sm text-muted-foreground">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight mb-2">Simple plans</h2>
        <p className="text-muted-foreground mb-10">Scale from one home to an entire portfolio.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {PLANS.map((p) => (
            <div key={p.name} className={`rounded-3xl p-6 shadow-soft ${p.featured ? "glass-strong shadow-glow ring-1 ring-primary/30" : "glass"}`}>
              <div className="text-sm text-muted-foreground">{p.name}</div>
              <div className="text-4xl font-semibold my-2">{p.price}<span className="text-base text-muted-foreground">/mo</span></div>
              <div className="text-sm text-muted-foreground mb-6">{p.desc}</div>
              <Link to="/auth"><Button className="w-full rounded-xl" variant={p.featured ? "default" : "outline"}>Choose {p.name}</Button></Link>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        © 2026 Pomah Living AI — AI-powered living spaces.
      </footer>
    </div>
  );
}
