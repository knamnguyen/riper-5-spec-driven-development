# Cursor Development System

> **Spec-Driven Development + RIPER-5 Execution Framework**

## Installation

**To use this system in your project:**

1. Clone or download this repository
2. Copy the entire `.cursor/` folder into the root of your project
3. Open your project in Cursor IDE
4. The system is now active! Start with `@generate-plan.md`

```bash
# Quick install
cp -r /path/to/riper-5-spec-driven-development/.cursor /path/to/your-project/
```

That's it! The `.cursor/` folder contains everything needed:
- ✅ Commands (`@generate-plan.md`, `@generate-context.md`)
- ✅ Rules (coding standards, RIPER-5 protocol)
- ✅ Context templates
- ✅ Example plans

---

## The Problem We Solve

AI agents often implement prematurely, skip planning, and make decisions without user approval. This causes:
- ❌ Wasted time on wrong approaches
- ❌ Inconsistent code quality
- ❌ Lost context between sessions
- ❌ Repetitive mistakes

## Our Solution: Two-Part System

---

## 1. Spec-Driven Development

**Purpose**: Create comprehensive technical specifications BEFORE any coding

- **Command**: `@generate-plan.md` → generates `.cursor/plans/[feature]_PLAN_[dd-mm-yy].md`
- **Two Complexity Levels**:
  - **SIMPLE**: One-session features (8-15 steps) - single component
  - **COMPLEX**: Multi-phase projects with RFCs, phase tracking (✅/🚧/⏳)
- **Benefits**:
  - ✅ Persistent context across sessions (reattach date-stamped plan file)
  - ✅ Complete requirements captured upfront
  - ✅ Clear acceptance criteria
  - ✅ Prevents scope creep

**Example Plan Structure**:
- Goals & Success Metrics
- Architecture Decisions
- Implementation Checklist (imported directly into Cursor Plan mode)
- Phase delivery tracking
- Change management process

---

## 2. RIPER-5 Execution Framework

**Purpose**: Prevent premature coding; enforce systematic execution

**5 Sequential Modes** (AI MUST declare current mode, one at a time):

| Mode | Purpose | Allowed | Forbidden |
|------|---------|---------|-----------|
| **RESEARCH** | Understand codebase, validate context | Read files, ask questions | Code changes, planning |
| **INNOVATE** | Brainstorm approaches | Discuss options, trade-offs | Concrete decisions, implementation |
| **PLAN** | Finalize specification | Extract/update checklist from plan file | File modifications |
| **EXECUTE** | Implement exactly as planned | Code changes matching plan | Deviations without approval |
| **REVIEW** | Validate implementation | Compare against plan, flag gaps | Moving forward with deviations |

**Key Safeguards**:
- **Phase Locking**: Activities locked to designated phase (e.g., todos ONLY in PLAN, code ONLY in EXECUTE)
- **50% Check-in**: Mid-implementation validation to catch issues early
- **Self-Review**: AI verifies line-by-line against plan after implementation
- **Explicit Transitions**: User must command "ENTER [MODE]" to proceed

---

## 3. Auto-Update System: Continuous Improvement

**Every RIPER-5 session automatically updates**:

1. **Plan Files** (`.cursor/plans/[feature]_PLAN_*.md`)
   - Deviations from implementation
   - Phase completion status
   - "What's Functional Now" summaries

2. **Context Repository** (`.cursor/context/all-context.md`)
   - New conventions discovered
   - Architecture changes
   - Environment variables, API surface

3. **AI Memories**
   - User preferences and corrections
   - Lessons learned from mistakes
   - Workflow improvements

**Result**: AI learns and improves after every session. Next session inherits all learnings automatically.

---

## How They Work Together

```
User Request
    ↓
@generate-plan → [feature]_PLAN_06-11-25.md created
    ↓
RESEARCH → Validate against existing context
    ↓
INNOVATE → Explore approaches
    ↓
PLAN → Extract Implementation Checklist from plan file
    ↓
[User approves: "ENTER EXECUTE MODE"]
    ↓
EXECUTE → Implement exactly as specified (50% check-in)
    ↓
Self-Review → Flag any deviations
    ↓
Auto-Update → Update plan + context + memories
    ↓
Next session starts with full knowledge of changes
```

