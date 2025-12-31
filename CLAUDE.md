# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install    # Install dependencies
npm run dev    # Start dev server (Vite)
npm run build  # Production build
npm run preview # Preview production build
```

## Architecture

Personal portfolio site built with React 19 + Vite + TypeScript.

**Key files:**
- `App.tsx` - Main page with all sections (Hero, Tech Stack, Projects, Experience, Contact)
- `constants.tsx` - Data for projects, experiences, and tech stack
- `types.ts` - TypeScript interfaces (Project, Experience, TechItem)
- `components/` - Reusable components (Header, ProjectCard, ExperienceTimeline)

**Stack:**
- React 19 with TypeScript
- Vite for bundling
- Framer Motion for animations
- Lucide React for icons
- Tailwind CSS (via CDN/inline classes)
