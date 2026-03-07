# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NextFund Advisory corporate website built with Next.js 16, React 19, TypeScript, Tailwind CSS, and shadcn/ui components.

## Tech Stack

- **Next.js 16.1.1** - App Router with Turbopack enabled
- **React 19** - Latest stable version
- **TypeScript 5.7** - Strict mode enabled
- **Tailwind CSS 3.4** - Utility-first CSS with custom design tokens
- **shadcn/ui** - Component system using "new-york" style with Neutral base color
- **Lucide React** - Icon library

## Development Commands

```bash
# Development server with Turbopack (fast refresh)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint codebase
npm run lint
```

## Architecture

### App Router Structure
- Uses Next.js App Router (not Pages Router)
- Primary language: Italian (`lang="it"`)
- Root layout: `app/layout.tsx`
- Homepage: `app/page.tsx`

### shadcn/ui Configuration
Components are installed into the project (not imported from npm):
```bash
# Add new components
npx shadcn@latest add [component-name]
```

Configuration in `components.json`:
- Style: "new-york"
- RSC: enabled (React Server Components)
- Icon library: lucide-react
- Component path: `@/components/ui`
- Utils path: `@/lib/utils`

### Styling System
- CSS Variables defined in `app/globals.css` using HSL format
- Dark mode: class-based (`darkMode: ["class"]` in tailwind.config.ts)
- Theme tokens: background, foreground, card, popover, primary, secondary, muted, accent, destructive, border, input, ring, chart (1-5)
- Border radius: controlled via `--radius` variable (default: 0.5rem)
- Utility function `cn()` in `lib/utils.ts` combines clsx and tailwind-merge for className handling

### Import Aliases
All configured via TypeScript paths (`@/*` pattern):
- `@/components` - React components
- `@/components/ui` - shadcn/ui components
- `@/lib` - Utility functions
- `@/hooks` - React hooks

## Key Patterns

### Component Development
- Use Server Components by default (RSC enabled)
- Add `"use client"` directive only when needed (state, effects, event handlers)
- Import `cn()` utility for conditional className merging
- Use Lucide React for icons

### Styling
- Prefer Tailwind utility classes over custom CSS
- Use semantic color tokens (e.g., `bg-primary`, `text-foreground`) instead of hardcoded values
- Reference CSS variables via `hsl(var(--variable-name))` pattern in Tailwind config

### TypeScript
- Strict mode enabled
- Use type imports: `import type { TypeName } from "module"`
- All files use `.tsx` for components, `.ts` for utilities

## Development Workflow

### Project Planning (MANDATORY)
**CRITICAL**: Before implementing any new feature or functionality, you MUST follow this workflow:

1. **Check Current Date/Time**: Always verify the current date before creating any planning document
2. **Create Project Document**: Create a planning document in `/docs/YYYY-MM-DD-nome-funzione.md`
   - Document naming format: `YYYY-MM-DD-nome-funzione.md` (e.g., `2025-12-29-user-authentication.md`)
   - Location: `/docs/` directory
3. **Document Content**: The document must describe:
   - What will be implemented
   - How it will be implemented
   - Technical approach and architecture decisions
   - Files that will be modified or created
   - Dependencies and requirements
4. **Wait for Approval**: After creating the document, STOP and wait for explicit user confirmation before proceeding with implementation
5. **Implement After Approval**: Only after receiving approval, proceed with the actual implementation
6. **Update Project Document After Completion**: After completing the implementation, you MUST update the project document with:
   - "Implementazione Completata" section with completion date and status
   - List of all files created with descriptions
   - List of all files modified with changes made
   - Features implemented with technical details
   - Test results and verification status
   - Metrics (components created, lines of code, performance)
   - Technical notes and considerations
   - Possible future improvements

This ensures proper planning, alignment, and complete documentation of all development work.

## Configuration Files

- `next.config.ts` - Next.js configuration (currently minimal)
- `tailwind.config.ts` - Tailwind + shadcn/ui design tokens
- `components.json` - shadcn/ui component installation settings
- `tsconfig.json` - TypeScript with React JSX transform and Next.js plugin
- `postcss.config.mjs` - PostCSS with Tailwind + Autoprefixer
