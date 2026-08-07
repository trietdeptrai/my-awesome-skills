---
name: commit-major-decisions
description: Automatically create scoped local Git commits after each user-approved, implemented, and verified major decision during multi-step repository work. Use when persistent user or repository guidance requests automatic decision checkpoints, when the user asks for automatic or atomic implementation commits, or when the user invokes $commit-major-decisions. Keep unrelated work untouched and never push.
---

# Commit Major Decisions

Turn each approved major decision into a coherent, verified local commit while continuing the task. Treat persistent user or repository guidance, or explicit invocation, as task-scoped permission to create these commits without requesting separate approval for each one.

## Establish the checkpoint contract

Before editing:

1. Read repository instructions and obey any stricter approval, validation, or Git rules.
2. Confirm the implementation direction before consequential work if it has not already been approved.
3. Inspect the baseline with `git status --short`, `git branch --show-current`, `git diff`, and `git diff --cached`.
4. Identify pre-existing staged, unstaged, and untracked work. Preserve it throughout the task.
5. State briefly that local commits will be created automatically at qualifying checkpoints and that pushing is excluded.

Do not require the user to re-authorize each qualifying commit after this contract is active. Ask only when a safety condition below prevents clean isolation or repository instructions require it.

## Identify a major decision

Create a checkpoint only when all of these are true:

- The user approved a consequential product, architecture, workflow, data-model, interface, or implementation direction.
- The decision is represented in repository files; discussion alone is not committable work.
- The decision's implementation forms a coherent unit that another developer could understand or revert independently.
- Appropriate focused verification has passed.

Do not create a checkpoint for:

- Minor fixes or edits that remain part of the current approved decision.
- Incomplete, broken, speculative, or unverified work.
- Conversation-only decisions with no file changes.
- Formatting churn, generated output, temporary files, dependencies, or unrelated cleanup unless they are essential to the decision.
- An empty commit or a new decision-record file the user did not request.

If the user reverses a previously committed decision, create a new coherent commit for the replacement or reversal. Never amend, rewrite, or hide the earlier checkpoint.

## Create each checkpoint

Perform these steps after a qualifying decision is implemented:

1. **Inspect the complete state.** Re-run `git status --short`, inspect staged and unstaged diffs, and list untracked files.
2. **Define the exact scope.** Map the decision to specific files and ensure each file belongs wholly to this checkpoint.
3. **Verify the implementation.** Run the narrowest meaningful tests, type checks, lint checks, builds, or artifact validation. Also run `git diff --check` when applicable.
4. **Protect sensitive and unrelated content.** Exclude secrets, credentials, local configuration, generated artifacts, and all pre-existing or unrelated changes.
5. **Stage explicitly.** Use `git add -- <exact paths>`. Never use `git add -A`, `git add .`, or a broad wildcard.
6. **Review the staged result.** Run `git diff --cached --check`, inspect `git diff --cached`, and confirm the staged file list matches the decision.
7. **Commit once.** Follow the repository's commit style. Prefer a concise subject that explains the outcome, not the process. Create a new commit; never amend.
8. **Verify the result.** Record the commit hash, inspect `git show --stat --oneline HEAD`, and re-run `git status --short` to confirm unrelated work remains untouched.
9. **Continue the task.** Report the checkpoint concisely in commentary and proceed to the next approved decision.

## Handle unsafe or ambiguous states

Do not commit automatically when any of these conditions occurs:

- Focused verification fails.
- A file mixes checkpoint work with unrelated user changes and cannot be isolated safely.
- Unrelated changes are already staged and would enter the commit.
- The intended scope is ambiguous.
- A secret or credential may be present.
- A commit hook fails or mutates files unexpectedly.
- The current branch or repository state makes a local commit unsafe.

First exhaust safe, read-only inspection. Continue fixing an in-scope verification failure when the remedy is clear and authorized. Otherwise stop before staging or committing, explain the exact blocker, and ask one focused question.

Never unstage, discard, stash, reset, clean, amend, rebase, switch branches, or delete user work merely to manufacture a clean checkpoint.

## Boundaries

- Create local commits only. Never push, force-push, open a pull request, or modify remote state unless the user separately requests it.
- Never bypass hooks or validation with flags such as `--no-verify`.
- Never claim a checkpoint exists until `git commit` succeeds and the resulting commit is inspected.
- At task completion, summarize the created commit hashes and any remaining uncommitted work.