---

## Key Benefits

✅ **No premature implementation**: AI can't code until explicit approval  
✅ **Persistent memory**: Plans survive across sessions, conversations  
✅ **Self-correcting**: Auto-review catches drift immediately  
✅ **Continuous learning**: Every session makes the system smarter  
✅ **CEO-friendly audit trail**: Date-stamped plans show exactly what was built when  
✅ **Reduced waste**: Wrong approaches caught in PLAN mode, not after coding  

---

## Real-World Impact

**Before**: 4-hour implementation abandoned due to wrong approach  
**After**: 30-minute PLAN phase identified issue; pivot in 5 minutes  

**ROI**: ~90% reduction in wasted implementation time for complex features

---

## Directory Structure

```
.cursor/
├── README.md                    # This file
├── commands/                    # Executable commands
│   ├── generate-plan.md         # Create feature specifications
│   └── generate-context.md      # Update repository context
├── context/                     # Repository knowledge base
│   ├── all-context.md           # Single source of truth for repo structure
│   └── example-complex-prd.md   # Reference for complex plan depth
├── plans/                       # Date-stamped feature specifications
│   └── [feature]_PLAN_[dd-mm-yy].md
└── rules/                       # AI behavior and coding standards
    ├── 000-rule-generation.mdc
    ├── 001-code-standards-agent.mdc
    ├── 002-turborepo-stack.mdc
    ├── 003-best-practice-detail.mdc
    └── riper-5-mode.mdc         # Execution protocol
```

---

## Quick Start

1. **Starting a new feature**:
   ```
   @generate-plan.md
   [Describe feature] → SIMPLE or COMPLEX?
   ```

2. **Execute existing plan**:
   ```
   Attach: .cursor/plans/[feature]_PLAN_*.md
   Say: "ENTER RESEARCH MODE"
   ```

3. **Update repository context**:
   ```
   @generate-context.md
   ```

---

## Getting Started

### First-Time Setup

1. **Clone this repository** and ensure you have Cursor IDE installed
2. **Open the project** in Cursor IDE
3. **Just start talking!** The AI auto-detects what you want and handles the workflow

**That's it!** No commands to memorize. Just describe your feature or ask a question.

---

### How Auto-Detection Works

**The AI automatically:**
- ✅ Starts every conversation in RESEARCH mode
- ✅ Detects if you're asking a question or requesting a feature
- ✅ Suggests generating context file if missing
- ✅ Triggers plan generation for non-trivial features
- ✅ Resumes from existing plan files
- ✅ Updates context and plans during implementation

**You just:**
- Describe what you want in natural language
- Approve when AI asks: "ENTER EXECUTE MODE"
- That's it!

---

### Manual Commands (Optional)

If you prefer explicit control, these commands still work:
- `@generate-plan.md` - Create feature specification
- `@generate-context.md` - Scan codebase for context
- `ENTER [MODE] MODE` - Manual mode transitions
- `go` - Sequential mode advancement

---

### Directory Structure

The `.cursor/` folder contains:
- `commands/` - Executable AI commands (start with `@`)
- `context/` - Repository knowledge base (auto-referenced by AI)
- `plans/` - Feature specifications (date-stamped)
- `rules/` - AI behavior protocols (auto-loaded)

### Working with Commands

**Generate a Plan** (for any new feature):
```
1. In Cursor chat, type: @generate-plan.md
2. Describe your feature when prompted
3. Answer: SIMPLE (one session) or COMPLEX (multi-phase)
4. AI asks 3-5 clarifying questions
5. Plan created at .cursor/plans/[feature]_PLAN_[dd-mm-yy].md
```

**Regenerate Context** (after major changes):
```
1. Type: @generate-context.md
2. Select: Full Scan or Delta Update
3. AI updates .cursor/context/all-context.md
```

### Executing a Feature (RIPER-5 Workflow)

**Step 1: Start with Research**
```
1. Attach plan file: .cursor/plans/[feature]_PLAN_*.md
2. Say: "ENTER RESEARCH MODE"
3. AI reads codebase, asks questions
4. When ready, say: "go" (moves to next phase)
```

