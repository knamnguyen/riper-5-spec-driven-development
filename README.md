# RIPER-5 Spec-Driven Development System

> **A systematic approach to AI-assisted development that prevents premature implementation and ensures quality**

## What is This?

A complete development system for Cursor IDE that combines:

- 🤖 **Auto-Detection**: Just describe what you want - AI handles the rest
- 📋 **Spec-Driven Development**: Plans auto-generate for features, auto-update during implementation
- 🔄 **RIPER-5 Protocol**: 5-phase execution framework (Research → Innovate → Plan → Execute → Review)
- 🧠 **Auto-Learning**: Context and plans auto-update with every session
- 📚 **Persistent Memory**: Everything survives across conversations

## Quick Start

### Installation

```bash
# Clone this repo
git clone https://github.com/knamnguyen/riper-5-spec-driven-development.git

# Copy .cursor folder to your project
cp -r riper-5-spec-driven-development/.cursor /path/to/your-project/

# Open your project in Cursor IDE - you're done!
```

### Your First Feature

**Just describe what you want - that's it!**

```
You: "I want to add a dark mode toggle to my app"

AI: [MODE: RESEARCH]
     Let me understand your setup first...
     [Analyzes codebase]
     This is a SIMPLE feature. Generating plan...
     @generate-plan.md
     [Auto-creates plan, moves through phases]
     Ready to implement. Say "ENTER EXECUTE MODE"
```

**No commands to remember. No setup. Just talk naturally.**

---

**Alternative: Use explicit commands if you prefer**

1. Type: `@generate-plan.md`
2. Describe your feature
3. Choose: SIMPLE or COMPLEX
4. Follow the RIPER-5 workflow

### Setting Up for Existing Projects

**AI automatically detects and offers to scan your codebase:**

```
You: "Add a user profile page to my app"

AI: [MODE: RESEARCH]
     I notice this project doesn't have a context file yet.

     Should I run @generate-context.md to understand your:
     - Tech stack and versions
     - Project structure
     - Conventions
     - API patterns

     This will help me create a better plan. (yes/no)

You: "yes"

AI: [Scans codebase, creates .cursor/context/all-context.md]
     Context generated! Now analyzing for your user profile page...
```

**Manual alternative:** Just type `@generate-context.md` anytime

This context file is automatically referenced during RESEARCH mode to validate implementations against your existing architecture.

---

## Plan Types: SIMPLE vs COMPLEX

### SIMPLE Plans (One-Session Features)

**Use for**: Single component, endpoint, or UI element that ships in one session

**Characteristics**:

- 8-15 atomic steps
- Completable in 1-2 hours
- Single RIPER-5 cycle
- No phased delivery

**Example**: Add a "Delete Account" button

```
@generate-plan.md → SIMPLE
RESEARCH (10 min) → INNOVATE (5 min) → PLAN (15 min) →
EXECUTE (45 min) → REVIEW (10 min) → ✅ Done in one session
```

---

### COMPLEX Plans (Multi-Phase Projects)

**Use for**: Features spanning multiple subsystems, requiring phased delivery

**Characteristics**:

- Multiple RFCs (Request for Comments)
- Phase tracking (✅ Complete, 🚧 In Progress, ⏳ Planned)
- "What's Functional Now" summaries after each phase
- Designed for **multiple Cursor sessions**

**Example**: Multi-Platform Social Referral System

```
@generate-plan.md → COMPLEX
Plan created: social-referral_PLAN_06-11-25.md

┌─────────────────────────────────────────────┐
│ SESSION 1: Phase 1 (X/Twitter Support)     │
└─────────────────────────────────────────────┘
Attach: social-referral_PLAN_06-11-25.md
RESEARCH → INNOVATE → PLAN → EXECUTE Phase 1
Plan updated: ✅ Phase 1 Complete

┌─────────────────────────────────────────────┐
│ SESSION 2: Phase 2 (Threads Support)       │
└─────────────────────────────────────────────┘
Attach: social-referral_PLAN_06-11-25.md (same file)
AI reads "What's Functional Now: X support working"
RESEARCH → PLAN → EXECUTE Phase 2
Plan updated: ✅ Phase 1 | ✅ Phase 2 Complete

┌─────────────────────────────────────────────┐
│ SESSION 3: Phase 3 (Facebook Support)      │
└─────────────────────────────────────────────┘
Attach: social-referral_PLAN_06-11-25.md
AI reads "What's Functional Now: X & Threads working"
RESEARCH → PLAN → EXECUTE Phase 3
Plan updated: ✅✅✅ All Phases Complete
```

**Key Benefits**:

- ✅ Date-stamped plan survives across sessions
- ✅ "What's Functional Now" tracks incremental progress
- ✅ Each phase independently deployable and testable
- ✅ Can pause/resume work across days or weeks
- ✅ Multiple team members can work on different phases

---

## What's Included

```
.cursor/
├── README.md                    # Complete documentation
├── commands/
│   ├── generate-plan.md         # Create feature specs
│   └── generate-context.md      # Update repo knowledge
├── context/
│   ├── all-context.md           # Repository structure template
│   └── example-complex-prd.md   # Reference for complex plans
├── plans/
│   └── [Examples of real plans]
└── rules/
    ├── riper-5-mode.mdc         # Execution protocol
    └── [Coding standards and best practices]
```

