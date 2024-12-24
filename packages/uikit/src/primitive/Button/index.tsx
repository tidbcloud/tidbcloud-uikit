import { Button as MantineButton, ButtonProps as MantineButtonProps, Loader, useMantineTheme } from '@mantine/core'
import { forwardRef } from 'react'

type Button = typeof MantineButton

const _Button = forwardRef<HTMLButtonElement, MantineButtonProps & { 'data-loading'?: boolean }>((props, ref) => {
  const theme = useMantineTheme()
  const {
    leftSection,
    loading,
    disabled,
    loaderProps,
    ['data-disabled']: dataDisabled,
    ['data-loading']: dataLoading,
    ...rest
  } = props

  const loader = <Loader size={16} color={`${props.color ?? theme.primaryColor}.6`} {...loaderProps} />
  const isLoading = loading || dataLoading
  const isDisabled = disabled || dataDisabled || isLoading

  return <MantineButton {...rest} ref={ref} leftSection={isLoading ? loader : leftSection} disabled={isDisabled} />
})

export const Button = _Button as any as Button
Button.Group = MantineButton.Group
Button.classes = MantineButton.classes
Button.displayName = MantineButton.displayName
Button.extend = MantineButton.extend
Button.withProps = MantineButton.withProps
