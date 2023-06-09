import { Box, Tooltip } from '@mantine/core'
import { Icon } from '@tidb-cloud-uikit/icons'

export function LabelTooltip({ label }: { label: string | JSX.Element }) {
  return (
    <Tooltip
      label={label}
      withinPortal
      multiline
      sx={{ maxWidth: 480 }}
      styles={(theme) => ({
        tooltip: {
          backgroundColor: theme.other.white,
          color: theme.colors.gray[7],
          border: `1px solid ${theme.colors.gray[3]}`
        }
      })}
    >
      <Box sx={{ marginLeft: 8, verticalAlign: 'middle', position: 'relative', top: 1 }} component="span">
        <Icon cursor="pointer" name="InfoCircle" size={14} color="gray.7" />
      </Box>
    </Tooltip>
  )
}
