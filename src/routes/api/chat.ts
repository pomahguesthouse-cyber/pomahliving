import { createFileRoute } from "@tanstack/react-router";
import {
  convertToModelMessages, streamText, type UIMessage,
} from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM = `You are Pomah Living AI — a friendly, concise property AI assistant.
You help homeowners monitor and control their smart properties (lights, AC, locks, cameras, water pumps, sensors).
Format responses with short paragraphs and bullet points. When suggesting an action, end with a clear "Suggested action:" line.
You don't actually execute hardware actions in this session — describe what you would do.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) return new Response("Bad request", { status: 400 });

        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM,
          messages: await convertToModelMessages(messages),
        });
        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
