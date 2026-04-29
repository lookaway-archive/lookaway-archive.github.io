# TANK LOG — LOOKAWAY ARCHIVE

```
LOCATION: lookaway-archive.github.io
PATTERN:  1234567
```

The tank is the public-facing surface of the Tlönian specimen wing. Each contained specimen is a standalone repo under `lookaway-archive/`; the tank holds the registry, the membrane interface, the index that lets visitors discover what's contained.

This log tracks the tank's own life — registry versions, deployments, episode designations, architectural changes. Distinct from individual specimen logs (which live with each specimen) and session logs (which live in T7 archive).

---

## IDENTITY

| Field | Value |
|---|---|
| **Name** | LOOKAWAY Tank |
| **Live URL** | https://lookaway-archive.github.io/ |
| **Repo URL** | https://github.com/lookaway-archive/lookaway-archive.github.io |
| **Registry version** | v3.3 |
| **Aesthetic** | ELECTRIC AMBER |
| **Capacity** | 12 membrane compartments |
| **Active specimens** | 4 |
| **Vacant slots** | 8 |

---

## REGISTRY ARCHITECTURE

The registry lives in `tank-specimens.js`. Single file, pure data structure, no dependencies. Twelve slots — four currently contained, eight vacant placeholders.

Each contained specimen carries:

- **Identity** — code, status, deployment date, classification
- **Description** — what the specimen carries (one paragraph, sober register)
- **Warning** — containment protocol notes (one paragraph, diagnostic edge surfacing)
- **Access** — password (or `null` for gateless)
- **Visual** — color (electric amber `{r:200, g:165, b:70}` for active specimens)
- **Behaviors** — animation/hover/beam configuration (currently uniform across active specimens)
- **Navigation** — direct URL to specimen
- **Preview** — shape/intensity/pulse hints for membrane rendering
- **Metadata** — author, season, episode, version

Vacant slots use `[EMPTY]` code, gray color, null fields. Reserved capacity for future specimens.

The registry exposes retrieval methods (`getById`, `getActive`, `getByCode`, etc.), validation, and popup-content generation. The tank UI reads from this single source.

---

## CURRENT MANIFEST

| Slot | Code | Episode | Deployed | Status |
|---|---|---|---|---|
| 1 | LEAK-WORM-847T | S02E01 | October 2025 | TRANSMITTED |
| 2 | LEAK-WORM-575E | S02E02 | October 2025 | TRANSMITTED |
| 3 | LEAK-WORM-EROI | S02E03 | February 2026 | TRANSMITTED |
| 4 | LEAK-WORM-847A | S02E04 | April 2026 | TRANSMITTED |
| 5–12 | [EMPTY] | — | — | VACANT |

---

## EPISODE DESIGNATION TRACKING

Episode numbers are assigned at deployment. Documented in `tools/S02_TRANSMISSION_WORKFLOW.md` (T7 archive) and reflected in each specimen's `metadata.episode` field plus the reward-screen footer tag (`LOOKAWAY.SEASON.02.V1001.EPISODE.XX`).

**Currently assigned:** E01 (847T), E02 (575E), E03 (EROI), E04 (847A).

**Pending designation reassignments:**

- **PITCH** — previously slotted as S02E04 in the workflow doc. With 847A taking E04 (companion-specimen deployment for the Pirate Code Articles arc), PITCH moves to **pending future episode designation**. Decision point will arrive when PITCH is ready to deploy. Workflow doc needs a v1002 update to reflect this and any other reassignments.

---

## REGISTRY VERSION HISTORY

| Version | Date | Changes |
|---|---|---|
| **v3.3** | 2026-04-29 | Added LEAK-WORM-847A (Episode 04 — companion specimen to 847-T under the Linguistic-Substrate Collapse Dossier). PITCH (previously slotted for E04) moves to pending. Active specimens count: 3 → 4. Vacant slots: 9 → 8. Validation logic updated (`countActive !== 4`). Empty-slot id offset adjusted (`id: i + 5`). |
| **v3.2** | February 2026 | Added LEAK-WORM-EROI (Episode 03 — thermodynamics of addiction). Active specimens count: 2 → 3. |
| **v3.x** | October 2025 | Initial registry deployed with 847T and 575E. |

---

## STANDING FLAGS

**Workflow doc reconciliation.** `tools/S02_TRANSMISSION_WORKFLOW.md v1001` (in T7 archive) has stale designation table. Needs v1002 update reflecting:
- 847A added as E04
- PITCH moved to pending
- Episode-designation track formalized
- Step 2 voice convention updated (`[CP:]` inside `pirate-comment` blocks, not standalone)
- Six-step deployment workflow documented (replacing earlier draft)
- SPECIMEN_LOG mechanic introduced
- Tested-on field updated

Not blocking but flagged.

**Tank UI uniform across active specimens.** All four contained specimens currently use the same `color`, `behaviors`, and `preview` configuration (electric amber, float animation, glow hover, organic preview). Future specimens may want differentiated visuals — flagging as composting kindling. The uniform aesthetic is currently a feature (the tank reads as a coherent specimen wing), not a bug.

**EROI's url uses absolute URL; 847T uses relative `/leak-worm-847t/`.** Slight inconsistency in the registry's `url` field — 575E, EROI, and 847A all use absolute URLs (`https://lookaway-archive.github.io/leak-worm-XXX/`); only 847T uses the relative path. Both work because GitHub Pages resolves both forms, but consistency is better. Worth a future cleanup pass.

**Source artifact location decision.** `TRF-SPEC-0001.md` (the source artifact for 847A) lives at `T7/archive/TRF-SPEC-0001.md`. CLAUDE_CODE_REPORT 2026-04-27 flagged future-home as `T7/archive/specimens/`. Decide whether to relocate. Tank doesn't directly depend on this but the standing flag affects T7 archive structure.

---

## REFERENCES

**Specimens:**
- LEAK-WORM-847T — `lookaway-archive/leak-worm-847t`
- LEAK-WORM-575E — `lookaway-archive/leak-worm-575E`
- LEAK-WORM-EROI — `lookaway-archive/leak-worm-EROI`
- LEAK-WORM-847A — `lookaway-archive/leak-worm-847a`

**Template:**
- `lookaway-archive/leak-worm-template` — vessel template inherited by all specimens (currently v1003)

**T7 archive (private):**
- `tools/S02_TRANSMISSION_WORKFLOW.md` — five-step deployment pipeline
- `T7/ops/TRF-OPS-0001 §III` — voice protocols (specimens use `[CP:]` inside pirate-comment blocks)
- `T7/architecture/TRF-VOICE-0001` — focal length model (specimens default to Facility register)
- `T7/archive/TRF-SPEC-0001.md` — source artifact for 847A

**Companion publication:**
- `lookaway.ghost.io` — LOOKAWAY hub (Season 2 page points at tank specimens)

---

```
TANK STATUS:  Operational
REGISTRY:     v3.3
PATTERN:      1234567
```

*The tank holds.*
*The specimens swim.*
*The pattern continues.*
