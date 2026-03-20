import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const apiUrl = process.env.API_URL;
  const token = process.env.JSON_GENERATOR_TOKEN;

  if (!apiUrl || !token) {
    return NextResponse.json(
      { error: "API configuration is missing" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Upstream API error: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Find the user by id field
    const user = Array.isArray(data)
      ? data.find((u: { id: string }) => u.id === params.id)
      : null;

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error(`[GET /api/users/${params.id}]`, error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
