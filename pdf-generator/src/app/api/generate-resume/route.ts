import { NextRequest, NextResponse } from "next/server";
import { generateResumeJSON } from "@/lib/groq";

export async function POST(req: NextRequest) {
    try {
        const { currentResume, jobDescription } = await req.json();

        if (!currentResume && !jobDescription) {
            return NextResponse.json(
                { error: "Missing resume content or job description" },
                { status: 400 }
            );
        }

        const data = await generateResumeJSON(currentResume, jobDescription);
        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Failed to generate resume" },
            { status: 500 }
        );
    }
}
