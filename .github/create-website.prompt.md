# Create Website Prompt

Purpose
- Generate a complete website codebase for the OWASP Student Chapter. The prompt should support two modes: `advanced` (feature-rich, modern UI with 3D visuals, animations, and full content) and `minimal` (lightweight, accessible static site with the same content).

Inputs
- `mode`: `advanced` or `minimal` (default: `advanced`)
- `content`: Markdown or structured JSON containing sections (Introduction, What We Do, Events, Resources, CTF Writeups)
- `styles`: Optional theme hints (e.g., `cyber`, `professional`, `minimal`) — defaults to `cyber` for advanced and `minimal` for minimal mode
- `framework`: Optional; default `nextjs` (if other frameworks requested, respond asking for clarification)
- `output_path`: path to write files in the repository (default: `src/website-{mode}`)

Constraints & Conventions
- Use TypeScript + React + Tailwind by default
- For `advanced` mode: include React Three Fiber Canvas for hero 3D scene, Framer Motion for animations, and a documented component pattern (sections, ui, layout)
- For `minimal` mode: produce accessible semantic HTML, minimal JS, and a focus on performance (optimized images, no heavy 3D libs)
- Create `README.md` with run instructions and a short tech summary
- Keep generated code modular and easy to integrate into existing Next.js app
- Respect `@/` import alias when placing files under `src/`

Output Format
- Provide a file tree and list of changed/created files
- For code generation tasks, write the files directly into the repository under `output_path`
- Include a sample `package.json` changes if additional dependencies are required

Examples
- `mode=advanced, content=...` → generates `src/website-advanced/` with interactive hero, 3D scene, sections, and animations
- `mode=minimal, content=...` → generates `src/website-minimal/` with static pages and minimal JS

Follow-ups
- Ask clarifying questions if `framework` is not `nextjs` or `content` is missing
- Offer an option to scaffold only components or a full runnable site

Quality Checks
- Run TypeScript type checks on generated files if possible
- Ensure `npm run dev` works by providing exact commands to the user

Notes
- This prompt is workspace-scoped and intended as a reusable automation prompt for generating website variants
