import { TextInput as MantineTextInput, TextInputProps as MantineTextInputProps } from '@mantine/core'
import { forwardRef } from 'react'

import { mergeStylesList } from '../../utils/index.js'
import { Typography } from '../Typography/index.js'

export interface TextInputProps extends MantineTextInputProps {
  leftLabel?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { leftLabel, icon, ...rest } = props
  const prefixFontSizes = {
    xs: 12,
    sm: 13,
    md: 14,
    lg: 14,
    xl: 16
  }
  return (
    <MantineTextInput
      {...rest}
      styles={mergeStylesList([
        (theme) => {
          if (!props.leftLabel) {
            return {}
          }
          return {
            wrapper: {
              display: 'flex'
            },
            icon: {
              position: 'relative',
              width: 'fit-content',
              border: `1px solid ${theme.colors.carbon[4]}`,
              borderRightWidth: 0,
              paddingLeft: 12,
              paddingRight: 12,
              borderTopLeftRadius: theme.defaultRadius,
              borderBottomLeftRadius: theme.defaultRadius,
              backgroundColor: theme.colors.carbon[2],
              '& > .mantine-Text-root': {
                fontSize: theme.fn.size({ sizes: prefixFontSizes, size: props.size ?? 'md' })
              }
            },
            input: {
              flex: 1,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0
            },
            withIcon: {
              paddingLeft: 12
            },
            invalid: {
              paddingLeft: 12
            }
          }
        },
        props.styles
      ])}
      icon={!!leftLabel ? <Typography variant="label-lg">{leftLabel}</Typography> : icon}
      ref={ref}
    />
  )
})
