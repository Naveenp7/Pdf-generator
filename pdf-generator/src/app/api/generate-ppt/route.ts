import { NextRequest, NextResponse } from "next/server";
import { generatePPTJSON } from "@/lib/groq";

export async function POST(req: NextRequest) {
    try {
        const { topic, slideCount } = await req.json();

        if (!topic) {
            return NextResponse.json(
                { error: "Missing topic" },
                { status: 400 }
            );
        }

        const data = await generatePPTJSON(topic, slideCount || 5);

        // Ensure data has slides array
        if (!data.slides || !Array.isArray(data.slides)) {
            return NextResponse.json(
                { error: "Invalid AI response structure" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Failed to generate presentation" },
            { status: 500 }
        );
    }
}
