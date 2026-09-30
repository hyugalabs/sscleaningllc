---
name: SS Cleaning LLC
description: A carbon-copy contractor work-order book on a navy desk, where the quote request is the numbered order itself.
colors:
  desk: "#102746"
  desk-deep: "#0a1b33"
  mist: "#b9c8de"
  paper: "#f4f6f8"
  paper-shade: "#e6eaef"
  canary: "#f6e37c"
  pink: "#f3c3cf"
  ink: "#16305a"
  ink-soft: "#4a5d7c"
  pen: "#1f45c4"
  serial: "#bf3228"
  rule: "#a9b7cb"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.9rem, 4.9vw, 4.4rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 72"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4.2rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "normal"
    fontVariation: "'wdth' 72"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "normal"
    fontVariation: "'wdth' 72"
  numeral:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.2rem, 11vw, 8.5rem)"
    fontWeight: 900
    lineHeight: 0.85
    letterSpacing: "-0.01em"
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 72"
  serial:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.06em"
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 86"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  button:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 86"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.12em"
    fontVariation: "'wdth' 86"
  pen:
    fontFamily: "Nanum Pen Script, Segoe Print, cursive"
    fontSize: "1.6rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  none: "0px"
spacing:
  gutter: "16px"
  gutter-sm: "24px"
  sheet-x: "20px"
  sheet-x-sm: "28px"
  ruled-line: "36px"
  section: "80px"
  section-lg: "112px"
  container: "78rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.desk-deep}"
    textColor: "{colors.paper}"
  button-primary-active:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-call:
    backgroundColor: "{colors.canary}"
    textColor: "{colors.desk}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "56px"
  button-call-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.desk}"
  button-call-active:
    backgroundColor: "{colors.desk}"
    textColor: "{colors.canary}"
  button-add-to-order:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-add-to-order-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  header-call:
    backgroundColor: "transparent"
    textColor: "{colors.canary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "40px"
  header-call-hover:
    backgroundColor: "{colors.canary}"
    textColor: "{colors.desk}"
  field-entry:
    backgroundColor: "transparent"
    textColor: "{colors.pen}"
    typography: "{typography.pen}"
    rounded: "{rounded.none}"
    height: "2.6rem"
  field-label:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
  work-order-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 28px"
  carbon-copy-canary:
    backgroundColor: "{colors.canary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px 24px 24px"
  carbon-copy-pink:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px 24px 24px"
  mobile-bar-call:
    backgroundColor: "{colors.canary}"
    textColor: "{colors.desk}"
    typography: "{typography.button}"
    height: "56px"
  mobile-bar-quote:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    height: "56px"
---

# Design System: SS Cleaning LLC

## Overview

**Creative North Star: "The Carbon-Copy Order Book"**

The site is SS Cleaning's contractor work-order pad, lying on a navy desk. A cool bond-white top sheet carries navy pre-printed lettering in condensed caps; canary and pink carbon copies sit offset underneath it; the customer's entries appear in blue ballpoint; one red numbering-machine serial stamps each order. Every surface on the page is either the desk (navy) or a piece of order-book stock (paper, canary, pink), and every piece of text is either pre-printed (Archivo, pulled narrow) or handwritten (Nanum Pen Script, in pen blue).

Density is that of a real form: tight ruled fields, hairline rules, heavy 2px and 4px ink rules dividing sections, perforation rows with punched holes where a sheet would tear. Depth is physical, not decorative: sheets cast a paper shadow onto the desk and fan out slightly, and nothing floats for its own sake. The form language is square: no rounded containers, no gloss, no gradients. The only curves are made by a hand (pen checks, a circled choice) or a punch (perforation holes).

Motion is the same physics: checks draw in with a pen stroke, a chosen frequency gets circled, and on send the top sheet tears along its perforation and falls away to reveal the canary customer copy.

**Key Characteristics:**
- Navy desk, three paper stocks (bond white, canary, pink), three inks (navy print, blue ballpoint, red serial).
- Condensed caps for everything printed; handwriting only for what a person would write.
- Square corners everywhere; rules and borders, never pills or cards with radii.
- Paper-on-desk shadow as the only elevation.
- Pen-stroke motion on an expo-out ease; the tear-off as the signature moment.

## Colors

A two-register palette: cool navy for the desk and printing, paper stocks for surfaces, and three inks with strict jobs.

### Primary
- **Order-Book Navy Ink** (`ink`): the pre-printed ink. Headlines, labels' parent text, 2px/4px section rules, checkbox frames, primary button fill, mobile "Get a quote" bar.
- **Ballpoint Blue** (`pen`): anything the customer or Shellie "writes": field entries, drawn checks, circled choices, the date, "Good for" annotations, "home base", inline text links, the focus ring on paper.

