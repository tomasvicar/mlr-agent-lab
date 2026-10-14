# AGENTS.md — Working Rules

These are the standing rules for any agent (or human) working in this repo.
They apply to every change, large or small.

## 1. Read these first

Before touching anything, read:

1. [`README.md`](README.md) — what this project is and how to run it.
2. [`PLAN.md`](PLAN.md) — where the work stands and what the next step is.

Do not start implementation work while `PLAN.md` is stale. If what you find in
the code contradicts `PLAN.md`, fix `PLAN.md` first and say so.

## 2. Python: uv only

This project is managed with [`uv`](https://docs.astral.sh/uv/).

| Do | Do not |
| --- | --- |
| `uv run <cmd>` to execute anything | `python <cmd>` directly |
| `uv add <pkg>` to install a dependency | `pip install <pkg>` (global or otherwise) |
| `uv add --dev <pkg>` for tooling | `pip install --user ...` |
| `uv sync` to rebuild the env | editing `pyproject.toml` deps by hand, then not syncing |

- Never install into a global / system interpreter.
- `uv.lock` is committed; `.venv/` is not.
- If you add a dependency, it must land in `pyproject.toml` + `uv.lock` via `uv add`.

## 3. Run checks before you say it is done

A change is not done until it has been verified in this order, using `uv run`:

1. **Format + lint** — whatever is configured in `pyproject.toml` (e.g. `uv run ruff check .`).
2. **Type check** — if type checking is configured (e.g. `uv run mypy .`).
3. **Tests** — e.g. `uv run pytest`.

Rules:

- Report the actual command output. If a check fails, say so and show the failure —
  do not summarise it as "almost passing".
- Never claim something works because it looks correct; claim it because a command ran.
- If a check is *not* configured yet, that is a gap: note it in `PLAN.md` rather than
  quietly skipping the step.
- New behaviour needs a test; bug fixes need a test that would have failed before.

## 4. Recording work

[`RUNS.md`](RUNS.md) is the log of model + request + verification for each working
session. Append an entry when a session produces a change; do not rewrite history.

## 5. General conduct

- Small, reviewable changes. No drive-by refactors of untouched files.
- Match the style of the surrounding code.
- Ask before deleting anything you did not create.
- Nothing secret gets committed: no tokens, no `.env`, no local settings files.
