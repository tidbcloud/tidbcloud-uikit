import { getFontSize, TextInput as MantineTextInput, TextInputProps as MantineTextInputProps } from '@mantine/core'
import { forwardRef } from 'react'

import { mergeStylesList } from '../../utils/index.js'
import { Typography, TypographyProps } from '../Typography/index.js'

export interface TextInputProps extends MantineTextInputProps {
  /**
   * @deprecated use leftAddon
   */
  leftLabel?: React.ReactNode
  /**
   * @deprecated use leftAddonProps
   */
  leftLabelProps?: TypographyProps
  /**
   * @deprecated use rightAddon
   */
  rightLabel?: React.ReactNode
  /**
   * @deprecated use rightAddonProps
   */
  rightLabelProps?: TypographyProps

  leftAddon?: React.ReactNode
  rightAddon?: React.ReactNode
  leftAddonProps?: TypographyProps
  rightAddonProps?: TypographyProps
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const {
    leftLabel,
    leftLabelProps,
    leftAddon,
    rightAddon,
    leftAddonProps,
    rightAddonProps,
    leftSection,
    rightLabel,
    rightLabelProps,
    rightSection,
    ...rest
  } = props

  const withLeftAddon = !!(leftLabel || leftAddon)
  const withRightAddon = !!(rightLabel || rightAddon)

  return (
    <MantineTextInput
      {...rest}
      styles={mergeStylesList([
        (theme) => {
          if (!withLeftAddon && !withRightAddon) {
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

              '&[data-with-left-section]': withLeftAddon ? wrapperBaseStyles : undefined,
              '&[data-with-right-section]': withRightAddon ? wrapperBaseStyles : undefined
            },
            section: {
              '&[data-position="left"]': withLeftAddon
                ? {
                    ...sectionBaseStyles,
                    borderRightWidth: 0,
                    borderTopLeftRadius: theme.defaultRadius,
                    borderBottomLeftRadius: theme.defaultRadius
                  }
                : undefined,
              '&[data-position="right"]': withRightAddon
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
              ...(withLeftAddon
                ? {
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0
                  }
                : undefined),
              ...(withRightAddon
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
        !!withLeftAddon ? (
          <Typography variant="label-lg" {...(leftLabelProps || leftAddonProps)}>
            {leftLabel || leftAddon}
          </Typography>
        ) : (
          leftSection
        )
      }
      rightSection={
        !!withRightAddon ? (
          <Typography variant="label-lg" {...(rightLabelProps || rightAddonProps)}>
            {rightLabel || rightAddon}
          </Typography>
        ) : (
          rightSection
        )
      }
      ref={ref}
    />
  )
})
