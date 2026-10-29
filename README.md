# Understanding scores — a Luria feedback companion

A clinician-guided, 5–10 minute introduction for parents and patients, built with **actual Slipshow 0.13.0**. The source is `feedback.md`, not a replacement slideshow engine. Slipshow compiles its native slides, navigation, embedded CSS, SVG, and JavaScript to `feedback.html`.

## Open the finished deck

Double-click `feedback.html`, or from this folder in macOS fish:

```fish
open feedback.html
```

No install, server, account, or network connection is needed to present the compiled file. Keep the Markdown and assets for editing. The HTML can also be copied by itself.

- Right/left arrow: next/previous scene. Click the presentation first if the browser has focus elsewhere.
- Tab: focus controls. Use arrow keys on the score slider; Enter/Space on buttons.
- After interacting, click blank space outside the controls to return to presentation navigation.
- The 16th-percentile scene has a clickable comprehension check.
- Interactions retain their selected values when you revisit a scene. Reload to reset all teaching examples.
- Use a laptop or larger screen in landscape. This is a clinician-led presentation, not a phone application.

## Install an isolated compiler (macOS / fish)

The prebuilt HTML needs none of this. To edit and rebuild, use an existing working `slipshow` installation or install the official release into this project's `tools/` folder. No global compiler is overwritten. Homebrew is required for any missing native libraries.

```fish
brew install libffi openssl@3
set slip_arch (uname -m)
if test "$slip_arch" = arm64
    set slip_archive slipshow-macos-arm64.tar
else if test "$slip_arch" = x86_64
    set slip_archive slipshow-macos-x86_64.tar
else
    echo "Unsupported architecture: $slip_arch"
    exit 1
end
mkdir -p tools
curl -fL "https://github.com/panglesd/slipshow/releases/download/v0.13.0/$slip_archive" -o "tools/$slip_archive"
tar -xf "tools/$slip_archive" -C tools
chmod +x tools/bin/slipshow
tools/bin/slipshow --version
```

The release archive contains `bin/slipshow`. If macOS blocks a downloaded executable, use your normal macOS security approval process; see Slipshow's installation documentation. The review ZIP excludes this machine-specific executable and downloaded archives.

## Preview and build (fish)

Run from the extracted project directory:

```fish
# Live preview with automatic rebuilds; stop with Control-C.
tools/bin/slipshow serve feedback.md
# Open http://localhost:8080 in a browser.
```

In a second terminal:

```fish
open http://localhost:8080
```

Build a distributable file:

```fish
tools/bin/slipshow compile feedback.md -o feedback.html
open feedback.html
```

If using a global installation, replace `tools/bin/slipshow` with `slipshow`. Use 0.13.0 for reproducibility; recheck rendering after upgrading.

## Contents

- `feedback.md` — ten native Slipshow scenes; primary editable source.
- `feedback.html` — compiled, self-contained presentation.
- `assets/theme.css` — warm paper, blue distribution, serif headings, system-local fonts.
- `assets/interactive.js` — normal-curve explorer, keyboard handling, fictional domain drilldown.
- `assets/bell-curve.svg` — locally authored vector illustration.
- `CLINICIAN-GUIDE.md` — timed prompts and clinical interpretation boundaries.
- `SOURCES.md` — attachment provenance, content decisions, and primary references.
- `VALIDATION.md` — build and browser checks plus known limits.
- `review/` — selected screenshots for quick visual review.

## Editing and Luria handoff

Edit prose in `feedback.md`, colors/spacing in `assets/theme.css`, and synthetic teaching values in the `domains` object in `assets/interactive.js`. Rebuild after changes. Use Slipshow's documented `{slide}` and grouping syntax; Markdown `---` alone is not a slide separator here.

The final scene tells the clinician to switch to the correct case in Luria and open its domain score view. There is deliberately no guessed app route or automatic case access. The domain example demonstrates the broad-domain → related-skills → measures → daily-life conversation; it is not a live integration or a scoring engine.

## Privacy and interpretation

All demo scores and skill labels are fictional. No patient fields, forms, uploads, storage, analytics, remote fonts, APIs, or case identifiers are included. The supplied R Markdown was inspected but not executed: its local CSVs and patient-specific configuration are not copied into this project. Source attachments and existing code remain unchanged; no `.env` or repository branch was modified.

The bell curve is an ideal normal model. Reported percentile ranks come from the test's manual, not this educational calculator. The display rounds ranks; its endpoints are ±3 SD, not absolute population minima or maxima. The curve drawing truncates tails beyond ±3 SD. Standard-score conventions vary by test. The range table uses whole-number percentile labels from the supplied narrow plot and is not a classifier for fractional ranks or symptom scales.

No complete screen-reader presentation audit or Safari/mobile audit was performed. Controls have labels, keyboard operation, focus indicators, and live updates; core teaching content is available in the Markdown and clinician guide.
