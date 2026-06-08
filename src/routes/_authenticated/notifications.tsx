import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Bell } from "lucide-react";

export const Route = createFileRoute("/_authenticated/notifications")({
  head: () => ({ meta: [{ title: "Notifications — Pomah Living AI" }] }),
  component: () => {
    const q = useQuery({ queryKey: ["notifs"], queryFn: async () => (await supabase.from("notifications").select("*").order("created_at", { ascending: false })).data ?? [] });
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight">Notifications</h1>
        <div className="glass-strong rounded-3xl divide-y divide-border/40 shadow-soft">
          {(q.data ?? []).map((n: any) => (
            <div key={n.id} className="p-4 flex gap-3">
              <span className="h-10 w-10 rounded-2xl gradient-sky text-white flex items-center justify-center shrink-0"><Bell className="h-5 w-5" /></span>
              <div className="flex-1">
                <div className="font-medium">{n.title}</div>
                <div className="text-sm text-muted-foreground">{n.body}</div>
              </div>
              <span className="text-xs text-muted-foreground">{new Date(n.created_at).toLocaleString()}</span>
            </div>
          ))}
          {!q.data?.length && <div className="p-6 text-muted-foreground">All quiet.</div>}
        </div>
      </div>
    );
  },
});
