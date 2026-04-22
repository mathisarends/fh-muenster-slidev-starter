# Copilot Instructions

This repository contains academic presentations built with **Slidev** (`.md` files).

## Presentation files

Slides are written in Markdown with YAML frontmatter. Each file follows the structure:
`frontmatter → cover → chapter-intros + content slides → citations → closing`

Content slides always carry `title`, `subtitle`, and `chapter` in their frontmatter.

## Custom components

Raw markdown lists and inline styles are never used. All content goes through the
project's component library:

- **Lists** — `<BulletedList>`, `<NumberedList>` with `<li>` children; nest sub-points in `<ul>`
- **Typography** — `<Text title="">`, `<HighlightedText>`, `<SubText>`
- **Callouts** — `<DefinitionBox source="">`, `<ExampleBox>`, `<HighlightBox>`, `<Quotebox source="">`
- **Layout** — `<Columns>` for two-column splits
- **Data** — `<Table :headers :columnWidths :rows caption>`
- **References** — `<Footnote text="">` inline, `<CitationTable :citations>` on the sources slide

Code examples use native fenced blocks with language tag — no `<Code>` wrapper.

## Academic conventions

- Sources are cited inline via `<Footnote text="Vgl. [Key24, S. 12]" />` and collected in a `CitationTable` before the closing slide
- `presentationInfo` frontmatter includes `authors` (with `matrikelnummer`), `semester`, and a `chapters` array
- Diagrams via Mermaid or PlantUML; keep them vertical and compact