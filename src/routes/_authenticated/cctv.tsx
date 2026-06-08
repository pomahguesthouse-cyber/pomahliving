import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Video } from "lucide-react";

export const Route = createFileRoute("/_authenticated/cctv")({
  head: () => ({ meta: [{ title: "CCTV — Pomah Living AI" }] }),
  component: () => {
    const cams = useQuery({
      queryKey: ["cams"],
      queryFn: async () => (await supabase.from("devices").select("*").eq("device_type", "cctv")).data ?? [],
    });
    return (
      <div className="space-y-6">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">CCTV Monitoring</h1>
          <p className="text-muted-foreground">Live feeds with AI event detection.</p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(cams.data ?? []).map((c: any) => (
            <div key={c.id} className="glass-strong rounded-3xl overflow-hidden shadow-soft">
              <div className="aspect-video relative bg-black/80 gradient-aurora flex items-center justify-center">
                <Video className="h-12 w-12 text-white/70" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 glass rounded-full px-2.5 py-1 text-xs">
                  <span className="live-dot h-1.5 w-1.5 rounded-full bg-coral" /> LIVE
                </div>
              </div>
              <div className="p-4">
                <div className="font-medium">{c.device_name}</div>
                <div className="text-xs text-muted-foreground">No events in the last hour</div>
              </div>
            </div>
          ))}
          {!cams.data?.length && <div className="text-muted-foreground col-span-full">No cameras yet.</div>}
        </div>
      </div>
    );
  },
});
