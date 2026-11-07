# Skill installation

We copy the floorplan skill folder so it works as a normal skill. We do not need to clone the whole repository every time.

## Where the folder goes

We can install the skill for one project or for all projects.

For one project:
- `<project-root>/.skills/floorplan`
- `<project-root>/skills/floorplan`

For all projects:
- Mac and Linux: `~/.skills/floorplan`
- Windows: `%USERPROFILE%\.skills\floorplan`

## Copy commands

We copy the `skills/floorplan` folder to the target path.

### Mac and Linux

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