**Step 2: Innovate Approaches**
```
1. AI is now in INNOVATE mode
2. Discuss different implementation approaches
3. Review trade-offs together
4. Say: "go" when approach is decided
```

**Step 3: Finalize Plan**
```
1. AI is now in PLAN mode
2. AI extracts/refines Implementation Checklist
3. Review the checklist carefully
4. Say: "ENTER EXECUTE MODE" when approved
```

**Step 4: Execute Implementation**
```
1. AI implements EXACTLY as planned
2. At 50% completion, AI checks in
3. After completion, AI self-reviews
4. Any deviations are flagged automatically
```

**Step 5: Review & Update**
```
1. AI compares implementation vs plan
2. If deviations exist, say: "ENTER UPDATE PROCESS MODE"
3. AI suggests rule/context/plan updates
4. Approve updates: "1. yes 2. no 3. yes"
5. System learns and improves
```

### Quick Commands

| Command | Purpose | Usage |
|---------|---------|-------|
| `@generate-plan.md` | Create feature spec | Start any new feature |
| `@generate-context.md` | Update repo knowledge | After architecture changes |
| `ENTER RESEARCH MODE` | Start investigation | Beginning of feature work |
| `go` | Move to next phase | Sequential mode transitions |
| `ENTER EXECUTE MODE` | Start coding | After plan approval |
| `ENTER UPDATE PROCESS MODE` | Improve system | After catching mistakes |

### Common Workflows

**Quick Fix (No Plan Needed)**:
```
Just describe the fix → AI handles it directly
```

**Small Feature (SIMPLE Plan)**:
```
@generate-plan.md → SIMPLE → RESEARCH → INNOVATE → PLAN → EXECUTE
```

**Large Feature (COMPLEX Plan)**:
```
@generate-plan.md → COMPLEX → Execute Phase 1 → Update plan → 
Execute Phase 2 → ... → Complete
```

**Continue Existing Work**:
```
1. Attach: .cursor/plans/[feature]_PLAN_*.md
2. Say: "Continue where we left off"
3. AI reads "What's Functional Now" section
4. Resume implementation
```

### Best Practices

✅ **Always start non-trivial features with a plan**  
✅ **Reattach plan files when resuming work**  
✅ **Let AI complete each RIPER-5 phase before saying "go"**  
✅ **Use "ENTER EXECUTE MODE" explicitly (never assume)**  
✅ **Review the 50% check-in carefully**  
✅ **Run UPDATE PROCESS after learning something new**  

❌ **Don't skip RESEARCH/INNOVATE phases**  
❌ **Don't start coding before plan approval**  
❌ **Don't ignore deviation flags in REVIEW mode**  
❌ **Don't modify plan files manually (use UPDATE PROCESS)**  

### For New Team Members

- All plans are in `.cursor/plans/` (date-stamped for easy tracking)
- Attach relevant plan file to any conversation for context
- AI will guide you through RIPER-5 phases automatically
- Never start coding without a plan file
- Use `@generate-plan.md` for any non-trivial feature

### Troubleshooting

**"AI is coding without approval"**:
→ AI should be in RESEARCH/INNOVATE/PLAN mode first. Say: "Stop. ENTER RESEARCH MODE"

**"I don't know which mode we're in"**:
→ Every AI response MUST start with `[MODE: X]`. If missing, ask: "What mode are you in?"

**"Plan file is outdated"**:
→ Say: "ENTER UPDATE PROCESS MODE" to sync plan with current state

**"AI made changes I didn't approve"**:
→ Say: "Revert those changes. ENTER PLAN MODE and get approval first"

---

## For Contributors

If you're publishing this system or adapting it for your team:

1. **Customize** `.cursor/rules/` to match your tech stack
2. **Update** `.cursor/context/all-context.md` with your repo structure
3. **Modify** `.cursor/commands/generate-plan.md` template as needed
4. **Keep** the RIPER-5 protocol intact (it's the enforcement mechanism)
5. **Share** your `.cursor/plans/` as examples for your team

---

**Last Updated**: 2025-11-06  
**System Version**: 1.0  
**Maintained by**: [Your Team Name]