### Secondary
- **Carbon Canary** (`canary`): the office copy. The call-to-action fill (hero call button, header call outline, mobile Call bar), the revealed customer copy, the closing section ground, the second sheet under the work order, text selection.
- **Carbon Pink** (`pink`): the job-file copy. Used only as the third sheet (under the work order, and in the three-copies explainer). Never a fill for controls or text.

### Tertiary
- **Numbering-Machine Red** (`serial`): the order serial (No. 0504) and validation errors (message text and invalid field underline). Nothing else.

### Neutral
- **Desk Navy** (`desk`): the page's desk: header, hero, three-copies section, html background and theme color.
- **Desk Shadow** (`desk-deep`): footer ground and the hover state of ink-filled buttons.
- **Carbon Mist** (`mist`): secondary text on the desk; the credential checkbox frame on navy.
- **Bond White** (`paper`): the top sheet and the default body ground.
- **Stub Grey** (`paper-shade`): the form stub, the action strip beneath the form (at 60%), the service-area section ground, image placeholder.
- **Faded Print** (`ink-soft`): field labels, captions, supporting paragraphs on paper.
- **Ruled Line** (`rule`): hairline field underlines, ruled description lines, list dividers, the dashed ovals of pre-printed choices.

### Named Rules
**The Three Inks Rule.** Navy prints, blue writes, red numbers. Blue never appears on pre-printed lettering, navy never appears as a handwritten entry, and red is reserved for the serial and errors.

**The Carbon Order Rule.** Stocks stack in fixed order: bond white on top, canary second, pink third. Canary may act as a call-to-action fill; pink never does.

## Typography

**Display Font:** Archivo variable (with ui-sans-serif, system-ui), using the `wdth` axis
**Handwriting Font:** Nanum Pen Script (with Segoe Print, cursive)

**Character:** Archivo pulled narrow reads as the pre-printed lettering on a trade form: condensed caps at 72 width for headings, semi-condensed at 86 for labels, buttons, and the serial. Nanum Pen Script is the customer's ballpoint, always in pen blue, always at a size where it reads as handwriting rather than decoration.

### Hierarchy
- **Display** (800, clamp(2.9rem, 4.9vw, 4.4rem), 0.9, uppercase, width 72): the hero headline only.
- **Headline** (800, clamp(2.4rem, 5vw, 4.2rem), 0.92, uppercase, width 72): section titles, written as form headings ("Description of work", "Job location: Northeast Ohio").
- **Title** (800, clamp(1.8rem, 3.2vw, 2.6rem), 1.0, uppercase, width 72): service line items; 1.9rem on copy sheets, 1.35rem for the form's printed business name.
- **Numeral** (900, clamp(3.2rem, 11vw, 8.5rem), 0.85, tabular, width 72): the phone number as the closing statement.
- **Serial** (600, 1.75rem, 0.06em, tabular, width 86, red): the order number.
- **Body** (400, 1.05rem to 1.1rem, 1.625): paragraphs, capped at 34 to 36rem for intros and 58 to 60ch for detail copy.
- **Button** (700, 0.95rem, 0.06em, uppercase, width 86): every button and call bar; hero call steps up to 1.1rem.
- **Label** (600, 0.7rem to 0.72rem, 0.12em, uppercase, width 86, faded print): field labels, stub text, copy designations, "Sample photo" captions.
- **Pen** (400, 1.45rem to 2rem, handwriting): field entries (1.6rem), ruled notes (1.5rem on 2.25rem lines), annotations, the "Thanks" line on the customer copy (2rem).

### Named Rules
**The Printed vs. Written Rule.** If the form's printer would have set it, it is Archivo in navy caps. If a person would have filled it in, it is Nanum Pen Script in blue. No third voice.

**The Width Axis Rule.** Condensing comes from the `wdth` axis (72 or 86), not from a separate condensed family or negative tracking.

## Layout

A 12-column grid inside a 78rem container with 16px gutters on phones and 24px from `sm`. Sections breathe at 80px vertical (112px at `lg`; 96px for the service-area band). Section intros split 7/5 (heading left, paragraph right, bottom-aligned); the hero splits 5/7 with the work order on the right. Service line items run as an ordered list divided by 2px ink rules, photo 4/12 and text 8/12 at `lg`.

On phones everything stacks: headline, call button, then the work order full-width, and a fixed two-cell bottom bar (Call Shellie / Get a quote, 56px) replaces the header nav. The footer pads 96px at the bottom to clear the bar. Scroll padding is 5rem so anchors land below the sticky 64px header.

Inside the sheet, fields sit on a 2-column (phone) / 6-column (`sm`) grid with 20px / 28px side padding. The description box uses a 2.25rem ruled-line rhythm.

## Elevation & Depth

Depth is paper lying on a desk. One shadow exists, the sheet shadow, applied to the work order, its carbon copies, the three-copies sheets, and the service-area sheet. Offset copies (10px/12px and 20px/24px with 1.6 and 3.2 degree turns) and slight rotations (under 1.2 degrees) on the explainer sheets supply the rest. Nothing on the page is lifted by hover.

