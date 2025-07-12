# 🧞‍♂️ ChecklistGenie - AI-Powered Checklist Generator

## Why I Made This

I was bored one evening and decided I wanted to do something productive (and maybe slightly cool).  
So instead of doomscrolling, I made a web app that turns any goal into an actionable AI-generated checklist using OpenRouter's free AI models.

No signups. No ads. Just type a goal, hit generate, and boom — your personal step-by-step guide.

---

## 🔍 What It Does

ChecklistGenie takes your goal (like *“Start a podcast”* or *“Prepare for exams”*)  
and instantly gives you an AI-generated checklist you can interact with.

It includes:
- ✔️ Beautiful UI (TailwindCSS)
- ✔️ Step-by-step checklists
- ✔️ Local saving of checklists
- ✔️ Export as text
- ✔️ Hosted on [Vercel](https://vercel.com)  
- ✔️ Powered by [OpenRouter](https://openrouter.ai) free models

---

## 🛠️ How It Works

- The frontend is a static HTML file styled with Tailwind CSS
- The backend is a Vercel Edge Function (`/api/generate`) that securely fetches AI responses
- API key is securely stored in Vercel’s Environment Variables so nothing is exposed on GitHub

---

## 🚀 Try It Live

👉 https://checklistgenie.vercel.app/

---

## 📦 Tech Stack

- HTML + Tailwind CSS
- JavaScript
- Vercel Edge Functions
- OpenRouter AI API

---

## 🙌 Inspired by boredom and a desire to build something useful.
 
