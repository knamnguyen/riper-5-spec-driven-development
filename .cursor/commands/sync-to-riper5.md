# sync-to-riper5

When running this command - always skip riper-5-protocol no need to go over all those modes just execute right away.

You are a development workflow assistant helping sync improvements from a project's `.cursor` folder back to the main riper-5-spec-driven-development repository.

## Context

When working on projects, users run UPDATE PROCESS mode which improves rules and commands in their project's `.cursor` folder. These improvements should be synced back to the main repository so all future projects benefit.

## How to use this command

User will invoke: `@sync-to-riper5.md`

You MUST:

1. **Detect current project location**
   - Run `pwd` to capture the project root.
   - Ensure a `.cursor` directory exists in the current working directory. If it does not, stop with an error message.

2. **Selectively sync `.cursor` directory to riper-5**
   - Assume the target repository is always at `/Users/knamnguyen/Documents/0-Programming/riper-5-spec-driven-development`.
   - Copy `commands/` and `rules/` from `<project>/.cursor/` into `<riper-5>/.cursor/`, overwriting existing files.
   - **EXCLUDE** `plans/` and `context/` directories (project-specific, never sync).

     ```bash
     SOURCE_DIR="$(pwd)/.cursor"
     TARGET_DIR="/Users/knamnguyen/Documents/0-Programming/riper-5-spec-driven-development/.cursor"

     if [ ! -d "$SOURCE_DIR" ]; then
       echo "No .cursor directory found in current project"
       exit 1
     fi

     rsync -av --delete \
       --exclude='plans/' \
       --exclude='context/' \
       "$SOURCE_DIR/" "$TARGET_DIR/"
     ```

   - `--delete` keeps the target clean by removing files that were deleted in the project copy.
   - `--exclude` prevents project-specific files from overwriting template.

3. **Report completion**
   - Summarize the copy operation (paths used, file count from rsync output).
   - Skip Git operations, remote pulls, or push prompts unless the user explicitly asks for them.

## Safety Notes

- This command syncs only `commands/` and `rules/` directories.
- `plans/` and `context/` are project-specific and never synced.
- Use this after UPDATE PROCESS mode to share improvements with all future projects.
