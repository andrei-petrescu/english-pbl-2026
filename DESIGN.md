---
name: Student Well-being Guide
description: A calm, source-led editorial guide for ICHB students in Romania.
colors:
  paper: "#f4eedf"
  paper-light: "#fbf8ef"
  ink: "#243536"
  ink-soft: "#41534e"
  terracotta: "#a63f2e"
  gold: "#d4a84d"
  line: "#b8ad96"
  focus: "#253f38"
  disabled-surface: "#e7e0d1"
  disabled-text: "#53615b"
typography:
  display:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.75rem, 6vw, 5rem)"
    fontWeight: 560
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.65rem, 3vw, 2.1rem)"
    fontWeight: 560
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "1.35rem"
    fontWeight: 560
    lineHeight: 1.2
  body:
    fontFamily: "Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Segoe UI, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.085em"
    lineHeight: 1.4
rounded:
  none: "0"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-light}"
    rounded: "{rounded.none}"
    padding: "0.65rem 1rem"
    height: "2.9rem"
  button-primary-hover:
    backgroundColor: "{colors.terracotta}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.65rem 1rem"
    height: "2.9rem"
---

# Design System: Student Well-being Guide

## Overview

**Creative North Star: "A Quiet Place to Start"**

The guide should feel like a warm, reflective note from school: personal and steady, never clinical or alarmist. Its school-paper editorial character comes from a clear reading order, generous margins, a self-hosted serif for titles, and fine rules rather than dashboard panels or decorative cards.

The visual system is for an educational project, not an official ICHB publication or a substitute for qualified support. Page labels sit beneath their headings; source links and support routes remain explicit and easy to find.

**Key Characteristics:**
- Warm paper and deep green-black ink.
- Editorial hierarchy with a calm sans-serif reading voice.
- Thin rules, square corners, and restrained terracotta emphasis.
- Responsive navigation and a compact contents rail.

## Colors

Warm paper, green-black ink, terracotta marks, and muted gold details create a readable editorial page without relying on gradients or shadows.

