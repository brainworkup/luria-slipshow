# Sources and provenance

Reviewed October 27, 2026.

## User-provided material

Recovered the three attachments through the referenced “Create Slipshow Slideshow” chat because `/mnt/data` does not exist on this Mac. Inspected the actual R Markdown text and both actual PNG images in their recovered attachment locations.

- `skeleton.Rmd`: used its sequence of population-level explanation followed by broad-to-narrow neurocognitive drilldown. It also includes behavioral ratings, validity, and a PASS section; those are acknowledged as separate interpretive paths rather than executed. Its R dependencies, local CSV reads, identity metadata, and institutional branding are not reused.
- `plot_narrow.png`: used the blue distribution framing and seven percentile bands (≤1, 2–8, 9–24, 25–74, 75–90, 91–97, ≥98).
- `plot_broad.png`: used its broad-to-detailed explanatory intent. Replaced its “abnormal/impaired” inference with an explicit distinction between statistical rarity and functional impairment.

The source files were not edited or copied into the distributable. The new SVG is an original mathematical rendering, not a modified source PNG.

## Clinical references

- [Guilmette et al. (2020), AACN consensus on uniform labeling of performance test scores](https://doi.org/10.1080/13854046.2020.1722244). Supports descriptive score labels and communicating interpretive context; the deck's bands preserve the supplied plot. See also the [AACN publication page](https://theaacn.org/downloads/aacn-consensus-conference-statement-on-uniform-labeling-of-performance-test-scores/).
- [The association between the number of neuropsychological measures and the base rate of low scores](https://pmc.ncbi.nlm.nih.gov/articles/PMC6992492/). Supports the general caution that healthy people can have low scores and that the number and dependence of measures affect interpretation. No study-specific percentage is generalized to this deck's audience.
- [Using Multivariate Base Rates of Low Scores to Understand Early Cognitive Declines on the Uniform Data Set 3.0 Neuropsychological Battery](https://pmc.ncbi.nlm.nih.gov/articles/PMC7484046/). Further context for interpreting a pattern rather than an isolated low value; adult/older-adult evidence is not a pediatric norm.

## Mathematical model

For z = (score − mean) / SD, the explorer uses the standard normal cumulative distribution function. The implemented polynomial approximation has maximum absolute probability error about 7.5 × 10⁻⁸; shown percentiles are rounded to one decimal. The familiar ±1 and ±2 SD areas are rounded to 68% and 95%. Test norms may be discrete, skewed, or otherwise different from this model.

## Actual Slipshow documentation

- [Project](https://slipshow.org/) and [source / releases](https://github.com/panglesd/slipshow)
- [Installation](https://docs.slipshow.org/en/stable/quick-start.html)
- [Tutorial](https://docs.slipshow.org/en/stable/tutorial.html)
- [CLI](https://docs.slipshow.org/en/stable/cli.html)
- [Frontmatter](https://docs.slipshow.org/en/stable/frontmatter.html)
- [Native slips, slides, and HTML](https://docs.slipshow.org/en/stable/special-elements.html)
- [Themes](https://docs.slipshow.org/en/stable/themes.html)
- [Custom scripts](https://docs.slipshow.org/en/stable/custom-scripts-ref.html)

Compiled with the official v0.13.0 macOS ARM64 release. The compiled HTML contains upstream Slipshow runtime code; upstream licensing and notices apply. See [Slipshow LICENSE.md](https://github.com/panglesd/slipshow/blob/v0.13.0/LICENSE.md). No ownership claim is made over that runtime or the source attachments.
