import { NextResponse } from "next/server";

export async function GET() {
  const specificDate = new Date("2025-01-14T23:43:28.178Z");
  const today = new Date();
  console.log({ today, specificDate });

  if (today < specificDate)
    return NextResponse.json({
      success: "available",
    });

  return NextResponse.json({
    error: "expired",
  });
}

export const revalidate = 0;
