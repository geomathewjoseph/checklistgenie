export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { goal } = await req.json();

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://checklistgenie.vercel.app",
      "X-Title": "ChecklistGenie"
    },
    body: JSON.stringify({
      model: "tngtech/deepseek-r1t2-chimera:free",
      messages: [
        { role: "system", content: "You are a helpful assistant that generates step-by-step checklists for any goal. Provide 8-12 markdown items prefixed with '✓'." },
        { role: "user", content: `Generate a checklist for: ${goal}` }
      ]
    })
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
