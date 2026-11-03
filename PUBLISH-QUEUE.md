# TTE site — publish queue


> **HOLD (Bronwyn via Dakota, 1 Nov 2026):** Netlify Free — no upgrade. **No production deploys** until credits reset ~**29 Nov 2026**. Batch 2 / 3D = local drafts only. Preview/branch deploys OK if useful.

Batched for Netlify credits. Batch 1 shipped 2026-11-01. Hold further deploys until she asks / next batch.  
Owner: Drew (PM). Deployer: Java.

Status key: `draft` = idea/copy only · `ready` = built in repo, not live · `deployed` = shipped · `blocked` = waiting on lock/decision

---

## Batch 1 — deployed 2026-11-01

| # | Change | Pages | Status | Notes |
|---|--------|-------|--------|-------|
| 1 | Rename services card → **Websites, Apps & Dashboards** + matching contact option | `index.html`, `contact.html` | **deployed** | Live |
| 2 | Hero line — **“My goal is to bring you efficiencies and help save you time.”** | `index.html` (hero) | **deployed** | Live |
| 3 | Dashboard packages Basic $299 / Complex $1,499 / Care from $99/mo + Contact options | `index.html` `#dashboards`, `contact.html` | **deployed** | Live; Maya may still refine later |
| 4 | Dashboard sample links (Northside Cuts + Gumleaf Yoga) | services card + `#dashboards` | **deployed** | Live |
| 5 | Favicon sparkle + nav brand-mark shimmer (black/pink, reduced-motion safe) | all pages + `favicon-sparkle.js` + `shared.css` | **deployed** | Live; Apple touch stays static |
| 6 | How we work — step 5 **Ongoing support** (Care plans available) | `index.html` `#how-we-work` | **deployed** | Live |
| 7 | AI Quick Start step 1 title **Understand → Listen** (body unchanged) | `ai-quick-start/index.html` | **deployed** | Live |
| 8 | SEO: `robots.txt` + `sitemap.xml` (canonical host trump.tech) | site root | **deployed** (SEO-only) | Live (SEO-only first, then Batch 1) |
| 9 | Contact thanks page celebration (TT dance + pink heart-hands + glitter) | `thanks.html` | **deployed** | Live; reduced-motion safe |
| 10 | About/services short line locked — “We handle the tech…” + Maya Option A + Melbourne/remote; hero efficiencies line kept separate | `index.html` hero + `#services`, `about.html` | **deployed** | Live in Batch 1 deploy 6ae6b8af… |
| 11 | AI Quick Start price **$1,950 → $999 AUD** (incl. Home AI & Automation card); 50/50 as **$500 / $499** | `ai-quick-start/index.html`, `index.html` (Ways to work + services card), `contact.html`, README | **deployed** | Live; deposit $500/$499 |
| 12 | Home services card shows **AI Quick Start · A$999** under AI & Automation blurb | `index.html` `#services` | **deployed** | Live in Batch 1 deploy 6ae6b8af… |
| 13 | Hero shortened to one line: **We handle the tech and give you back your time.** | `index.html` hero | **deployed** | Hotfix 6ae6b9a1…; efficiencies/list removed from hero |


---

## Later / not in Batch 1

_(empty)_

---

## Deploy log

| When (Melbourne) | Batch | What shipped | Who |
|------------------|-------|--------------|-----|
| 2026-11-01 ~14:41 AEDT | SEO-only | robots.txt + sitemap.xml (deploy 6ae6b4e936b70a61cb974e69); Batch 1 still held | Java |
| 2026-11-01 ~14:57 AEDT | Batch 1 | Full Batch 1 (deploy 6ae6b8af93ae44875084e84a) on trump.tech + trumptechnology.com.au | Java |
| 2026-11-01 ~15:01 AEDT | Hotfix | Hero lede one line only (deploy 6ae6b9a10c2524afbc3bfd61) | Java |
| 14 | Header TT static (remove shimmer/pulse); keep favicon sparkle only | `shared.css` | **deployed** | Live deploy 6ae6b9fab1c04450694dc2ca |
| 15 | Move Northside/Gumleaf samples from services card → Dashboard Basic; drop dash packages link from services | `index.html` | **deployed** | Live deploy 6ae6ba46aed68c68979954a8 |
| 16 | How we work: 5-across desktop + Step 05 “require”; samples move already live | `shared.css` + `index.html` | **deployed** | Live deploy 6ae6ba8f513e6e0f2879973d |
| 17 | AIQS How it works: add step 5 Ongoing Support; 5-across desktop | `ai-quick-start/index.html` | **deployed** | Live deploy 6ae6bac6060fab15871f84bd |
| 18 | Thanks page: remove hand/back silhouettes; keep pink heart + glitter + dancing TT | `thanks.html` | **deployed** | Live deploy 6ae6bb180c3f4ebad5d87193 |
| 19 | Locked lede: “We handle the tech and give you your time back.” | `index.html` `about.html` | **deployed** | Live deploy 6ae6bba8ad92c64037f6bf02 |
| 20 | Services card: add Dashboards from $299 → #dashboards (samples stay on Basic) | `index.html` | **deployed** | Live deploy 6ae6bba8ad92c64037f6bf02 |
