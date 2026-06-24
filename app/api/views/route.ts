import { getViewStats, recordView } from "@/lib/view-counter";

export async function POST() {
  try {
    const stats = await recordView();
    return Response.json(stats);
  } catch {
    return Response.json({ today: null, month: null }, { status: 503 });
  }
}

export async function GET() {
  try {
    const stats = await getViewStats();
    return Response.json(stats);
  } catch {
    return Response.json({ today: null, month: null }, { status: 503 });
  }
}
