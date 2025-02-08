import { Box, BoxProps } from '@mantine/core'
import NumberFlow, { NumberFlowProps, NumberFlowGroup } from '@number-flow/react'

export type AnimatedNumberProps = BoxProps & NumberFlowProps

/**
 * Animated number component, see https://number-flow.barvian.me/ for more examples.
 */
export function AnimatedNumber({ value, ...props }: AnimatedNumberProps) {
  return <Box component={NumberFlow} value={value} {...props} />
}

function AnimatedNumberGroup({ children, ...props }: BoxProps & { children: React.ReactNode }) {
  return (
    <Box component={NumberFlowGroup} {...props}>
      {children}
    </Box>
  )
}

/**
 * If an `AnimatedNumber` affects another `AnimatedNumber’s` position, you can wrap them in an `AnimatedNumber.Group` to properly sync their transitions
 */
AnimatedNumber.Group = AnimatedNumberGroup
