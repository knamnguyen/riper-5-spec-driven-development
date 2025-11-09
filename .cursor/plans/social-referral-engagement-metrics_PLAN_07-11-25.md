## Social Referral Engagement Metrics

- **Date**: 2025-11-07
- **Complexity**: Complex
- **Status**: ⏳ Phase 1 Planned • ⏳ Phase 2 Planned • ⏳ Phase 3 Planned • ⏳ Phase 4 Planned

### Quick Links

- [Context and Goals](#context-and-goals)
- [Architecture Decisions](#architecture-decisions)
- [Phased Delivery Plan](#phased-delivery-plan)
- [RFCs](#rfcs)
- [Implementation Checklist](#implementation-checklist)
- [Cursor + RIPER-5 Guidance](#cursor--riper-5-guidance)

---

### Context and Goals

#### Business Context

The social referral verifier already handles keyword verification for X, Threads, Facebook, and LinkedIn via Apify actors. Campaign operations now require returning engagement metadata—specifically like and comment counts—for auditing referral quality and quantifying reach.

#### Goals

1. Parse and surface `likeCount` and `commentCount` for every supported platform without adding extra API calls.
2. Extend the shared response shape and CLI/test harness to include these metrics.
3. Preserve existing keyword-matching behavior and error handling.

#### Success Metrics

- Engagement counts returned for all four platforms via tRPC and CLI.
- Keyword verification latency remains within 750 ms (p95).
- CLI output includes `likes` and `comments`, validated against real sample data.
- No failures reported for missing fields in Apify payloads (graceful fallbacks to zero).

---

### Non-Goals and Constraints

#### Non-Goals

- Persisting engagement metrics to the database.
- Adding engagement types beyond likes and comments.
- Building dashboards or analytics around the counts.
- Handling historical aggregation or trending.

#### Constraints

- Must continue using existing Apify actor responses (no extra requests).
- Must respect Tailwind v4 and monorepo coding standards.
- Services remain within `@sassy/social-referral`; consumers unchanged except for response shape updates.
- Maintain backward compatibility with optional `platform` parameter.

---

### Architecture Decisions

1. **Extend Verification Result Contract**
   - **Rationale:** Engagement data must be available to CLI and API consumers.
   - **Implication:** Update `VerifyKeywordsResult` (and related schemas) to include `likes` and `comments` with defaults.

2. **Platform-Specific Parser Adapters**
   - **Rationale:** Apify datasets expose likes/comments differently per platform.
   - **Implication:** Each verifier implements `extractEngagement()` returning normalized counts; shared utility for coalescing undefined to zero.

3. **Fallback Handling**
   - **Rationale:** Some posts may hide counts or return null.
   - **Implication:** When data is absent, return zeros and optionally log for observability.

---

### Architecture Clarification

#### Service Separation

- `@sassy/social-referral`: houses verifiers, types, schema definitions, and orchestrating service.
- `@sassy/api`: consumes service via tRPC mutation; must propagate new fields in mutation result.
- CLI (`packages/api/scripts/verify-social-keywords.ts`): prints engagement data.

#### Data Contract Evolution

```
VerifyKeywordsResult
├─ platform: SocialPlatform
├─ url: string
├─ text: string
├─ containsAll: boolean
├─ missingKeywords: string[]
├─ matchedKeywords: string[]
├─ likes: number
└─ comments: number
```

---

### High-Level Data Flow

```
URL + keywords
    ↓
detectPlatform(url)
    ↓
SocialReferralService.verifyKeywords()
    ↓
Verifier.fetchDataset()  // existing Apify call
    ↓
Verifier.extractText() + extractEngagement()
    ↓
keywordMatch(text, keywords)
    ↓
Result { ..., likes, comments }
```

---

### Security Posture

- Continue sanitizing user input (trim/normalize keywords, validate URLs).
- Do not log raw engagement counts with tokens.
- Ensure no additional secrets introduced.

---

### Component Details

1. **Types & Schema (`packages/social-referral/src/types.ts`, `schema-validators.ts`)**
   - Extend `VerifyKeywordsResult` and Zod schemas to include `likes` and `comments` with defaults.

2. **Verifiers (`src/platforms/*-verifier.ts`)**
   - Parse likes/comments from dataset items; each platform has unique paths.

3. **Service (`src/social-referral-service.ts`)**
   - Merge engagement counts into final response; ensure defaults to zero when data missing.

4. **CLI (`packages/api/scripts/verify-social-keywords.ts`)**
   - Print `likes` and `comments` fields alongside keyword results.

5. **tRPC Mutation (`packages/api/src/router/social.ts`)**
   - Return new engagement fields in mutation output types.

---

### Backend Endpoints and Workers

- Update `social.verifyKeywords` tRPC mutation output to include engagement fields.

### Infrastructure Deployment

- No infrastructure changes.

### Database Schema

- No changes required.

### API Surface

```
Output Schema:
{
  platform: SocialPlatform;
  url: string;
  text: string;
  containsAll: boolean;
  missingKeywords: string[];
  matchedKeywords: string[];
  likes: number;
  comments: number;
}
```

---

### Phased Delivery Plan

#### Current Status

- ⏳ Phase 1: Shared contract groundwork.
- ⏳ Phase 2: X + Threads engagement parsing.
- ⏳ Phase 3: Facebook engagement parsing.
- ⏳ Phase 4: LinkedIn engagement parsing.

#### Phase 1 – Shared Contract Foundation (⏳ Planned)

- Extend schemas, types, and service contract to support engagement fields with safe defaults.
- Files: `types.ts`, `schema-validators.ts`, `social-referral-service.ts`, `packages/api/src/router/social.ts`, `packages/api/scripts/verify-social-keywords.ts`, `packages/social-referral/src/index.ts`.
- Outcome: Unified response shape with engagement fields defaulting to zero across API/CLI.

#### Phase 2 – X & Threads Parsing (⏳ Planned)

- Parse engagement counts from existing datasets for X and Threads, validate outputs via CLI.
- Files: `x-verifier.ts`, `threads-verifier.ts`, fixtures if needed.
- Outcome: Accurate counts for X and Threads.

#### Phase 3 – Facebook Parsing (⏳ Planned)

- Parse likes/comments from Facebook dataset structures (post/video variations).
- File: `facebook-verifier.ts`.
- Outcome: Accurate counts for Facebook or zero fallbacks.

#### Phase 4 – LinkedIn Parsing (⏳ Planned)

- Parse LinkedIn dataset for likes/comments fields.
- File: `linkedin-verifier.ts`.
- Outcome: Accurate counts for LinkedIn.

---

### Immediate Next Steps

1. Collect sample dataset responses for each platform confirming engagement fields.
2. Validate `@sassy/api` consumers for new fields.
3. Communicate schema changes to downstream teams.

---

### Features List (MoSCoW)

| ID      | Feature                             | Priority | Status | Phase |
| ------- | ----------------------------------- | -------- | ------ | ----- |
| ENG-001 | Extend verification result contract | Must     | ⏳     | 1     |
| ENG-002 | X engagement parsing                | Must     | ⏳     | 2     |
| ENG-003 | Threads engagement parsing          | Must     | ⏳     | 2     |
| ENG-004 | Facebook engagement parsing         | Must     | ⏳     | 3     |
| ENG-005 | LinkedIn engagement parsing         | Must     | ⏳     | 4     |
| ENG-006 | CLI engagement reporting            | Should   | ⏳     | 1     |
| ENG-007 | Optional logging for missing counts | Could    | ⏳     | 2–4   |

---

### RFCs

#### RFC-101: Engagement Contract Foundation

- **Summary:** Introduce likes/comments into shared schemas and service.
- **Dependencies:** None.
- **Stages:**
  1. Update TypeScript types.
  2. Extend Zod result schema with defaults.
  3. Modify `SocialReferralService` to include fields (default zero).
  4. Update CLI printing and tRPC output types.
  5. Run type checks.
- **Acceptance Criteria:**
  - Type checks succeed.
  - CLI output includes `likes` and `comments` (initially zero).
  - No runtime errors from consumers.

#### RFC-102: X + Threads Engagement Extraction

- **Summary:** Parse and return real counts for X/Threads.
- **Dependencies:** RFC-101.
- **Stages:**
  1. Inspect sample dataset payloads.
  2. Implement parsing helpers in each verifier.
  3. Merge parsed counts into result.
  4. Validate via CLI tests.
  5. Optionally log missing counts.
- **Acceptance Criteria:**
  - CLI outputs non-zero counts for known posts.
  - Keyword matching unaffected.
  - Fallback to zero when counts absent.

#### RFC-103: Facebook Engagement Extraction

- **Summary:** Parse counts for Facebook posts/videos.
- **Dependencies:** RFC-101 (and ideally RFC-102).
- **Stages:**
  1. Inspect dataset structure (post vs video).
  2. Implement parsing with null coalescing.
  3. Validate via CLI sample.
- **Acceptance Criteria:**
  - Facebook outputs accurate counts or zero fallbacks.
  - Service returns structured result.

#### RFC-104: LinkedIn Engagement Extraction

- **Summary:** Parse counts for LinkedIn posts.
- **Dependencies:** RFC-101.
- **Stages:**
  1. Inspect dataset.
  2. Implement parser with nested handling.
  3. Validate via CLI sample.
- **Acceptance Criteria:**
  - LinkedIn outputs accurate counts or zero fallbacks.
  - No regressions.

---

### Rules (Initiative-Specific)

- Keep one export per file where practical.
- Use arrow functions for helpers.
- Handle missing engagement fields gracefully (default zeros).
- Avoid new dependencies; use existing Apify output.

---

### Verification

#### Gap Analysis

- Need actual dataset field names per platform.
- Ensure downstream consumers ready for response changes.
- Confirm CLI formatting remains readable.

#### Improvement Recommendations

1. Capture JSON fixtures for each platform.
2. Consider runtime validation for actor schema changes.
3. Add telemetry to detect frequent zero counts.

#### Quality Assessment

| Criterion       | Score | Rationale                                      |
| --------------- | ----- | ---------------------------------------------- |
| Clarity         | 8/10  | Clear phases; dataset examples still pending.  |
| Feasibility     | 9/10  | Reuses existing infrastructure.                |
| Completeness    | 8/10  | CLI testing planned; automated tests optional. |
| Maintainability | 9/10  | Parsing localized by platform.                 |

---

### Change Management

- **Classification:** Scope + technical change.
- **Impact:** Affects service responses, CLI output, and API typing.
- **Strategy:** Execute phases sequentially; coordinate with consumers.
- **Documentation:** Update README/tRPC docs with new fields.
- **Communication:** Notify API consumers about response changes.
- **Risks:** Dataset schema changes or consumer mismatches; mitigate with logging and communication.

---

### Ops Runbook

- Deploy per phase; run `pnpm --filter @sassy/social-referral typecheck` and `pnpm --filter @sassy/api typecheck`.
- Run CLI verification with sample URLs.
- Troubleshooting: inspect dataset items if counts zero; update parsers accordingly.

---

### Acceptance Criteria (Versioned)

- **Version 1.0:** Schema/types updated; CLI shows zeroed fields; type checks pass.
- **Version 2.0:** X/Threads return actual counts; CLI validations documented.
- **Version 3.0:** Facebook returns counts or zero fallback.
- **Version 4.0:** LinkedIn returns counts; end-to-end verification complete.

---

### Future Work

1. Capture share/repost counts where available.
2. Persist metrics for analytics.
3. Monitor for dataset schema drift.
4. Add automated tests mocking Apify payloads.

---

### Implementation Checklist

1. **Phase 1 – Contract Foundation**
   1. Update `packages/social-referral/src/types.ts` to add `likes`/`comments` with defaults.
   2. Extend Zod result schema in `schema-validators.ts`.
   3. Ensure `social-referral-service.ts` populates zeroed engagement fields.
   4. Update `packages/api/src/router/social.ts` mutation output typing.
   5. Adjust CLI script output to include engagement fields.

2. **Phase 2 – X & Threads Parsing** 6. Collect sample Apify dataset responses for X and Threads. 7. Implement engagement parsing in `x-verifier.ts`. 8. Implement engagement parsing in `threads-verifier.ts`. 9. Merge parsed counts into results. 10. Run CLI tests documenting results.

3. **Phase 3 – Facebook Parsing** 11. Inspect Facebook dataset for engagement fields. 12. Update `facebook-verifier.ts` to parse likes/comments with fallbacks. 13. Verify via CLI sample.

4. **Phase 4 – LinkedIn Parsing** 14. Inspect LinkedIn dataset for engagement fields. 15. Update `linkedin-verifier.ts` to parse likes/comments. 16. Run CLI tests for LinkedIn sample.

5. **Wrap-Up** 17. Update documentation describing engagement fields. 18. Communicate schema change to API consumers. 19. Capture lessons learned and update plan status markers.

---

### Cursor + RIPER-5 Guidance

- **Cursor Plan Mode:** Import the checklist above; execute sequentially by phase, updating status markers upon completion.
- **RIPER-5 Workflow:**
  - RESEARCH: Review existing verifiers and Apify data structures.
  - INNOVATE: Approach fixed (reuse existing responses).
  - PLAN: Use this document as authoritative spec.
  - EXECUTE: Request "ENTER EXECUTE MODE" before implementing; provide mid-implementation check-in after roughly item 10.
  - REVIEW: Confirm each checklist item completed; flag deviations.
  - UPDATE PROCESS: If new conventions arise (e.g., shared parsing utility), update rules/context accordingly.

---

**Next Action:** Import the “Implementation Checklist” into Cursor Plan mode before starting execution.
