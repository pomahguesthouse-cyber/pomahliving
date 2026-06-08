import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Home, MapPin } from "lucide-react";

export const Route = createFileRoute("/_authenticated/properties")({
  head: () => ({ meta: [{ title: "Properties — Pomah Living AI" }] }),
  component: Properties,
});

function Properties() {
  const q = useQuery({ queryKey: ["properties"], queryFn: async () => (await supabase.from("properties").select("*")).data ?? [] });
  const devs = useQuery({ queryKey: ["devices"], queryFn: async () => (await supabase.from("devices").select("property_id, online_status")).data ?? [] });

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">Properties</h1>
        <p className="text-muted-foreground">Every space you manage.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {(q.data ?? []).map((p: any) => {
          const items = (devs.data ?? []).filter((d: any) => d.property_id === p.id);
          return (
            <div key={p.id} className="glass-strong rounded-3xl overflow-hidden shadow-soft">
              <div className="h-32 gradient-aurora relative">
                <div className="absolute inset-0 flex items-center justify-center"><Home className="h-12 w-12 text-white/80" /></div>
              </div>
              <div className="p-5">
                <div className="font-semibold text-lg">{p.property_name}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1"><MapPin className="h-3 w-3" />{p.address}</div>
                <div className="flex items-center gap-4 text-sm mt-4">
                  <span><b>{items.length}</b> devices</span>
                  <span className="text-mint"><b>{items.filter((d) => d.online_status).length}</b> online</span>
                  <span className="capitalize ml-auto rounded-full glass px-2 py-0.5 text-xs">{p.property_type}</span>
                </div>
              </div>
            </div>
          );
        })}
        {!q.data?.length && <div className="text-muted-foreground">No properties yet.</div>}
      </div>
    </div>
  );
}
