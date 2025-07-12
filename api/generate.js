export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { goal } = await req.json();

  const apiKey = process.env.OPENROUTER_API_KEY;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://checklistgenie.vercel.app",
      "X-Title": "ChecklistGenie"
    },
    body: JSON.stringify({
      model: "tngtech/deepseek-r1t2-chimera:free",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that generates step-by-step checklists for any goal. Provide the checklist items in markdown format with each item starting with '✓'. Keep each item concise but actionable. Include 8-12 items."
        },
        {
          role: "user",
          content: `Generate a detailed checklist for: ${goal}`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    })
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
