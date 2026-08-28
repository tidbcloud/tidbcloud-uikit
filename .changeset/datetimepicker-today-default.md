---
'@tidbcloud/uikit': patch
---

feat(uikit): default DateTimePicker `today` to the organization timezone

`useDateTimePicker` now defaults `today` to the current day in the
organization timezone (derived from `utcOffset`) instead of requiring callers
to pass it. Callers only need to opt in via `highlightToday`; pass `today`
explicitly only to override the reference day.
