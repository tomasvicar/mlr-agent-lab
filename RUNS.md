# RUNS.md

Log of working sessions: which model ran, what was asked, how the result was
checked. Newest last. Append; do not rewrite past entries.

---

## Run 1 — 2026-10-14 — Repo conventions and docs

### Model

From `/status`, resolved via `~/.claude/settings.json` and the session
environment:

| Field | Value |
| --- | --- |
| Model | `agentic` (the alias set as `ANTHROPIC_MODEL` for this session) |
| Endpoint | `https://llm.ai.e-infra.cz/` (`ANTHROPIC_BASE_URL`) |
| Opus alias | `thinker` |
| Sonnet alias | `agentic` |
| Haiku alias | `mini` |

Note: the model is reported by its **configured alias**, not an underlying
Claude model version — this session talks to a custom gateway that defines
`agentic` / `thinker` / `mini` itself, so no real model ID is observable from
inside the session.

### What I asked

Set up the working contract for the repo:

1. Write `AGENTS.md` with the working rules — read `README.md` and `PLAN.md`
   first, use `uv` for Python (`uv run`, `uv add`, no global `pip install`),
   and run checks before saying something is done.
2. Make `CLAUDE.md` load it.
3. Create `README.md` (goal, how to run things), `PLAN.md` (progress, next
   step), `RUNS.md` (model, request, verification).

Mid-turn addition: create a **public** GitHub repo called `mlr-agent-lab` from
this folder with `gh`, showing what would be uploaded before pushing.

### How I checked it

Commands actually run, and what they showed:

- `ls -la <repo>` — directory was **empty**; no files to preserve or conflict
  with. The four docs were the only things written.
- `git log` / `git status` — `fatal: not a git repository`. So `PLAN.md` says
  plainly there is no repo, rather than implying history exists.
- `uv --version` → `uv 0.10.2`; `python --version` → `Python 3.11.9`. These back
  the requirements stated in `README.md`.
- `gh --version` → `2.102.0`; `gh auth status` → **"not logged into any GitHub
  hosts"**. The repo creation is therefore blocked, and that is recorded as an
  open question instead of being reported as done.
- `cat ~/.claude/settings.json` and `env | grep ANTHROPIC` — source of the model
  table above; nothing about the endpoint was assumed.

What was **not** verified, and why:

- No lint / type-check / test run. There is no `pyproject.toml`, so `ruff`,
  `mypy` and `pytest` do not exist in this project yet. `AGENTS.md` §3 requires
  flagging that as a gap rather than skipping it silently — it is step 2 of
  `PLAN.md`.
- No push to GitHub. Not authenticated, and nothing was staged or committed.

### Files created

```
AGENTS.md   working rules (4 sections: read-first, uv-only, checks, conduct)
CLAUDE.md   @AGENTS.md import + one-paragraph summary
README.md   goal, requirements, setup, run + check commands, layout, status
PLAN.md     current status, 6 ordered next steps, 3 open questions
RUNS.md     this file
```

### Follow-ups left

- `gh auth login` (interactive — must be run by the user, e.g.
  `! gh auth login`), then the public repo can be created.
- Confirm "MLR" = Machine Reading Comprehension; `README.md` and `PLAN.md`
  assume it.
- `uv init` + dev tooling so the check commands are real.
- Note: the settings file read during this run contains a live
  `ANTHROPIC_AUTH_TOKEN`. It is outside this repo and must not be copied into
  any committed file.
