import { createFileRoute } from "@tanstack/react-router";
import { Workflow, Clock, Activity, Cloud, Cpu, MapPin, Lightbulb, MessageSquare, Mail, Sparkles } from "lucide-react";

export const Route = createFileRoute("/_authenticated/automations")({
  head: () => ({ meta: [{ title: "Automations — Pomah Living AI" }] }),
  component: () => {
    const TRIGGERS = [
      { icon: Clock, label: "Time" }, { icon: Activity, label: "Motion" },
      { icon: Cpu, label: "Sensor" }, { icon: Lightbulb, label: "Device state" },
      { icon: Cloud, label: "Weather" }, { icon: MapPin, label: "Geofence" },
    ];
    const ACTIONS = [
      { icon: Lightbulb, label: "Toggle device" }, { icon: MessageSquare, label: "WhatsApp" },
      { icon: Mail, label: "Email" }, { icon: Sparkles, label: "Run AI agent" },
    ];
    const PRESETS = [
      { name: "Goodnight scene", desc: "Lock doors, dim lights, set AC to 22°C at 22:00." },
      { name: "Away mode", desc: "Arm cameras, motion alerts on WhatsApp when no one home." },
      { name: "Sunrise", desc: "Open curtains, start coffee plug at sunrise." },
      { name: "Leak guard", desc: "If water tank drops >10% in 1h → close pump + notify." },
    ];
    return (
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">Automations</h1>
          <p className="text-muted-foreground">Build flows with triggers, conditions, and actions.</p>
        </header>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="glass-strong rounded-3xl p-5 shadow-soft">
            <div className="font-medium mb-3">Triggers</div>
            <div className="flex flex-wrap gap-2">{TRIGGERS.map((t) => (
              <span key={t.label} className="glass rounded-2xl px-3 py-2 text-sm flex items-center gap-2"><t.icon className="h-4 w-4 text-primary" />{t.label}</span>
            ))}</div>
          </div>
          <div className="glass-strong rounded-3xl p-5 shadow-soft">
            <div className="font-medium mb-3">Actions</div>
            <div className="flex flex-wrap gap-2">{ACTIONS.map((t) => (
              <span key={t.label} className="glass rounded-2xl px-3 py-2 text-sm flex items-center gap-2"><t.icon className="h-4 w-4 text-lilac" />{t.label}</span>
            ))}</div>
          </div>
        </div>
        <div>
          <div className="font-medium mb-3 px-1">Running automations</div>
          <div className="grid sm:grid-cols-2 gap-3">{PRESETS.map((p) => (
            <div key={p.name} className="glass-strong rounded-3xl p-5 shadow-soft flex items-start gap-4">
              <span className="gradient-lilac h-11 w-11 rounded-2xl flex items-center justify-center text-white shrink-0"><Workflow className="h-5 w-5" /></span>
              <div className="flex-1">
                <div className="font-medium">{p.name}</div>
                <div className="text-sm text-muted-foreground">{p.desc}</div>
              </div>
              <span className="text-xs rounded-full bg-mint/20 text-mint px-2 py-1">Active</span>
            </div>
          ))}</div>
        </div>
      </div>
    );
  },
});
