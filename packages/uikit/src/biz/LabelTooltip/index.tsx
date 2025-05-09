import { IconInfoCircle } from '../../icons/index.js'
import { Typography, Box, HoverCard, HoverCardProps } from '../../primitive/index.js'

export interface LabelTooltipProps extends HoverCardProps {
  label: React.ReactNode
}

export function LabelTooltip({ label, ...rest }: LabelTooltipProps) {
  return (
    <HoverCard shadow="md" withArrow withinPortal position="top" {...rest}>
      <HoverCard.Target>
        <Box sx={{ marginLeft: 8, verticalAlign: 'middle', position: 'relative', top: 1 }} component="span">
          <IconInfoCircle cursor="pointer" size={14} color="carbon.8" />
        </Box>
      </HoverCard.Target>
      <HoverCard.Dropdown maw={480}>
        <Typography variant="body-lg">{label}</Typography>
      </HoverCard.Dropdown>
    </HoverCard>
  )
}
