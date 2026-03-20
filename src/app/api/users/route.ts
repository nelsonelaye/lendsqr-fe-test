import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const page = Number(request.nextUrl.searchParams.get("page") ?? 1);
  const size = Number(request.nextUrl.searchParams.get("size") ?? 10);

  const res = await fetch(process.env.API_URL!, {
    headers: { Authorization: `Bearer ${process.env.JSON_GENERATOR_TOKEN}` },
    next: { revalidate: 60 },
  });

  if (!res.ok) return NextResponse.json({ error: "Upstream error" }, { status: res.status });

  const all = await res.json();
  const total = all.length;
  const data = all.slice((page - 1) * size, page * size);

  return NextResponse.json({ data, total });
}
