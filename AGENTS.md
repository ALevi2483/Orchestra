# Western Branch Orchestra website: Codex instructions

## Routine updates and publishing

- When the repository owner requests a routine website content update (concert details, calendar entries, announcements, or text corrections), treat that request as authorization to publish that specific update after validation. Do not require a second discretionary approval when the available tools and repository rules permit publishing.
- Start from the latest main branch, keep changes focused, and use a separate branch and pull request. Do not push directly to main, force-push, or bypass any required approvals or status checks.
- Review the entire diff. Verify event dates, times, venues and consistency across the homepage and calendar when applicable. Run relevant available tests and syntax checks; verify links and mobile layout where practical. If a check fails or a material issue cannot be verified, stop before merging and report it.
- If authenticated GitHub capabilities are available, create a pull request and, for routine updates only, merge it after successful validation and all required checks, or enable GitHub auto-merge when checks are pending and the repository supports it. Do not claim the pull request was merged until GitHub confirms it. If these capabilities are unavailable, provide the exact remaining manual step and pull request link where available.
- Major layout or functionality changes, deletions, payment or fundraising destination changes, domain or deployment changes, security or permission changes, and changes to automation or repository instructions require separate human review before merging.
- After merging, verify GitHub Pages deployment and the updated live site where access permits. Report what changed, what was tested, whether it merged, and whether publication was verified. Never claim a live update based solely on a commit or pull request.
