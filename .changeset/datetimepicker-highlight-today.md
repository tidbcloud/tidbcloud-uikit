---
'@tidbcloud/uikit': patch
---

refactor(uikit): replace `futureOnly` with an opt-in `highlightToday` on `DateTimePicker`

- Remove the `futureOnly` switch and its controlled-calendar-month logic so
  existing usages keep their previous selectable-range behavior (driven by
  `startDate`).
- Apply the disabled / out-of-current-month date colors by default (no flag
  needed), fixing their contrast in both light and dark themes.
- Add optional `today` and `highlightToday` props; both default to no-op so
  existing callers are unaffected.
