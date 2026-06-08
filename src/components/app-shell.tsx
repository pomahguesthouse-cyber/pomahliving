import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  LayoutGrid, Home, Cpu, Bot, Workflow, Video, Bell, Settings, LogOut, Moon, Sun,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "@tanstack/react-router";
import logo from "@/assets/pomah-logo.png";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutGrid },
  { to: "/properties", label: "Properties", icon: Home },
  { to: "/devices", label: "Devices", icon: Cpu },
  { to: "/automations", label: "Automations", icon: Workflow },
  { to: "/cctv", label: "CCTV", icon: Video },
  { to: "/chat", label: "AI Agents", icon: Bot },
  { to: "/notifications", label: "Notifications", icon: Bell },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [dark, setDark] = useState(true);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? ""));
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <div className="relative min-h-screen overflow-hidden gradient-hero">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-70" />
      <div className="relative z-10 flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 flex-col gap-2 p-4">
          <div className="glass-strong rounded-3xl p-3 flex items-center gap-3 shadow-soft">
            <img src={logo} alt="Pomah" className="h-10 w-10 rounded-2xl" />
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">Pomah Living</div>
              <div className="text-xs text-muted-foreground">AI Property OS</div>
            </div>
          </div>
          <nav className="glass-strong rounded-3xl p-2 flex-1 shadow-soft">
            {NAV.map(({ to, label, icon: Icon }) => {
              const active = pathname === to || pathname.startsWith(to + "/");
              return (
                <Link
                  key={to}
                  to={to}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all",
                    active
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "text-foreground/80 hover:bg-accent hover:text-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="glass-strong rounded-3xl p-3 shadow-soft text-sm">
            <div className="flex items-center justify-between gap-2">
              <div className="truncate">
                <div className="font-medium truncate">{email || "Owner"}</div>
                <div className="text-xs text-muted-foreground">Property Owner</div>
              </div>
              <button onClick={() => setDark((d) => !d)} className="rounded-xl p-2 hover:bg-accent" aria-label="Toggle theme">
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
              <button onClick={signOut} className="rounded-xl p-2 hover:bg-accent" aria-label="Sign out">
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 max-w-[1600px]">
          {children}
        </main>
      </div>
    </div>
  );
}
