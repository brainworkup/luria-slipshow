---
theme: assets/theme.css
js: assets/interactive.js
dimension: 1440x900
toplevel-attributes: slip enter="welcome ~duration:0"
---

{slide #welcome no-enter}
> <p class="eyebrow">Luria / A guide to understanding scores</p>
> <h1>A score is a starting point.<br>Let’s find the meaning.</h1>
> <p class="lede">A short conversation about comparisons, patterns,<br>and what helps in everyday life.</p>
> <img class="hero-curve" src="assets/bell-curve.svg" alt="Bell curve, with most scores near the middle and fewer toward each end">
> <p class="footer">5–10 minutes together · Teaching examples only · No patient data</p>

{slide #comparison enter="~duration:0.4"}
> <p class="eyebrow">01 / The comparison</p>
> <h2>Compared with whom?</h2>
> <p class="lede">A test score becomes useful when we compare it with a relevant reference group.</p>
> <div class="columns"><div class="panel"><h3>A fair starting point</h3><p>Often, people of a similar age. Some tests account for other background factors.</p></div><div class="panel"><h3>Your context still matters</h3><p>Language, learning opportunities, health, sleep, and the testing situation help us interpret the result.</p></div></div>
> <p class="takeaway">Your clinician will explain which comparison group was used.</p>
> <p class="question">“What were you hoping this evaluation would help explain?”</p>

{slide #curve enter="~duration:0.4"}
> <p class="eyebrow">02 / The bell curve</p>
> <h2>Many scores gather near the middle.</h2>
> <img class="hero-curve" src="assets/bell-curve.svg" alt="Symmetrical bell curve with fewer scores toward either end">
> <div class="columns"><div><h3>Height means frequency</h3><p>The taller middle represents more people. The lower ends represent fewer people.</p></div><div><h3>A model, not a rule for every test</h3><p>Many standardized scores use this shape. Some test results have a different distribution.</p></div></div>
> <p class="takeaway">“Normal distribution” names a mathematical shape. It does not label a person as normal or abnormal.</p>

{slide #explore enter="~duration:0.4"}
> <p class="eyebrow">03 / Explore together</p>
> <h2>Where does this score sit?</h2>
> <svg id="explorer-curve" class="curve" viewBox="0 0 1100 310" role="img" aria-label="Interactive normal distribution"></svg>
> <div class="controls"><label for="score-slider">Move the score</label><input id="score-slider" type="range" min="-30" max="30" value="0"><button data-z="-1">One step below</button><button data-z="0">Middle</button><button data-z="1">One step above</button></div>
> <div class="stats"><div class="stat">Distance in SD<output id="z-value">0</output></div><div class="stat">Standard score<output id="ss-value">100</output></div><div class="stat">T score<output id="t-value">50</output></div><div class="stat">Percentile rank ≈<output id="percentile-value">50</output></div></div>
> <p id="curve-caption" class="small" aria-live="polite"></p>
> <p class="small">Shading shows the share at or below the score. Ideal normal model; test-manual norms take priority. Click outside controls to resume arrow-key navigation.</p>

{slide #percentile enter="~duration:0.4"}
> <p class="eyebrow">04 / A rank, not a grade</p>
> <h2>The 16th percentile is not 16% correct.</h2>
> <div class="columns"><div><p class="big">16 of 100</p><p>Roughly 16 out of 100 people in the reference group scored at or below this level.</p></div><div class="panel"><h3>Different questions</h3><p><strong>Percent correct:</strong> How many items did I answer correctly?</p><p><strong>Percentile rank:</strong> Where does my performance sit in the comparison group?</p></div></div>
> <p class="takeaway">Percentiles are not equal steps: moving from 50 to 60 is a different score distance than moving from 90 to 100.</p>
> <details><summary>Quick check: Does the 50th percentile mean half the answers were wrong?</summary><p>No. It means the score is near the middle of the reference group.</p></details>

{slide #rulers enter="~duration:0.4"}
> <p class="eyebrow">05 / Different rulers, same location</p>
> <h2>Standard deviation is a unit of spread.</h2>
> <p>One standard deviation (SD) is one step away from the mean, or center.</p>
> <table><thead><tr><th>Common score ruler</th><th>One SD below</th><th>Middle</th><th>One SD above</th></tr></thead><tbody><tr><td>Standard score · SD 15</td><td>85</td><td>100</td><td>115</td></tr><tr><td>T score · SD 10</td><td>40</td><td>50</td><td>60</td></tr><tr><td>Scaled score · SD 3</td><td>7</td><td>10</td><td>13</td></tr><tr><td>Percentile · approximately</td><td>16th</td><td>50th</td><td>84th</td></tr></tbody></table>
> <p class="takeaway">In a normal distribution, about 68% of scores fall within ±1 SD; about 95% fall within ±2 SD.</p>
> <p class="small">These are common conventions, not rules for every test. A percentile is a rank, not an equal-interval score ruler.</p>

{slide #ranges enter="~duration:0.4"}
> <p class="eyebrow">06 / Reading the report</p>
> <h2>Range names are signposts.</h2>
> <p>A report may use these words to describe where a performance score falls.</p>
> <div class="bands"><div class="band"><b>≤1</b>Exceptionally low</div><div class="band"><b>2–8</b>Below average</div><div class="band"><b>9–24</b>Low average</div><div class="band"><b>25–74</b>Average</div><div class="band"><b>75–90</b>High average</div><div class="band"><b>91–97</b>Above average</div><div class="band"><b>≥98</b>Exceptionally high</div></div>
> <p class="small">Whole-number percentile bands for performance tests. Labels and cutoffs can differ across tests and reports.</p>
> <p class="takeaway">A boundary is not a cliff. Scores are estimates; measurement uncertainty matters near a cutoff.</p>
> <p>“Average” describes a comparison. It does not tell us everything about someone’s needs or strengths.</p>

{slide #meaning enter="~duration:0.4"}
> <p class="eyebrow">07 / From numbers to meaning</p>
> <h2>Uncommon does not automatically<br>mean impaired.</h2>
> <div class="columns"><div class="panel"><h3>Statistical rarity</h3><p>How unusual is this score in the reference group?</p><p>One low result can occur in healthy people, especially when many scores are collected.</p></div><div class="panel"><h3>Functional difficulty</h3><p>What is hard in school, work, home life, or relationships?</p><p>We connect the pattern with history, observations, validity, and everyday experience.</p></div></div>
> <p class="takeaway">A low score alone does not establish a diagnosis. An average score alone does not rule out meaningful difficulty.</p>
> <p class="small">On some symptom rating scales, a higher score means more concerns. Check the direction and meaning of each scale.</p>

{slide #domains enter="~duration:0.4"}
> <p class="eyebrow">08 / From the whole picture to the details</p>
> <h2>Look for a pattern across skills.</h2>
> <p class="small">Synthetic teaching profile · Select a domain · Bars show percentile ranks, not amount of ability</p>
> <div class="domain-nav"><button data-domain="attention" aria-pressed="true">Attention</button><button data-domain="memory" aria-pressed="false">Learning & memory</button><button data-domain="reasoning" aria-pressed="false">Reasoning</button></div>
> <div id="domain-detail" class="domain-detail" aria-live="polite"></div>
> <p class="takeaway">Broad domain → related skills → individual measures → everyday context.</p>
> <p class="small">Fictional labels and values; no commercial test items or diagnostic conclusions. Apparent differences need clinical interpretation.</p>

{slide #handoff enter="~duration:0.4"}
> <p class="eyebrow">09 / Your feedback conversation</p>
> <h2>Now, let’s connect the dots.</h2>
> <div class="columns"><div><h3>In Luria, we’ll ask…</h3><p>What seems easier?</p><p>What takes more effort?</p><p>Which supports fit daily life?</p></div><div class="panel"><h3>Your perspective belongs here.</h3><p>“Does this pattern match what you notice?”</p><p>“What would make the biggest difference this week?”</p></div></div>
> <p class="takeaway">Clinician handoff: switch to the appropriate case in Luria and open the domain score view.</p>
> <p class="small">This teaching deck has no patient connection. Confirm the correct case and screen-sharing privacy before showing a real report.</p>
> <p class="footer">A score helps us ask better questions. The goal is useful understanding and support.</p>