### Primary
- **Terracotta Mark** (#a63f2e): Primary accent for links, page labels, active navigation rules, and urgent-help borders.

### Secondary
- **Muted Gold** (#d4a84d): Quiet secondary detail, including the top rule on margin notes.

### Neutral
- **Warm Paper** (#f4eedf): Main page ground.
- **Soft Paper** (#fbf8ef): Quiet inset surfaces such as privacy notes and urgent-help callouts.
- **Green-Black Ink** (#243536): Headings, primary text, and primary controls.
- **Soft Green Ink** (#41534e): Supporting text on the paper ground.
- **Rule Stone** (#b8ad96): Dividers and section rules.
- **Focus Green** (#253f38): Visible keyboard-focus outline.
- **Disabled Paper** (#e7e0d1): Disabled button ground.
- **Disabled Ink** (#53615b): Disabled button text.

**The Paper-First Rule.** Keep the warm page ground dominant; use terracotta for meaningful links and editorial marks, not large decorative fields.

## Typography

**Display Font:** Newsreader (with Georgia, Times New Roman, serif fallbacks; self-hosted regular and semibold files)  
**Body Font:** Segoe UI (with Helvetica Neue, Arial, sans-serif fallbacks)  
**Label Font:** The body sans-serif, set in tracked uppercase.

**Character:** Newsreader gives headings a literary, school-paper voice; the sans-serif keeps paragraphs, controls, and source notes practical and easy to scan.

### Hierarchy
- **Display** (560, `clamp(2.75rem, 6vw, 5rem)`, line-height 0.98, tracking -0.035em): Page h1; at 560px and below it becomes `clamp(2.4rem, 12vw, 3.8rem)`.
- **Headline** (560, `clamp(1.65rem, 3vw, 2.1rem)`, line-height 1.12): Section h2.
- **Title** (560, 1.35rem, line-height 1.2): List-item and smaller h3 titles.
- **Body** (400, 1rem, line-height 1.65): Main reading text, with paragraphs generally limited to 70ch.
- **Lead** (Newsreader, `clamp(1.2rem, 2vw, 1.5rem)`, line-height 1.48): Introductory copy.
- **Label** (700, 0.75rem, letter-spacing 0.085em, uppercase): Page labels, entry labels, and section markers.

**The Heading-First Rule.** Let each page's h1 lead. Place its small running label beneath it, never as an eyebrow above it.

## Layout

At wide widths, the page uses a reading column beside a 14rem contents rail, inside a centered container capped at 76rem. The main grid uses a fluid gap (`clamp(2.5rem, 7vw, 6.5rem)`); reading text stays near 68ch. The home page gives its reading column more room while keeping the rail narrow.

At 900px and below, the grid becomes one column and the contents rail moves above the article. Navigation wraps into a second row as needed. At 560px and below, the outer margins tighten to 1rem, content lists become single-column, form actions stack, and the footer becomes a grid. Preserve comfortable line lengths and avoid horizontal scrolling.

Use the existing spacing rhythm: compact gaps for labels and controls, larger section intervals, and the most generous space above major reading sections. Let borders and whitespace define groups instead of nested cards.

## Elevation & Depth

The system is structured and tactile through thin rules, paper-light insets, and clear spacing. It uses no box shadows. Callouts gain emphasis from their paper surface and terracotta top rule; margin notes use a muted-gold top rule.

**The Flat Surface Rule.** Convey depth with paper tone and editorial rules, never with decorative shadows or glass effects.

## Shapes

Use square corners (`border-radius: 0`) and fine, mostly 1px dividers. Buttons, list rows, and inputs remain rectangular and familiar. Use a stronger 2–3px top rule only for clear landmarks such as the contents rail and urgent-help callout.

## Components

### Buttons
- **Character:** Warm and tactile; paper-like surfaces with confident accent controls.
- **Shape:** Square corners (0 radius), 1px ink border, minimum height 2.9rem.
- **Primary:** Green-black ground and soft-paper text, with `0.65rem 1rem` padding.
- **Hover / Focus:** Primary hover changes to terracotta; keyboard focus uses a 3px focus-green outline with a 3px offset.
- **Quiet:** Transparent ground, ink text and border; hover gains a soft-paper ground.
- **Disabled:** Muted neutral ground and text; the control is visibly unavailable.

### Navigation
- Familiar text links in a wrapping horizontal row.
- Active page: 3px terracotta bottom rule; hover uses the same rule.
- On narrower screens, navigation wraps rather than becoming a hidden menu.

### Contents List
- Editorial rows separated by 1px stone rules.
- Large serif item title, smaller sans-serif note, and a terracotta “Read” cue on wide screens.
- On phones, the cue is removed and each row becomes a single-column link.

### Support Directory Entry
- Campus entries are separated by a 1px top rule and generous vertical padding.
- Keep school locations, official source links, and general contact cautions distinct and readable.

### Callouts
- Privacy notes use a soft-paper inset.
- Urgent-help callouts add a 3px terracotta top rule; margin notes use a 2px gold top rule.
- Keep each callout's heading, concise explanation, and action together.

### Survey Fields
- Use native checkboxes inside clearly labeled fieldsets.
- Keep a visible focus outline and clear disabled styling.
- Submission remains a local demonstration: clear the form and announce that nothing was sent or saved.

## Do's and Don'ts

### Do:
- **Do** keep the implemented palette values and locally hosted Newsreader face.
- **Do** place page labels below h1 and preserve the calm reading order.
- **Do** use semantic headings, visible keyboard focus, and source-attributed support links.
- **Do** keep the survey non-collecting unless a separately approved implementation replaces the prototype.

### Don't:
- **Don't** use shadows, gradients, rounded-card grids, or clinical dashboard patterns.
- **Don't** place tracked uppercase labels above page headings.
- **Don't** imply the school endorses this prototype or that general contact channels are private counselling.
- **Don't** ask for names, contact details, or free-text disclosures in the demonstration survey.
