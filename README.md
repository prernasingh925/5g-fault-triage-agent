# 5G Fault Triage Agent — UAP Intelligence Layer

> **AI-powered NOC operations tool that classifies 5G network faults into structured, actionable triage in under 10 seconds.**

🔗 **[Live Demo](https://5g-fault-triage-agent.vercel.app)** &nbsp;|&nbsp; Built by [Prerna Singh](https://linkedin.com/in/prernasingh925) — Product Manager, AI & Enterprise Platforms

---

## The Problem

When a 5G fault occurs, a NOC (Network Operations Centre) engineer receives a raw alarm with minimal context. They must manually determine severity, identify the fault type, assess subscriber impact, decide resolution steps, and route escalation — often during a high-pressure P1 incident with an SLA clock running.

This manual process is slow, inconsistent across engineers, and error-prone. **This agent eliminates that diagnostic lag.**

---

## What It Does

Paste a raw 5G fault description. The agent returns a structured triage across 9 dimensions in under 10 seconds:

| Output Field | What It Tells You |
|---|---|
| **Severity** | P1 Critical / P2 High / P3 Medium / P4 Low |
| **Fault Type** | gNB Radio / Core Network / Backhaul / Transport / Config |
| **5G Layer** | RAN / Core / Transport / Slice |
| **Impacted Service** | eMBB / URLLC / mMTC |
| **Subscriber Impact** | Estimated affected users |
| **Root Cause Hypothesis** | AI's probabilistic best guess with confidence signal |
| **Resolution Playbook** | Numbered, field-actionable steps |
| **Escalation Path** | Who to call and when |
| **SLA Breach Risk** | Yes/No with reasoning |

---

## Product Architecture

A 5-screen enterprise SaaS web application built for daily NOC operations use:

```
Home (Dashboard)  →  Live KPIs: MTTR, accuracy rate, active P1s, resolved incidents
Analyse           →  Fault input with sample fault loader
Results           →  Full 9-field triage output with colour-coded severity
History           →  Past triage log with severity filtering
Settings          →  AI model config, escalation preferences, telemetry
```

---

## Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Frontend | React 19 + Vite | Enterprise SaaS quality bar. Sub-second dev iterations. |
| Styling | CSS (mobile-responsive) | Collapsible sidebar + touch layout for field engineers on phones |
| AI Engine | Google Gemini API | Free tier sufficient for prototype. Structured JSON output. |
| Deployment | Vercel | Zero-config CI/CD. Environment variable security for API keys. |
| Version Control | GitHub | Public repo — full commit history visible |

---

## Why This Is a PM Project, Not a Dev Project

I wrote zero lines of code. This was built using **AI-assisted development (vibe coding)** — I specified, the AI built.

My work was:

**Prompt Engineering (6 iterations)**

| Version | Problem Found | Fix Applied |
|---|---|---|
| v1 | Output was prose, hard to parse | Mandated JSON structured output |
| v2 | Severity inconsistent across inputs | Added severity decision matrix |
| v3 | Non-5G terms in output | Added 5G vocabulary constraint list |
| v4 | Resolution steps were generic | Added field-actionable requirement |
| v5 | SLA field always returned Yes | Added reasoning requirement |
| v6 | Final — all fields consistent | Prompt finalised |

**Product Decisions**
- Why 9 output fields and not 5 or 12
- Why include Root Cause Hypothesis with confidence (builds trust, not just output)
- Why React over Streamlit (mobile responsiveness requirement)
- Why mobile-responsive web over native app (80% of value at 20% of cost for a prototype)
- Why Gemini free tier over OpenAI (zero cost validation, acceptable quality for classification)

**QA & Measurement**

Ran 10 structured test scenarios across fault types and severity levels:

| Metric | Target | Result |
|---|---|---|
| Classification accuracy | >85% | ~80% clean inputs / ~60% multi-fault inputs |
| Output completeness | 9/9 fields | 9/9 on all 10 runs ✅ |
| Response time | <10 seconds | Avg 4.2 seconds ✅ |
| Domain relevance | 5G terms used correctly | 9/10 runs ✅ |

> **Key learning:** The accuracy gap on multi-fault inputs became the top v2 priority. Without measuring, I would have prioritised incorrectly.

---

## Connection to JioBrain

This is not just a portfolio project. It is a working proof of concept for the AI intelligence layer I am designing at Jio Platforms — specifically for the **Unified Assurance Platform (UAP)** and **JioBrain**, an AI product for 5G network operations.

| This Prototype | JioBrain at Jio Scale |
|---|---|
| AI classifies fault from free-text input | ML models classify alarms from live OSS/BSS streams |
| 9-field structured triage output | Structured ticket enrichment in UAP |
| Resolution playbook | Automated work order generation for field teams |
| SLA breach risk flag | Real-time SLA monitoring + proactive escalation |
| Single fault, manual trigger | Hundreds of concurrent alarms, automated |

---

## Roadmap

**Shipped (v1.0 → v1.1)**
- ✅ Core AI triage — 9-field structured output
- ✅ React 19 + Vite (upgraded from Streamlit prototype)
- ✅ 5-screen enterprise UI
- ✅ Mobile-responsive design (collapsible sidebar, touch layout)
- ✅ Incident history with severity filtering

**Next (v2.0)**
- 🔲 Multi-fault correlation — auto-elevate severity when multiple fault signatures detected
- 🔲 Live Gemini API integration replacing mock dashboard data
- 🔲 Confidence scoring per field
- 🔲 PWA / offline mode for field engineers in low-connectivity zones

---

## Running Locally

```bash
git clone https://github.com/prernasingh925/5g-fault-triage-agent
cd 5g-fault-triage-agent
npm install
```

Create a `.env` file in the root:
```
VITE_GEMINI_API_KEY=your_api_key_here
```

```bash
npm run dev
```

Open `http://localhost:5173`

> Get a free Gemini API key at [aistudio.google.com](https://aistudio.google.com)

---

## About

Built by **Prerna Singh** — Product Manager specialising in AI and Enterprise Platforms.

- 🔗 [LinkedIn](https://linkedin.com/in/prernasingh925)
- 📧 prerna.singh1990@yahoo.in
- 💻 [GitHub](https://github.com/prernasingh925)

*This project is a portfolio demonstration of AI product management — from problem definition and PRD through prompt engineering, build, measurement, and iteration.*
