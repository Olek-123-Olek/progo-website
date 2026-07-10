import { getViewStats, recordView } from "@/lib/view-counter";

export const dynamic = "force-dynamic";

function jsonResponse(stats: { today: number; month: number }) {
  return Response.json(stats, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate",
      Pragma: "no-cache",
    },
  });
}

export async function POST() {
  try {
    const stats = await recordView();
    return jsonResponse(stats);
  } catch {
    return Response.json({ today: null, month: null }, { status: 503 });
  }
}

export async function GET() {
  try {
    const stats = await getViewStats();
    return jsonResponse(stats);
  } catch {
    return Response.json({ today: null, month: null }, { status: 503 });
  }
}
