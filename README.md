# ⚔️ War Planner · MCOC Tactical Suite

A tactical **Alliance War (AW)** planner for **Marvel Contest of Champions** built to help officers and battlegroups map defenders, optimize 3-attacker teams, coordinate path assignments, and share clean battle plans on Discord.

---

## ✨ Key Features

### 🗺️ Dual War Map Support
- **Standard Map (50 Nodes):** 9 main paths split into **Section 1** and **Section 2**, 3 Mini-Boss Islands (N37–N45), Sub-Boss lanes (N46–N49), Final Boss (N50), plus an optional **10th Backup Player**.
- **The Big Thing (10 Nodes):** 10 single-node paths tailored for the Big Thing map variant with expanded attacker slots.

### 🔍 Live CereBro Integration
- Queries real solo-fight data from **CereBro** for every node and defender.
- Ranks optimal attacker teams by proven fight count and automatically detects required **Pre-Fight** champions.
- Provides direct one-click links to CereBro war videos for every matchup.

### 🔀 Fixed Paths vs. Flexible Sections
- **Fixed Mode:** Assigns each summoner a traditional path (keeping Section 1 and Section 2 aligned on the same lane) and suggests multiple attacker team variations.
- **Flexible Mode:** Combines Section 1 and Section 2 segments across summoners to maximize counter coverage and team synergies.
- **10th Player (Backup):** Optional backup summoner with 3 attacker slots that can cover remaining uncovered fights across sections or assist on boss islands.

### 🎯 Full Manual Control
- **Auto-managed Team Slots:** Manually assigning a champion to a fight automatically adds them to an open team slot (or warns you if all 3 slots are already full).
- **Editable Mini-Bosses, Sub-Bosses & Final Boss:** Automatically assigns island counters (respecting the max 1 island fight per summoner rule) while letting you reassign any boss node to any player and champion—or leave it unassigned.
- **Uncovered Fights Filter:** Highlights and isolates only nodes without a covered attacker so gaps can be resolved quickly.

### 💾 Saved Wars
- Save complete war plans locally in your browser (map type, defenders, summoner names, custom teams, section pairings, and boss overrides).
- Ideal for keeping reusable battlegroup player templates or switching between BG1, BG2, and BG3 plans without re-entering data.

### 🌐 Bilingual & Mobile-Ready
- Instant **English / Spanish** toggle (defaults to English).
- Responsive mobile-first interface installable as a **PWA** on phones and tablets.

---

## 🧭 Basic Workflow

1. **Map Defenders:** Open the **Map Defenders** tab (or click any node in the War Plan) to assign enemy defenders—or load the built-in example war to test the planner.
2. **Assign Summoners & Mode:** Enter your battlegroup's summoner names and choose between **Fixed** or **Flexible** section optimization.
3. **Fine-Tune Slots & Bosses:** Review suggested team variations, adjust individual fights/slots manually, and confirm Mini-Boss, Sub-Boss, and Final Boss assignments.
4. **Save & Reuse:** Use **Saved Wars** to save battlegroup templates or complete war plans for quick switching.
