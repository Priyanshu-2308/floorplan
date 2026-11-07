# Skill usage

We use the floorplan skill after copying its folder into a skills directory.

## Starting a session

After we copy the skill folder, we start a new session in our project folder. A running session does not pick up new skill folders until we restart it.

## Making and updating maps

For the first map of the codebase, we type:
`Make me a floorplan of this app`

The planner scans the project, writes descriptions, and builds the map.

When we make changes to our code later, we type:
`Update the floorplan`

The planner re-scans the code, carries over existing descriptions, and only re-reads what changed.

## Running the map server by hand

We can start the local map server ourselves from the project root:

```bash
node floorplan/serve.mjs
```

These flags work when running the server:
- `--port 4378`: listen on a specific port (default is 4378)
- `--no-open`: do not open the browser automatically
- `--idle-exit 120`: shut down after the given number of idle minutes
- `--stop`: stop the running background server
- `--export`: export the map as a standalone file
- `--include flows,notes`: choose what to include in the exported file (flows, notes, recent, health)

## Where files are saved

The map files are written to `floorplan/` at the root of the project.
The folder holds its own `.gitignore` file with `*` inside. It ignores itself and all files inside it, so the map is never committed to git.

## What does not work in this setup

When we run the skill as a standalone skill folder without a supported command line tool:
- The Ask bar on the map cannot answer questions. The map opens and works, but the Ask bar stays unavailable.
- Changing blueprints from the map needs the Ask bar engine, so it does not work here.
- The project notes file step is skipped. We do not write or change CLAUDE.local.md.
- The one-click fix buttons in the Health panel are made for specific tools. We can still copy the prompt text by hand.
- Parallel helpers for worksheets do not run. We describe the files directly in one pass.

## Common problems

- Skill not found: the skill folder might be in the wrong place, or the session was not restarted. Check the path and start a fresh session.
- Wrong folder depth: the folder should contain `SKILL.md` directly. Check that the path is `.../skills/floorplan/SKILL.md` and not nested inside another folder.
- Node version too old: Floorplan needs Node `>=18` from package.json. Run `node -v` to check your version.
