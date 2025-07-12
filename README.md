# 🧞‍♂️ ChecklistGenie — Your AI-Powered Goal Companion

[![Deploy on Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/geomathewjoseph/checklistgenie)

> “I was just bored on a random Saturday…”

That’s how it started.

I didn’t have a grand plan or some massive project idea — just a spark to do something slightly more productive with my weekend. I thought, *“Why not make a tool that helps people get things done using AI?”*

And thus, **ChecklistGenie** was born — a minimalist web app that transforms any goal you give it into a personalized, step-by-step checklist using AI ✨.

---

## 🖼️ Preview

> 📸 Paste a screenshot or screen recording of the app below!

![ChecklistGenie Screenshot](https://via.placeholder.com/800x400.png?text=Paste+Your+Screenshot+Here)

---

## 🛠️ What is ChecklistGenie?

ChecklistGenie is a simple, clean AI-powered app that takes your goal — whether it's launching a startup, preparing for exams, starting a podcast, or anything in between — and gives you a **clear, actionable checklist** to follow.

No signups. No fluff. Just type → click → get checklist.

---

## 🌐 Live Demo

🔗 [https://checklistgenie.vercel.app](https://checklistgenie.vercel.app)

---

## 🚀 How It Works

1. **You type in your goal**  
   → *e.g., “Prepare for GATE exam” or “Build a portfolio website”*

2. **ChecklistGenie talks to an AI model** via the [OpenRouter](https://openrouter.ai) API

3. **The AI generates a step-by-step checklist**  
   → Each item starts with ✅ and is written in simple, actionable language

4. **You can interact with the checklist**  
   - Check off tasks ✅  
   - Save your checklist in local storage 💾  
   - Export as `.txt` 📄  

---

## 🧱 Tech Stack

- ⚡ **Frontend:** HTML, Tailwind CSS, Vanilla JS  
- 🤖 **AI Backend:** OpenRouter API with `deepseek-r1t2-chimera:free`  
- 🌍 **Hosting:** Vercel  
- 🔐 **Security:** API key secured using Vercel serverless edge function (`/api/generate.js`)

---

## 🔒 API Key Security

Even though this project is **open source**, the API key used for OpenRouter is **never exposed** to the frontend.  
Instead, it's stored securely as an **environment variable** and accessed via an edge function deployed on Vercel.

That means you get visibility *and* security.

---

## 🧠 Motivation

This was a quick weekend project — no pressure, no over-engineering — just a fun idea built out of curiosity and a little boredom.  
If it helps even one person take action on their goals or inspires someone else to build something fun — I’ll call that a win!

---

## 👤 Author

**Geo Mathew Joseph**  
🔗 [LinkedIn](https://www.linkedin.com/in/geomathewjoseph)

---

## 📥 Contributions

Pull requests welcome!  
If you’d like to suggest features (like downloadable PDF checklists, reminders, themes, etc.) — feel free to open an issue.
