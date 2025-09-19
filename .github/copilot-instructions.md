# Copilot Instructions for Campus Harvest Alert

## Project Overview
- **Type:** Next.js 15 app with TypeScript, Tailwind CSS, and Genkit AI integration
- **Purpose:** Daily farm-to-campus produce listings, with farmer info, image generation, and filtering
- **Key Directories:**
  - `src/app/`: Next.js app entry, layout, and main pages
  - `src/components/`: UI and feature components (card-based, modular, many in `ui/`)
  - `src/lib/`: Data models, placeholder images, and utility functions
  - `src/ai/`: Genkit AI integration (see `genkit.ts`)
  - `src/hooks/`: Custom React hooks (e.g., toast notifications)

## Architecture & Patterns
- **Data Flow:**
  - Static data in `src/lib/data.ts` (see `Farmer`, `Produce` types)
  - Components receive data via props (e.g., `ProduceListings`)
  - Image generation logic uses `placeholder-images.ts` and `.json` for missing images
- **Styling:**
  - Tailwind CSS with custom colors (see `docs/blueprint.md` for palette)
  - Card-based layouts, clean and responsive
  - Fonts set in `layout.tsx` (Roboto, Roboto_Flex)
- **UI Patterns:**
  - All UI primitives in `src/components/ui/` (accordion, dialog, toast, etc.)
  - Use `cn` utility from `lib/utils.ts` for className merging
  - Toasts: Use `use-toast.ts` and `Toaster` component for notifications
- **AI Integration:**
  - Genkit AI configured in `src/ai/genkit.ts` (Google Gemini model)
  - Extend AI features in this file or via new Genkit plugins

## Developer Workflows
- **Start Dev Server:** `npm run dev` (Next.js, port 9002)
- **Build:** `npm run build`
- **Typecheck:** `npm run typecheck`
- **Lint:** `npm run lint`
- **AI Dev:** `npm run genkit:dev` or `npm run genkit:watch`
- **Preview (Cloud IDE):** See `.idx/dev.nix` for web preview config

## Conventions & Tips
- Use `@/` alias for imports from `src/`
- All new UI elements should be added to `src/components/ui/` and exported
- Follow color/font guidelines in `docs/blueprint.md`
- Prefer functional React components and hooks
- For new data, update `src/lib/data.ts` and ensure types are correct
- For new AI features, extend `src/ai/genkit.ts` and update scripts if needed

## Integration Points
- **External APIs:** Genkit AI (Google Gemini)
- **Image Hosting:** Remote patterns set in `next.config.ts` (Unsplash, Placehold, Picsum)
- **Future:** Database integration (Supabase/Firebase) is planned but not present

---

For questions about project-specific patterns, see `README.md` and `docs/blueprint.md` for rationale and style guidance.