## Why Use This?

### Before RIPER-5

- ❌ AI codes before understanding requirements
- ❌ Hours wasted on wrong approaches
- ❌ Lost context between sessions
- ❌ Inconsistent code quality
- ❌ Need to learn complex commands and workflows

### After RIPER-5

- ✅ **Just describe what you want - AI auto-detects and handles workflow**
- ✅ AI can't code without explicit approval
- ✅ Wrong approaches caught in 30-min planning phase (auto-generated)
- ✅ Context auto-updates every session
- ✅ Plans auto-generate and auto-update
- ✅ Self-reviewing AI catches mistakes
- ✅ **~90% reduction in wasted implementation time**

## How It Works

**Fully Automatic Workflow:**

```
You: "I want to add user authentication"
    ↓
AI auto-detects: Feature request (non-trivial)
    ↓
AI auto-enters: [MODE: RESEARCH]
    ↓
AI checks: Is .cursor/context/all-context.md present?
    ├─ No  → Auto-suggests: "Run @generate-context.md?"
    └─ Yes → Uses context to understand codebase
    ↓
AI completes research, auto-triggers plan generation
    ↓
AI auto-invokes: @generate-plan.md
    ↓
AI creates: user-authentication_PLAN_06-11-25.md
    ↓
[MODE: INNOVATE] → Explores approaches
    ↓
[MODE: PLAN] → Finalizes implementation checklist
    ↓
AI waits for approval: "Ready to implement. Say 'ENTER EXECUTE MODE'"
    ↓
You: "ENTER EXECUTE MODE"
    ↓
[MODE: EXECUTE] → Implements exactly as planned
    ↓
[MODE: REVIEW] → Self-checks against plan
    ↓
Auto-updates: plan progress, context, memories
```

**You only said one sentence. AI handled everything else automatically.**

## Features

### 🤖 Auto-Detection (NEW!)

- **Auto-detects feature requests** - No need to invoke commands manually
- **Auto-suggests context generation** - Asks to scan codebase if needed
- **Auto-triggers plan generation** - Creates plans for non-trivial features
- **Auto-resumes work** - Picks up where you left off from plan files
- **Smart classification** - Distinguishes questions vs features vs trivial fixes
- **Manual override available** - Explicit commands still work for full control

### 🎯 Spec-Driven Development

- **Auto-generates** SIMPLE (one-session) or COMPLEX (multi-phase) plans
- **Auto-updates** plans during implementation
- Date-stamped plans: `.cursor/plans/[feature]_PLAN_06-11-25.md`
- Reattach plans across sessions for continuity
- Import checklists directly into Cursor Plan mode

### 🔄 RIPER-5 Execution

- **Auto-starts** in RESEARCH mode (no manual trigger needed)
- **RESEARCH**: Understand before acting
- **INNOVATE**: Explore options systematically
- **PLAN**: Finalize before implementing
- **EXECUTE**: Code only with explicit approval
- **REVIEW**: Auto-verifies against plan

### 🧠 Auto-Learning

- **Auto-updates** context after every session
- **Auto-updates** plans during implementation
- Captures user preferences in memories
- Plan files track "What's Functional Now"
- Context repository stays current

### 🛡️ Safety Features

- **Phase Locking**: AI can't code in RESEARCH/INNOVATE/PLAN modes
- **50% Check-in**: Mid-implementation validation
- **Self-Review**: AI auto-flags its own deviations
- **Explicit Approval Required**: EXECUTE mode requires "ENTER EXECUTE MODE" command

## Documentation

Full documentation is in `.cursor/README.md` including:

- Complete Getting Started guide
- Step-by-step RIPER-5 workflow
- Quick command reference
- Common workflows
- Troubleshooting
- Best practices

## Customization

This system is designed to be adapted:

1. **Customize rules** in `.cursor/rules/` for your tech stack
2. **Update context** in `.cursor/context/all-context.md` with your repo structure
3. **Modify plan templates** in `.cursor/commands/generate-plan.md`
4. **Keep RIPER-5 protocol** intact (it's the enforcement mechanism)

## Real-World Impact

**Case Study: Multi-Platform Social Referral Extension**

- **Before**: 4-hour implementation abandoned (wrong approach)
- **After**: 30-minute PLAN phase identified issue; pivot in 5 minutes
- **Savings**: ~3.5 hours of wasted coding

**ROI**: ~90% reduction in wasted implementation time for complex features

## Requirements

- [Cursor IDE](https://cursor.sh/) (Latest version recommended)
- Any programming language/framework (system is language-agnostic)

## License

MIT License - Feel free to use, modify, and distribute

## Contributing

Found a bug? Have an improvement?

1. Fork this repo
2. Use the system to create a plan for your change
3. Submit PR with the plan file included
4. Follow RIPER-5 protocol in your implementation

## Credits

Created by [@knamnguyen](https://github.com/knamnguyen)

Inspired by systematic software engineering practices and the need for better AI-assisted development workflows.

---

**Version**: 1.0  
**Last Updated**: 2025-11-06

⭐ **If this system saves you time, give it a star!**
