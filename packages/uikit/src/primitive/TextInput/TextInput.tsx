import { getFontSize, TextInput as MantineTextInput, TextInputProps as MantineTextInputProps } from '@mantine/core'
import { forwardRef } from 'react'

import { mergeStylesList } from '../../utils/index.js'
import { Typography, TypographyProps } from '../Typography/index.js'

export interface TextInputProps extends MantineTextInputProps {
  leftLabel?: React.ReactNode
  leftLabelProps?: TypographyProps
  rightLabel?: React.ReactNode
  rightLabelProps?: TypographyProps
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { leftLabel, leftLabelProps, leftSection, rightLabel, rightLabelProps, rightSection, ...rest } = props

  return (
    <MantineTextInput
      {...rest}
      styles={mergeStylesList([
        (theme) => {
          const withLeftLabel = !!props.leftLabel
          const withRightLabel = !!props.rightLabel

          if (!withLeftLabel && !withRightLabel) {
            return {}
          }

          const sectionBaseStyles: TextInputProps['style'] = {
            position: 'initial',
            width: 'fit-content',
            border: `1px solid ${theme.colors.carbon[4]}`,
            backgroundColor: theme.colors.carbon[2],
            paddingLeft: 12,
            paddingRight: 12,
            '& > .mantine-Text-root': {
              fontSize: getFontSize(props.size ?? 'md')
            }
          }

          const wrapperBaseStyles: TextInputProps['style'] = {
            '--input-padding-inline-start': 'var(--input-padding)'
          }

          return {
            wrapper: {
              display: 'flex',
              // see https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/components/Input/Input.module.css#L70C4-L70C33I
              // correct input left padding

              '&[data-with-left-section]': withLeftLabel ? wrapperBaseStyles : undefined,
              '&[data-with-right-section]': withRightLabel ? wrapperBaseStyles : undefined
            },
            section: {
              '&[data-position="left"]': withLeftLabel
                ? {
                    ...sectionBaseStyles,
                    borderRightWidth: 0,
                    borderTopLeftRadius: theme.defaultRadius,
                    borderBottomLeftRadius: theme.defaultRadius
                  }
                : undefined,
              '&[data-position="right"]': withRightLabel
                ? {
                    ...sectionBaseStyles,
                    borderLeftWidth: 0,
                    borderTopRightRadius: theme.defaultRadius,
                    borderBottomRightRadius: theme.defaultRadius
                  }
                : undefined
            },
            input: {
              flex: 1,
              ...(withLeftLabel
                ? {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0
                  }
                : undefined),
              ...(withRightLabel
                ? {
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0
                  }
                : undefined)
            }
          }
        },
        props.styles
      ])}
      leftSection={
        !!leftLabel ? (
          <Typography variant="label-lg" {...leftLabelProps}>
            {leftLabel}
          </Typography>
        ) : (
          leftSection
        )
      }
      rightSection={
        !!rightLabel ? (
          <Typography variant="label-lg" {...rightLabelProps}>
            {rightLabel}
          </Typography>
        ) : (
          rightSection
        )
      }
      ref={ref}
    />
  )
})
