# Skill installation

We copy the floorplan skill folder so it works as a normal skill. We do not need to clone the whole repository every time.

## Where the folder goes

### Antigravity

For all projects:
- Mac and Linux: `~/.gemini/antigravity/skills/floorplan` (or `~/.gemini/config/skills/floorplan`)
- Windows: `%USERPROFILE%\.gemini\antigravity\skills\floorplan` (or `%USERPROFILE%\.gemini\config\skills\floorplan`)

For one project:
- `<project-root>/.agents/skills/floorplan`
- `<project-root>/.gemini/skills/floorplan`

### General skill folders

For one project:
- `<project-root>/.skills/floorplan`
- `<project-root>/skills/floorplan`

For all projects:
- Mac and Linux: `~/.skills/floorplan`
- Windows: `%USERPROFILE%\.skills\floorplan`

## Copy commands

We copy the `skills/floorplan` folder to the target path.

### Antigravity

For all projects on Mac and Linux:
```bash
mkdir -p ~/.gemini/antigravity/skills
cp -r skills/floorplan ~/.gemini/antigravity/skills/floorplan
```

For all projects on Windows in PowerShell:
```powershell
New-Item -ItemType Directory -Force -Path "$HOME\.gemini\antigravity\skills"
Copy-Item -Recurse -Force skills\floorplan "$HOME\.gemini\antigravity\skills\floorplan"
```

For all projects on Windows in Command Prompt:
```cmd
mkdir "%USERPROFILE%\.gemini\antigravity\skills"
xcopy /E /I /Y skills\floorplan "%USERPROFILE%\.gemini\antigravity\skills\floorplan"
```

For a single project:
```bash
mkdir -p <project-root>/.agents/skills
cp -r skills/floorplan <project-root>/.agents/skills/floorplan
```

### Other environments (Mac and Linux)

For one project:
```bash
mkdir -p <project-root>/.skills
cp -r skills/floorplan <project-root>/.skills/floorplan
```

For all projects:
```bash
mkdir -p ~/.skills
cp -r skills/floorplan ~/.skills/floorplan
```

### Windows

In PowerShell:

For one project:
```powershell
New-Item -ItemType Directory -Force -Path "<project-root>\.skills"
Copy-Item -Recurse -Force skills\floorplan "<project-root>\.skills\floorplan"
```

For all projects:
```powershell
New-Item -ItemType Directory -Force -Path "$HOME\.skills"
Copy-Item -Recurse -Force skills\floorplan "$HOME\.skills\floorplan"
```

In Command Prompt:

For one project:
```cmd
mkdir "<project-root>\.skills"
xcopy /E /I /Y skills\floorplan "<project-root>\.skills\floorplan"
```

For all projects:
```cmd
mkdir "%USERPROFILE%\.skills"
xcopy /E /I /Y skills\floorplan "%USERPROFILE%\.skills\floorplan"
```

## Using the copy script

We also have a small Node script in `tools/copy-skill.mjs`. It has zero dependencies.

Run it with the target path:
```bash
node tools/copy-skill.mjs <target-path>
```
