# mlr-agent-lab

Lab / playground for **MLR** (Machine Reading Comprehension) agent work:
building and evaluating agents that read documents and answer questions about
them.

> The scope above is a starting description. Correct it in this file once the
> exact target is settled — `AGENTS.md` says to read this first, so it needs to
> be accurate.

## Working rules

All contribution rules live in [`AGENTS.md`](AGENTS.md): read `README.md` and
[`PLAN.md`](PLAN.md) before starting, use `uv` for all Python, and run checks
before declaring anything done. [`RUNS.md`](RUNS.md) logs each working session.

## Requirements

- [`uv`](https://docs.astral.sh/uv/) (developed with uv 0.10.2)
- Python 3.11+ (3.11.9 locally; the exact floor is pinned in `pyproject.toml`
  once the project is initialised)

## Setup

```bash
uv sync
```

This creates `.venv/` and installs everything pinned in `uv.lock`.

## How to run things

Every Python command goes through `uv run`.

```bash
uv run python <script.py>     # run a script
uv add <package>              # add a runtime dependency
uv add --dev <package>        # add a dev/tooling dependency
```

### Checks

Run all of these before saying a change is done:

```bash
uv run ruff check .           # lint
uv run ruff format --check .  # formatting
uv run pytest                 # tests
```

> None of these tools are installed yet — the project has no `pyproject.toml`.
> They become available once `uv init` / `uv add --dev ruff pytest mypy` has
> been run. Until then, "run checks" has nothing to run; that gap is tracked in
> [`PLAN.md`](PLAN.md).

## Repository layout

```
AGENTS.md    working rules for agents and humans
CLAUDE.md    loads AGENTS.md
README.md    this file — goal and how to run things
PLAN.md      current status and the next step
RUNS.md      session log: model, request, how it was verified
```

No source code exists yet. The first structural decision (what goes in `src/`
vs at the top level) belongs in `PLAN.md`.

## Status

Early scaffolding: documentation and conventions only, no code and no Python
project initialised. Committed on `main` and published at
[github.com/tomasvicar/mlr-agent-lab](https://github.com/tomasvicar/mlr-agent-lab).
See [`PLAN.md`](PLAN.md) for the ordered next steps.
