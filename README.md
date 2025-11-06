# RIPER-5 Spec-Driven Development System

> **A systematic approach to AI-assisted development that prevents premature implementation and ensures quality**

## What is This?

A complete development system for Cursor IDE that combines:
- 📋 **Spec-Driven Development**: Create comprehensive plans before coding
- 🔄 **RIPER-5 Protocol**: 5-phase execution framework (Research → Innovate → Plan → Execute → Review)
- 🧠 **Auto-Learning**: System improves after every session
- 📚 **Persistent Memory**: Context survives across conversations

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

1. In Cursor chat, type: `@generate-plan.md`
2. Describe your feature
3. Choose: SIMPLE or COMPLEX
4. Follow the RIPER-5 workflow
5. Watch AI systematically build it

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

### After RIPER-5
- ✅ AI can't code without explicit approval
- ✅ Wrong approaches caught in 30-min planning phase
- ✅ Full context persists across sessions
- ✅ Self-reviewing AI catches mistakes
- ✅ **~90% reduction in wasted implementation time**

## How It Works

```
User describes feature
    ↓
@generate-plan → [feature]_PLAN_06-11-25.md created
    ↓
RESEARCH → AI understands codebase
    ↓
INNOVATE → Explore approaches
    ↓
PLAN → Finalize implementation checklist
    ↓
[User approves: "ENTER EXECUTE MODE"]
    ↓
EXECUTE → AI implements exactly as planned
    ↓
REVIEW → Self-check against plan
    ↓
Auto-update rules, context, and memories
```

## Features

### 🎯 Spec-Driven Development
- Generate SIMPLE (one-session) or COMPLEX (multi-phase) plans
- Date-stamped plans: `.cursor/plans/[feature]_PLAN_06-11-25.md`
- Reattach plans across sessions for continuity
- Import checklists directly into Cursor Plan mode

### 🔄 RIPER-5 Execution
- **RESEARCH**: Understand before acting
- **INNOVATE**: Explore options systematically  
- **PLAN**: Finalize before implementing
- **EXECUTE**: Code only with approval
- **REVIEW**: Self-verify against plan

### 🧠 Auto-Learning
- System updates rules after every session
- Captures user preferences in memories
- Plan files track "What's Functional Now"
- Context repository stays current

### 🛡️ Safety Features
- **Phase Locking**: AI can't code in RESEARCH/INNOVATE/PLAN modes
- **50% Check-in**: Mid-implementation validation
- **Self-Review**: AI flags its own deviations
- **Explicit Transitions**: User controls mode changes

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

