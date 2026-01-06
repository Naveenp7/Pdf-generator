import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY || 'dummy_key_for_build',
});

export default groq;

export const generateResumeJSON = async (currentResume: string, jobDescription: string) => {
    const systemPrompt = `
    You are an expert Resume Writer and Career Coach. 
    Your task is to take a user's current resume (or profile data) and a target job description, 
    and generate a tailored, high-ATS-score resume in structured JSON format.
    
    Output strictly valid JSON matching this schema:
    {
      "personalInfo": { "fullName": "", "email": "", "phone": "", "linkedin": "", "location": "" },
      "summary": "Professional summary optimized for the job...",
      "skills": ["Skill 1", "Skill 2", ...],
      "experience": [
        { 
          "company": "", 
          "role": "", 
          "duration": "", 
          "points": ["Action verb + task + result", ...] 
        }
      ],
      "education": [{ "institution": "", "degree": "", "year": "" }],
      "projects": [{ "name": "", "description": "", "techStack": [] }]
    }

    Do not include markdown formatting like \`\`\`json. Return only the raw JSON string.
  `;

    const userPrompt = `
    Current Resume Content:
    ${currentResume}

    Target Job Description:
    ${jobDescription}
  `;

    try {
        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.2,
            response_format: { type: "json_object" },
        });

        const content = completion.choices[0]?.message?.content || "{}";
        return JSON.parse(content);
    } catch (error) {
        console.error("Error generating resume:", error);
        throw new Error("Failed to generate resume JSON");
    }
};
