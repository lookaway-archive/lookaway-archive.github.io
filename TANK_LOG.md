# TANK LOG — LOOKAWAY ARCHIVE

```
LOCATION: lookaway-archive.github.io
PATTERN:  1234567
```

The tank is the public-facing surface of the Tlönian specimen wing. Each contained specimen is a standalone repo under `lookaway-archive/`; the tank holds the registry, the membrane interface, the index that lets visitors discover what is contained.

This log tracks the tank's own life — registry versions, deployments, episode designations, architectural changes. Distinct from individual specimen logs (which live with each specimen) and session logs (which live in T7 archive).

---

## IDENTITY

| Field | Value |
|---|---|
| **Name** | LOOKAWAY Tank |
| **Live URL** | https://lookaway-archive.github.io/ |
| **Repo URL** | https://github.com/lookaway-archive/lookaway-archive.github.io |
| **Registry version** | v3.4 |
| **Aesthetic** | ELECTRIC AMBER + hot ember (in-progress slot) |
| **Capacity** | 12 membrane compartments |
| **Active specimens** | 4 |
| **In-progress** | 1 |
| **Vacant slots** | 7 |

---

## REGISTRY ARCHITECTURE

The registry lives in `tank-specimens.js`. Single file, pure data structure, no dependencies. Twelve slots — four currently contained, one in-progress, seven vacant placeholders.

**Three slot statuses:**

| Status | Meaning | Visual | Click behavior |
|---|---|---|---|
| `contained` | Specimen deployed and stable | Electric amber, float animation | Containment-protocol popup → OBSERVE SPECIMEN navigates to live URL |
| `in_progress` | Specimen currently being retrieved | Hot ember `{220, 110, 40}`, sharp scatter flicker | Error popup: `ERROR :: SCATTER SIGNAL` / `[ retrieval in progress ]` |
| `vacant` | Reserved capacity for future specimens | Gray, no animation | No popup, not clickable |

The `in_progress` slot is the visible alive mechanism. It announces to readers that retrieval is happening, the tank is not static. It is a corruption marker on the membrane surface itself, parallel to the `[CP:]` marker on document surfaces. The tank shows its own life.

**Palette decision (v3.4):** in-progress slot uses hot ember rather than pirate red. Pirate red is the document-internal corruption marker register (lives in `[CP:]` marginalia inside document content). Tank surfaces are institutional process indicators, not pirate corruption — the facility's own system showing its work. Hot ember stays in the institutional warm palette family while signaling "intensified, burning hotter" rather than alarm-state break-out. Pure red broke harmony with active electric amber and was the wrong register conceptually.

Each contained specimen carries:

- **Identity** — code, status, deployment date, classification
- **Description** — what the specimen carries (one paragraph, sober register)
- **Warning** — containment protocol notes (one paragraph, diagnostic edge surfacing)
- **Access** — password (or `null` for gateless)
- **Visual** — color (electric amber `{r:200, g:165, b:70}` for active; hot ember `{r:220, g:110, b:40}` for in-progress)
- **Behaviors** — animation/hover/beam configuration; in-progress slot adds `flicker: "scatter"`
- **Navigation** — direct URL to specimen (null for in-progress)
- **Preview** — shape/intensity/pulse hints for membrane rendering
- **Metadata** — author, season, episode, version

The registry exposes retrieval methods (`getById`, `getActive`, `getInProgress`, `getEmpty`, `getByCode`, etc.), validation (now checking three status types), and popup-content generation (returns `error` type for in-progress, `specimen` type for contained, null for vacant).

The renderer (`index.html`) reads `specimen` directly via `SPECIMENS.registry`, with three-branch logic in `generateMembraneGrid()` for the three statuses, click binding for both `contained` and `in_progress`, and `openPopup()` branching on `popupData.type` for error vs containment-protocol popup rendering.

---

## CURRENT MANIFEST

