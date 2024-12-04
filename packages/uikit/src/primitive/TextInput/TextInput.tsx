import { getFontSize, TextInput as MantineTextInput, TextInputProps as MantineTextInputProps } from '@mantine/core'
import { forwardRef } from 'react'

import { mergeStylesList } from '../../utils/index.js'
import { Typography } from '../Typography/index.js'

export interface TextInputProps extends MantineTextInputProps {
  leftLabel?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { leftLabel, leftSection, ...rest } = props

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
              display: 'flex',
              // see https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/components/Input/Input.module.css#L70C4-L70C33I
              // correct input left padding
              '&[data-with-left-section]': {
                '--input-padding-inline-start': 'var(--input-padding)'
              }
            },
            section: {
              '&[data-position="left"]': {
                position: 'initial',
                width: 'fit-content',
                border: `1px solid ${theme.colors.carbon[4]}`,
                borderRightWidth: 0,
                paddingLeft: 12,
                paddingRight: 12,
                borderTopLeftRadius: theme.defaultRadius,
                borderBottomLeftRadius: theme.defaultRadius,
                backgroundColor: theme.colors.carbon[2],
                '& > .mantine-Text-root': {
                  fontSize: getFontSize(props.size ?? 'md')
                }
              }
            },
            input: {
              flex: 1,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0
            }
          }
        },
        props.styles
      ])}
      leftSection={!!leftLabel ? <Typography variant="label-lg">{leftLabel}</Typography> : leftSection}
      ref={ref}
    />
  )
})
