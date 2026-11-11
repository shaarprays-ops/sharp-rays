
import { generateLLMS } from "@/sanity/lib/llms-content";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const content = await generateLLMS(true);

    return new Response(content, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
   console.error(
  "[LLMS ERROR]",
  error instanceof Error
    ? {
        name: error.name,
        message: error.message,
        stack: error.stack,
      }
    : error
);

    return new Response("Unable to generate llms-full.txt", {
      status: 503,
    });
  }
}