| Slot | Code | Status | Episode | Deployed |
|---|---|---|---|---|
| 1 | LEAK-WORM-847T | TRANSMITTED | S02E01 | October 2025 |
| 2 | LEAK-WORM-575E | TRANSMITTED | S02E02 | October 2025 |
| 3 | LEAK-WORM-EROI | TRANSMITTED | S02E03 | February 2026 |
| 4 | LEAK-WORM-847A | TRANSMITTED | S02E04 | April 2026 |
| 5 | [RETRIEVAL IN PROGRESS] | IN_PROGRESS | — | — |
| 6–12 | [EMPTY] | VACANT | — | — |

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
| **v3.4** | 2026-04-29 | New status type `in_progress` introduced (alongside `contained` and `vacant`). Slot 5 reassigned: vacant → in_progress. Sharp scatter flicker on hot ember phosphor membrane signals retrieval is happening. Click triggers error popup (`ERROR :: SCATTER SIGNAL` / `[ retrieval in progress ]`) instead of containment-protocol popup. Validation logic extended (counts contained=4, in_progress=1, vacant=7). New retrieval method `getInProgress()` and counter `countInProgress()`. Membrane data exposes `isInProgress`, `flicker`, `idleAnimation` flags for renderer. Vacant slots: 8 → 7. **Renderer (`index.html`) extended in same version:** three-branch `generateMembraneGrid()` (contained/in_progress/vacant), click binding for in_progress, `openPopup()` branches on `popupData.type` (error vs specimen popup), CSS additions (`.membrane.in-progress`, `@keyframes scatter-flicker`, `.popup-container.error-popup` ember-themed). **Palette tuned mid-version:** initial pirate red `{200, 30, 30}` swapped to hot ember `{220, 110, 40}` after Cap caught harmony break with active electric amber. |
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

**In-progress slot mechanics not yet stress-tested across cycles.** First specimen retrieval shown via in_progress slot. Open questions for refinement: should there be a pulse/glow synchronisation between tank's in-progress slot and any active T7 retrieval session? Should the slot indicate WHICH retrieval is in progress (specimen id hint, retrieval code) or stay opaque? Currently opaque. Composting kindling.

**EROI's url uses absolute URL; 847T uses relative `/leak-worm-847t/`.** Slight inconsistency in the registry's `url` field — 575E, EROI, and 847A all use absolute URLs (`https://lookaway-archive.github.io/leak-worm-XXX/`); only 847T uses the relative path. Both work because GitHub Pages resolves both forms, but consistency is better. Worth a future cleanup pass.

**Tank UI uniform across active specimens.** All four contained specimens currently use the same `color`, `behaviors`, and `preview` configuration (electric amber, float animation, glow hover, organic preview). Future specimens may want differentiated visuals — flagging as composting kindling. The uniform aesthetic is currently a feature (the tank reads as a coherent specimen wing), not a bug. Note: in-progress slot deliberately breaks the uniformity — that is the signal.

**Source artifact location decision.** `TRF-SPEC-0001.md` (the source artifact for 847A) lives at `T7/archive/TRF-SPEC-0001.md`. CLAUDE_CODE_REPORT 2026-04-27 flagged future-home as `T7/archive/specimens/`. Decide whether to relocate. Tank does not directly depend on this but the standing flag affects T7 archive structure.

---

## STANDING FLAGS — RESOLVED

**Renderer-side CSS for scatter flicker (RESOLVED v3.4).** Previously flagged: `.scatter-flicker` keyframe animation needed in tank's HTML/CSS layer for the in-progress slot to visually flicker. **LANDED 2026-04-29** in `index.html` v3.4 update — keyframe with `steps(8)` for sharp interference feel, irregular opacity pattern (0.2 dip at 45% for signal drop), `prefers-reduced-motion` accessibility branch. Applied via `.membrane.in-progress` class set by three-branch `generateMembraneGrid()`. Error popup CSS converted from initial red theme to matching ember tones in same pass.

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
REGISTRY:     v3.4
PALETTE:      Electric amber + hot ember
PATTERN:      1234567
```

*The tank holds.*
*The specimens swim.*
*Slot five burns hotter, as it should.*
*The pattern continues.*