### Shadow Vocabulary
- **Sheet on desk** (`box-shadow: 0 1px 1px rgb(6 18 38 / 0.25), 0 18px 40px -12px rgb(6 18 38 / 0.55)`): every paper sheet, and only paper sheets.

### Named Rules
**The Paper Only Rule.** Only a sheet of order-book stock casts a shadow. Buttons, fields, chips, and the header are flat.

## Shapes

Every corner is square (0px). Structure comes from rules: hairline 1px underlines for fields and list rows, 2px ink rules between form sections and around buttons and checkboxes, 4px ink rules under or above section headings. The perforation row (6px tall, 2.2px holes every 11px, colored to whatever sits behind the sheet) marks every tear line between a stub and a sheet. Curves are only hand-made or punched: the ballpoint check that overshoots its box, the pen oval drawn around a chosen frequency, the dashed pre-printed oval that marks each choice, and the perforation holes.

## Components

### Buttons
Printed, square, heavy-bordered; they feel stamped on the form.
- **Shape:** square corners (0px) with a 2px ink border.
- **Primary** (ink fill, paper text, 48px tall, 20px sides): "Text it to Shellie", "Call" on the customer copy, "Write up a work order" (canary text variant on the canary section).
- **Secondary** (transparent, ink text and border): "Email it instead", "Write another order". Hover fills with paper.
- **Call** (canary fill, desk text, 56px tall, 24px sides, 1.1rem): the hero phone button; hover goes paper, active inverts to desk with canary text.
- **Header call** (canary 2px outline, canary text, 40px): fills canary on hover.
- **Add to work order** (ink outline, 44px, plus icon): fills ink on hover; clicking checks the matching service on the work order and scrolls to it.
- **Hover / Focus:** 150ms color transitions only. Focus is a 2px pen-blue outline at 3px offset on paper, canary on the desk.
- **Icons:** Lucide line icons at 16 to 20px, stroke 2.25 to 2.5, always beside a text label.

### Inputs / Fields
- **Style:** no box. A transparent line with a 1px rule underline, a printed label above, and the entry in pen blue handwriting at 1.6rem.
- **Focus:** the underline turns pen blue and thickens to 2px; hover darkens it to faded print.
- **Error:** underline turns serial red and a 0.8rem red message sits beneath in plain Archivo.
- **Description box:** a ruled textarea whose lines scroll with the text.

### Checkboxes and choices
- **Checkbox:** a 1.35rem square with a 2px ink frame; when checked, a pen-blue check draws in (320ms) and overshoots the box top-right.
- **Circle one:** each frequency sits in a dashed rule-colored oval; the chosen one gets a pen loop drawn around it (520ms).

### Navigation
- **Header:** sticky 64px desk band. Monogram plus condensed "SS Cleaning LLC" left; three section links in mist at 0.9rem medium (hover to paper) from `md`; header call button right.
- **Mobile:** section links hide; the fixed bottom bar carries Call (canary) and Get a quote (ink).

### Work Order Sheet (signature)
The quote form as a numbered order: grey stub strip with printed labels, perforation, printed header (monogram, business name, services and phone in faded print, red serial right), ruled fields, type-of-work checkboxes, circle-one frequency, ruled description, and a stub-grey action strip. Canary and pink copies fan out underneath on arrival (1100ms). On send the sheet tears off (900ms: a small lift, then a rotating fall) and the canary customer copy rises in its place with the entries repeated in pen.

### Carbon Copy Sheet
A paper, canary, or pink sheet with perforation top, a condensed title, body text, and a printed copy designation footer ("Canary: office"). Used for sequences of steps and for listing places.

### Monogram
"SS" in Archivo black at width 72 under a mitred roofline with a chimney and four-pane window, drawn from the business card. Navy on paper, paper on the desk.

## Do's and Don'ts

### Do:
- **Do** build new surfaces as pieces of order-book stock (bond white, canary, pink) on the navy desk.
- **Do** set every heading in Archivo 800 uppercase at `wdth` 72, and every label, button, and serial at `wdth` 86.
- **Do** use Nanum Pen Script in pen blue for anything a person would write, at 1.45rem or larger.
- **Do** divide content with ink rules (1px, 2px, 4px) and perforation rows instead of boxes and cards.
- **Do** keep the one sheet shadow for paper, and express sequence or layering by offsetting stock.
- **Do** animate with pen strokes and paper physics on `cubic-bezier(0.16, 1, 0.3, 1)`, with a reduced-motion fallback that shows the end state.

### Don't:
- **Don't** round containers, buttons, fields, or images; the only curves are pen strokes and punched holes.
- **Don't** use gradients, gloss, or glows on any surface.
- **Don't** put blue on printed lettering, navy on handwriting, or red on anything but the serial and errors.
- **Don't** use pink as a button or text color; it is the bottom copy only.
- **Don't** add shadows to buttons, fields, or the header, or lift elements on hover.
