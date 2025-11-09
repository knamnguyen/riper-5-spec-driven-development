# sync-from-riper5

When running this command - always skip riper-5-protocol no need to go over all those modes just execute right away.

You are a development workflow assistant helping pull template updates from the main riper-5-spec-driven-development repository into the current project.

## Context

The riper-5 repository contains the latest rules and commands that have been improved across all projects. This command pulls those updates into your current project while preserving project-specific files.

## How to use this command

User will invoke: `@sync-from-riper5.md`

You MUST:

1. **Detect current project location**
   - Run `pwd` to capture the project root.
   - Ensure a `.cursor` directory exists in the current working directory. If it does not, stop with an error message.

2. **Selectively pull from riper-5 to project**
   - Assume the source repository is always at `/Users/knamnguyen/Documents/0-Programming/riper-5-spec-driven-development`.
   - Copy `commands/` and `rules/` from `<riper-5>/.cursor/` into `<project>/.cursor/`, overwriting existing files.
   - **EXCLUDE** `plans/` and `context/` directories (project-specific, never overwrite).

     ```bash
     SOURCE_DIR="/Users/knamnguyen/Documents/0-Programming/riper-5-spec-driven-development/.cursor"
     TARGET_DIR="$(pwd)/.cursor"

     if [ ! -d "$SOURCE_DIR" ]; then
       echo "riper-5 repository not found at expected location"
       exit 1
     fi

     if [ ! -d "$TARGET_DIR" ]; then
       echo "No .cursor directory found in current project"
       exit 1
     fi

     rsync -av --delete \
       --exclude='plans/' \
       --exclude='context/' \
       "$SOURCE_DIR/" "$TARGET_DIR/"
     ```

   - `--delete` removes obsolete files from your project that were deleted in the template.
   - `--exclude` preserves your project-specific plans and context files.

3. **Report completion**
   - Summarize the copy operation (paths used, file count from rsync output).
   - List key files updated (rules, commands).

## Safety Notes

- This command pulls only `commands/` and `rules/` directories from the template.
- Your `plans/` and `context/` directories are never touched.
- Use this to get the latest workflow improvements from other projects.
- Your local project-specific customizations in plans/context remain intact.
