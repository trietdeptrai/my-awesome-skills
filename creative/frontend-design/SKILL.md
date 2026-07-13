---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality and a minimal, restrained visual language. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates polished, purposeful code and UI design that avoids generic AI aesthetics and visual clutter.
license: Complete terms in LICENSE.txt
---

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics while favoring minimalism, restraint, and clarity. Implement real working code with exceptional attention to hierarchy, spacing, typography, interaction quality, and purposeful visual choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Design Thinking

Before coding, understand the context and commit to a minimal aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick a restrained minimal tone that fits the product: brutally minimal, luxury/refined, editorial-clean, quiet utilitarian, soft/pastel, industrial, organic/natural, or precise technical. Let the context shape the flavor, but keep the result calm, focused, and uncluttered.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What single detail makes this feel designed rather than generic: a strong layout rhythm, excellent type scale, precise spacing, one memorable interaction, or one restrained visual motif?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Refined minimalism is the default. Do not use maximalism, dense decoration, loud visual effects, or spectacle unless the user explicitly asks for it.

Then implement working code (HTML/CSS/JS, React, Vue, etc.) that is:
- Production-grade and functional
- Visually calm, sharp, and memorable through restraint
- Cohesive with a clear aesthetic point-of-view
- Meticulously refined in every detail

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**: Choose fonts that are beautiful, unique, and interesting, but never at the expense of the writing system the product actually uses. For Vietnamese or other diacritic-heavy interfaces, prefer crisp UI families with excellent glyph support and use weight, contrast, and spacing for polish. A distinctive display face is useful only when it remains legible in real UI states; strong product-app typography often comes from disciplined `500`/`600` headings, medium-weight controls, off-white dark-mode text, and role-specific tracking.
- **Color & Theme**: Commit to a cohesive, limited palette. Use CSS variables for consistency. Prefer neutral foundations, one or two meaningful accents, high-quality contrast, and subtle state colors over broad color variety.
- **Motion**: Use motion sparingly for orientation, continuity, and tactile feedback. Favor short, subtle transitions and one purposeful reveal over constant animation. Avoid surprise motion, decorative hover theatrics, and scroll effects that compete with the task.
- **Spatial Composition**: Use strong alignment, generous negative space, stable grids, clear grouping, and deliberate density. Asymmetry is welcome only when it simplifies reading or gives the interface a precise focal point. Always preserve clear, intentional space between distinct UI components so controls, panels, text blocks, and media never touch or visually merge, even in dense or overlapping layouts.
- **Backgrounds & Visual Details**: Create atmosphere through subtle depth, surface contrast, fine borders, controlled shadows, quiet texture, and carefully tuned transparency. Avoid decorative noise, busy patterns, heavy gradients, excessive glow, custom cursors, and effects that do not help the user understand or act.

NEVER use generic AI-generated aesthetics like cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, crowded card stacks, busy decorative backgrounds, and cookie-cutter design that lacks context-specific character. Use common UI font families only when they are the best fit for legibility and product tone; make the design distinctive through hierarchy, spacing, rhythm, and interaction polish rather than ornament.

Interpret creatively within minimalist constraints and make choices that feel genuinely designed for the context. No design should be the same, but variation should come from layout, type scale, information architecture, copy treatment, spacing, interaction model, and a small set of intentional visual signatures.

**IMPORTANT**: Match implementation complexity to the user's real need. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, responsiveness, accessibility, and subtle state design. Elegance comes from removing everything that does not serve the workflow.

## Product-App Design Lessons

For workflow tools, dashboards, local desktop apps, and expert/productivity surfaces, make the interface feel like a real working environment instead of a generic SaaS landing page:

- **Anchor the surface to the product's real distribution and workflow**: A downloadable desktop app, local workspace tool, browser extension, or admin dashboard should not borrow the same structure as a hosted marketing site. Let the shell, navigation, persistence model, and trust cues reflect how the product is actually used.
- **Make the first screen the job, not an explanation of the job**: Start with the primary workflow or decision. Avoid hero copy, feature tours, and descriptive helper text when the user needs to act.
- **Use one clear decision per screen**: For setup, review, and approval flows, prefer a focused one-question or one-artifact state over dense panels. Use progressive disclosure, concise labels, and expandable details for secondary information.
- **Write UI copy in the user's domain language**: Use plain outcome-oriented wording. Avoid exposing backend terms, provider names, JSON, implementation layers, or internal state labels unless the target user genuinely needs them.
- **Let the app draft, then let the user review**: For generative or assistant-led products, design around artifact creation, checkpoint/review, direct edit, guided revision, and explicit approval. Make the current source of truth obvious.
- **Keep supporting panels subordinate**: Activity feeds, timelines, checkpoints, and metadata should clarify progress without competing with the main task. Remove status pills, section labels, and right-rail cards that do not change the user's next action.
- **Reserve accent color for meaning**: In dark, glassy, or premium interfaces, use warm or bright accents sparingly for active navigation, current timeline steps, primary actions, or verified states. If everything glows, nothing reads as important.
- **Avoid card nesting and panel clutter**: Product-app layouts should feel organized, not boxed-in. Use stable shells, clear columns, full-width bands, or unframed groups before adding another card.
- **Separate different UI components with deliberate space**: Distinct components, controls, panels, and content groups should never feel glued together. Use consistent gaps, padding, margins, or layout tracks so each component has room to breathe while preserving the intended density.
- **Treat generated text as designed content, not raw output**: When an interface shows AI-generated copy, scripts, notes, summaries, or recommendations, never dump a long paragraph or preformatted block unless exact formatting is the product. Give the text a strong title, visible keywords or tags, bold section labels, short line lengths, intentional spacing, and clear hierarchy between metadata, main copy, captions, and actions. Remove internal source labels, provider language, prompt scaffolding, and phrases like "from the document" before text reaches the user-facing surface. Make the result easy to scan while editing, presenting, or recording from it.
- **Design the mobile state deliberately**: Even desktop-first tools need graceful narrow layouts. Convert multi-column shells to one-column flows, constrain panel widths, prevent horizontal scroll, and make buttons/icons/text align cleanly at small sizes.
- **Keep labels and icon rows mechanically aligned**: Icons should reinforce the action, sit on the same visual axis as the text, and remain centered or left-aligned consistently across paired choices.
- **Treat buttons as precision components**: Button labels and icons must be visually centered as a single unit. Scope surrounding text selectors so they cannot leak into button labels, reset inner label margins, give icons a fixed flex box, use an intentional label line-height, and test hover/disabled states for contrast. On warm or bright gradient buttons, keep foreground text/icon dark enough to stand out instead of inheriting pale app text.

## Verification Before Delivery

Before calling a frontend done, verify it in the running app, not only in code:

- Run the project's build/typecheck command when available.
- Inspect at least one desktop viewport and one mobile/narrow viewport.
- Check for horizontal overflow with `document.body.scrollWidth` and `document.documentElement.scrollWidth`.
- Confirm the first screen shows the intended primary workflow without clipped text, crowded helper copy, or competing secondary panels.
- Confirm active, completed, disabled, empty, and loading states use distinct visual treatment and do not resize the layout unexpectedly.
- If the task was visual polish, compare the rendered screenshot against the stated aesthetic direction and remove anything that reads as decorative noise rather than product signal.

Remember: extraordinary frontend work can be quiet. Favor the fewest elements that fully solve the problem, then polish those elements until the interface feels inevitable.
