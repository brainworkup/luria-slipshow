# Verification record

Verified October 27, 2026 on macOS ARM64 with official Slipshow **v0.13.0** and headless Chromium at 1440 × 900.

- `slipshow compile feedback.md -o feedback.html`: exit 0.
- Native `slipshow serve` preview: started successfully; HTTP 200 at the local preview URL.
- Compiled HTML opened directly through `file://`: all ten scenes rendered and navigated in order.
- No JavaScript page errors, broken images, or HTTP/HTTPS requests during the offline walkthrough.
- Explorer at −1 SD: standard score 85, percentile 15.9; range-control right arrow changes distance to −0.9 SD without advancing the presentation.
- Center reset works. Memory and reasoning buttons display their corresponding fictional skills.
- Backward navigation from the domain scene returns to the clinical-meaning scene.
- Scene content fits the 900-pixel design height; expanded memory profile was checked separately and its initial overflow corrected.
- Screenshots reviewed for welcome, explorer, ranges, and domain scenes. The `review/` images show the final build.
- JavaScript syntax check passed; build command is valid fish syntax.

## Implementation detail worth preserving

Slipshow reserves the attribute name `step` for its own actions. Do not add an HTML `step` attribute to the range input: it creates an unintended presentation step. This project uses integer slider units −30…30, divided by ten in JavaScript, to provide 0.1-SD increments without that collision.

## Limits

The instructional narrative has primary-source support but has not undergone a separate clinical sign-off. There is no real-case Luria integration or test-norm lookup. Safari, mobile devices, and a full assistive-technology audit were not tested. Source attachments were inspected, not executed. The existing global Slipshow executable failed to run; verification used a fresh official release isolated inside this project's `tools/` folder. That executable is excluded from the ZIP.
