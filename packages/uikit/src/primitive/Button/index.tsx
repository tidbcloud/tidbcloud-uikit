import { Button as MantineButton, ButtonProps as MantineButtonProps, Loader, useMantineTheme } from '@mantine/core'
import { forwardRef } from 'react'

type Button = typeof MantineButton

const _Button = forwardRef<HTMLButtonElement, MantineButtonProps>((props, ref) => {
  const theme = useMantineTheme()
  const { leftSection, loading, disabled, ...rest } = props
  const loader = <Loader size={16} color={`${props.color ?? theme.primaryColor}.6`} />

  return (
    <MantineButton {...rest} ref={ref} leftSection={loading ? loader : leftSection} disabled={disabled || loading} />
  )
})

export const Button = _Button as any as Button
Button.Group = MantineButton.Group
Button.classes = MantineButton.classes
Button.displayName = MantineButton.displayName
Button.extend = MantineButton.extend
Button.withProps = MantineButton.withProps
