---
'@tidbcloud/uikit': patch
---

fix(uikit): use a single shade for DateTimePicker disabled and out-of-month dates

Change `data-disabled` and `data-outside` day colors to `carbon.5` and
`carbon.7` respectively in both light and dark themes, removing the
per-theme override so the values stay consistent across color schemes.
