import { createFileRoute } from "@tanstack/react-router";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Shield, Zap, Droplets, Wrench, Home as HomeIcon, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authenticated/chat")({
  head: () => ({ meta: [{ title: "AI Agents — Pomah Living AI" }] }),
  component: Chat,
});

const AGENTS = [
  { name: "Family Assistant", icon: HomeIcon, grad: "gradient-sky" },
  { name: "Security", icon: Shield, grad: "gradient-coral" },
  { name: "Energy", icon: Zap, grad: "gradient-peach" },
  { name: "Water", icon: Droplets, grad: "gradient-sky" },
  { name: "Maintenance", icon: Wrench, grad: "gradient-mint" },
  { name: "Property Manager", icon: BarChart3, grad: "gradient-lilac" },
];

const SUGGESTIONS = [
  "Turn off all lights",
  "Show today's electricity usage",
  "Which devices are offline?",
  "Any unusual activity last night?",
];

function Chat() {
  const [agent, setAgent] = useState(AGENTS[0]);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => { scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight); }, [messages]);

  const send = (text: string) => {
    if (!text.trim() || status === "streaming" || status === "submitted") return;
    sendMessage({ text });
    setInput("");
  };

  return (
    <div className="grid lg:grid-cols-[260px_1fr] gap-4 h-[calc(100vh-7rem)]">
      <aside className="glass-strong rounded-3xl p-3 shadow-soft space-y-1 hidden lg:block">
        <div className="px-3 py-2 text-xs text-muted-foreground">Agents</div>
        {AGENTS.map((a) => (
          <button key={a.name} onClick={() => setAgent(a)}
            className={cn("w-full flex items-center gap-3 rounded-2xl px-3 py-2 text-sm transition-all",
              a.name === agent.name ? "bg-accent" : "hover:bg-accent")}>
            <span className={`${a.grad} h-8 w-8 rounded-xl flex items-center justify-center text-white`}>
              <a.icon className="h-4 w-4" />
            </span>
            {a.name}
          </button>
        ))}
      </aside>

      <div className="glass-strong rounded-3xl flex flex-col shadow-soft overflow-hidden">
        <header className="p-4 border-b border-border/40 flex items-center gap-3">
          <span className={`${agent.grad} h-10 w-10 rounded-2xl flex items-center justify-center text-white`}>
            <agent.icon className="h-5 w-5" />
          </span>
          <div>
            <div className="font-semibold">{agent.name} Agent</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1.5">
              <span className="live-dot h-1.5 w-1.5 rounded-full bg-mint" /> Connected to Lovable AI
            </div>
          </div>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-10">
              <div className={`${agent.grad} h-16 w-16 rounded-3xl flex items-center justify-center text-white mx-auto mb-4`}>
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold">How can I help with your property?</h3>
              <p className="text-sm text-muted-foreground mb-6">Ask me anything about your home.</p>
              <div className="flex flex-wrap gap-2 justify-center max-w-md mx-auto">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)} className="glass rounded-full px-4 py-2 text-sm hover:bg-accent transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((m) => {
            const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
            const isUser = m.role === "user";
            return (
              <div key={m.id} className={cn("flex", isUser ? "justify-end" : "justify-start")}>
                <div className={cn("max-w-[80%] rounded-3xl px-4 py-3 text-sm whitespace-pre-wrap",
                  isUser ? "bg-primary text-primary-foreground rounded-br-md" : "glass rounded-bl-md")}>
                  {text || (status === "streaming" ? "…" : "")}
                </div>
              </div>
            );
          })}
          {status === "submitted" && (
            <div className="flex justify-start">
              <div className="glass rounded-3xl rounded-bl-md px-4 py-3 text-sm text-muted-foreground">Thinking…</div>
            </div>
          )}
        </div>

        <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="p-3 border-t border-border/40 flex gap-2">
          <input
            value={input} onChange={(e) => setInput(e.target.value)}
            placeholder={`Message ${agent.name}…`}
            className="flex-1 rounded-2xl bg-background/60 border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
            autoFocus
          />
          <Button type="submit" disabled={status === "streaming" || status === "submitted"} className="rounded-2xl px-4">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
