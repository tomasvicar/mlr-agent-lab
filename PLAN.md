# PLAN.md

Status and next steps. Update this file as part of the change that changes the
status — do not let it drift. Last updated: 2026-10-14.

## Where we are

Nothing has been implemented. The repo currently contains documentation and
conventions only:

- `AGENTS.md` — working rules (read-first order, uv-only, checks-before-done).
- `CLAUDE.md` — loads `AGENTS.md`.
- `README.md` — goal and run instructions.
- `RUNS.md` — session log.

There is **no source code, no `pyproject.toml`, no `uv.lock`, no tests, and no
git repository**. Every "run checks" command in `README.md` is therefore
aspirational until the tooling exists — this is a known gap, not an oversight
to route around by running things ad hoc.

## Next steps

In order:

1. **Initialise the Python project.** `uv init --name mlr-agent-lab`, set the
   Python floor in `pyproject.toml`.
2. **Add dev tooling** so the checks rule is enforceable:
   `uv add --dev ruff pytest mypy`, plus minimal `[tool.ruff]` / `[tool.mypy]`
   config in `pyproject.toml`. Confirm each of the three README check commands
   runs and exits clean on an empty project.
3. **Decide the MRC task scope.** Which dataset/task (SQuAD-style extractive,
   a RAG-style open-book setting, a specific benchmark), which model endpoint
   the agent calls, and what metric counts as success (EM / F1). This is the
   first real decision and everything else depends on it — needs input, not a
   guess.
4. **Version control.** `git init`, a `.gitignore` covering `.venv/` and
   `__pycache__/`, an initial commit, then a public GitHub repo via `gh`.
   (Blocked on `gh auth login` — see Open questions.)
5. **First agent skeleton** once (3) is answered: load data → prompt → parse
   answer → score. Keep it runnable as `uv run python <...>`.
6. **A first test** that scores a fixed prediction against a fixed gold answer,
   so the metric is pinned before any model call is involved.

## Open questions

- **What exactly is "MLR" here?** The name is assumed to mean Machine Reading
  Comprehension. If it means something else, `README.md` and steps 3 and 6 are
  wrong and need rewriting.
- **GitHub authentication.** `gh auth status` reports no logged-in host, so the
  public repo cannot be created until `gh auth login` is run interactively.
- **Model endpoint.** Local settings point `ANTHROPIC_BASE_URL` at
  `https://llm.ai.e-infra.cz/` with aliases `agentic` / `thinker` / `mini`.
  Whether the agent under development should use that endpoint, its own key, or
  a local model is undecided — and no credential should ever be committed.

## Done

- 2026-10-14 — Working rules written (`AGENTS.md`), loaded from `CLAUDE.md`;
  `README.md`, `PLAN.md`, `RUNS.md` created.
