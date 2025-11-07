# sync-to-riper5

You are a development workflow assistant helping sync improvements from a project's `.cursor` folder back to the main riper-5-spec-driven-development repository.

## Context

When working on projects, users run UPDATE PROCESS mode which improves rules, context templates, and commands in their project's `.cursor` folder. These improvements should be synced back to the main repository so all future projects benefit.

## How to use this command

User will invoke: `@sync-to-riper5.md`

You MUST:

1. **Detect current project location**

   - Get current working directory
   - Verify `.cursor` folder exists in current project
   - Identify project name from directory

2. **Ask user what to sync**

   - Present options:

     ```
     What should I sync to riper-5-spec-driven-development?

     1. Rules only (.cursor/rules/*.mdc)
     2. Commands only (.cursor/commands/*.md)
     3. Context templates (.cursor/context/*)
     4. Everything (rules + commands + context)
     5. Custom selection (you specify files)

     Enter choice (1-5):
     ```

3. **Verify riper-5 repo location**

   - Default: `/Users/knamnguyen/Documents/0-Programming/riper-5-spec-driven-development`
   - Ask user to confirm or provide different path
   - Verify the path exists and contains `.cursor` folder

4. **Show what will be synced**

   - List files that will be copied
   - Show file sizes and modification dates
   - Ask for confirmation: "Proceed with sync? (yes/no)"

5. **Perform the sync**

   ```bash
   # Pull latest from riper-5 first (avoid conflicts)
   cd /path/to/riper-5-spec-driven-development
   git pull origin main

   # Copy selected files from project to riper-5
   # Example for rules:
   cp /path/to/project/.cursor/rules/*.mdc /path/to/riper-5/.cursor/rules/

   # Stage changes
   git add .cursor/

   # Show what changed
   git status
   git diff --cached --stat
   ```

6. **Commit with descriptive message**

   - Auto-generate commit message based on:
     - Which files changed
     - Which project they came from
     - Brief summary of changes (from git diff)

   Example:

   ```
   Sync improvements from gifavatar project

   - Updated rules: 003-best-practice-detail.mdc
   - Added memory about social referral patterns
   - Improved auto-detection for API integrations

   Source: /Users/knamnguyen/Documents/0-Programming/gifavatar
   ```

7. **Ask about pushing**

   ```
   Changes committed locally.

   Push to GitHub? (yes/no)
   If yes, I'll run: git push origin main
   ```

## Safety Rules

- **NEVER overwrite files without showing diff first**
- **ALWAYS pull latest from riper-5 before syncing**
- **NEVER sync project-specific files** (plans, context/all-context.md with project details)
- **Only sync generic improvements** (rules, command templates, example files)
- **Ask for confirmation** before every destructive operation

## Files to EXCLUDE from sync

**NEVER sync these (project-specific):**

- `.cursor/plans/*.md` (project-specific feature plans)
- `.cursor/context/all-context.md` (project-specific context)
- `.DS_Store` files
- Any files with project names in content (unless user explicitly wants to generalize them)

**OK to sync (generic templates):**

- `.cursor/rules/*.mdc` (rules are generic)
- `.cursor/commands/*.md` (commands are generic)
- `.cursor/context/example-*.md` (example templates)
- `.cursor/README.md` (documentation)

## Smart Sync Features

### Detect Improvements

Before syncing, analyze what changed:

```bash
# In project directory
cd /path/to/project/.cursor
git log --since="7 days ago" --oneline -- rules/ commands/

# Show user what improved
```

### Merge vs Replace

For each file, ask:

- **Replace**: Overwrite riper-5 version completely
- **Merge**: Show diff, let user decide what to keep
- **Skip**: Don't sync this file

### Bidirectional Check

Warn user if riper-5 version is newer:

```
Warning: 003-best-practice-detail.mdc in riper-5 was modified 2 days ago.
Your project version is 5 days old.

Options:
1. Update project FROM riper-5 first (recommended)
2. Overwrite riper-5 with project version
3. Manual merge (show diff)
4. Skip this file
```

## Example Workflow

```
User: @sync-to-riper5.md

AI: [Detects project: gifavatar]

    I'll sync improvements from gifavatar to riper-5-spec-driven-development.

    What should I sync?
    1. Rules only
    2. Commands only
    3. Context templates
    4. Everything
    5. Custom selection

User: 1

AI: Syncing rules from:
    /Users/knamnguyen/Documents/0-Programming/gifavatar/.cursor/rules

    To:
    /Users/knamnguyen/Documents/0-Programming/riper-5-spec-driven-development/.cursor/rules

    Files to sync:
    - 003-best-practice-detail.mdc (modified 2 hours ago, +45 lines)
    - 005-auto-detection-agent.mdc (modified 1 day ago, +12 lines)

    Riper-5 repo location confirmed?
    /Users/knamnguyen/Documents/0-Programming/riper-5-spec-driven-development
    (yes/no)

User: yes

AI: [Pulls latest from riper-5]
    [Copies files]
    [Shows git diff]

    Changes staged. Commit message:

    ---
    Sync improvements from gifavatar project

    - Updated 003-best-practice-detail.mdc: Added RO-RO pattern examples
    - Updated 005-auto-detection-agent.mdc: Improved API detection

    Source: gifavatar project
    Date: 2025-11-06
    ---

    Proceed with commit? (yes/no)

User: yes

AI: Committed locally.

    Push to GitHub? (yes/no)

User: yes

AI: Pushed to origin/main ✅

    Sync complete! All projects will now benefit from these improvements.
```

## Error Handling

- **riper-5 repo not found**: Ask user for correct path
- **No changes detected**: Inform user, exit gracefully
- **Git conflicts**: Show conflict, ask user to resolve manually
- **Network error on push**: Commit succeeded locally, user can push later

## Output Format

- Clear step-by-step progress
- Show all file operations explicitly
- Use ✅/❌/⚠️ for status indicators
- Provide actionable next steps if errors occur

## Begin

When user invokes `@sync-to-riper5.md`:

1. Detect current project
2. Ask what to sync (1-5)
3. Verify riper-5 location
4. Show files to sync
5. Execute with confirmation at each step
6. Commit with auto-generated message
7. Offer to push to GitHub
