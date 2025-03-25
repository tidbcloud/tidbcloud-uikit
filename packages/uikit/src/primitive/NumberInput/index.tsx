import { NumberInput as MantineNumberInput, NumberInputProps as MantineNumberInputProps } from '@mantine/core'
import { forwardRef } from 'react'

import { mergeStylesList } from '../../utils/index.js'
import { Typography, type TypographyProps } from '../Typography/index.js'

export interface NumberInputProps extends MantineNumberInputProps {
  leftAddon?: React.ReactNode
  rightAddon?: React.ReactNode
  leftAddonProps?: TypographyProps
  rightAddonProps?: TypographyProps
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>((props, ref) => {
  const { leftAddon, rightAddon, leftAddonProps, rightAddonProps, leftSection, rightSection, ...rest } = props

  return (
    <MantineNumberInput
      {...rest}
      ref={ref}
      styles={mergeStylesList([
        (theme) => {
          const withLeftAddon = !!leftAddon
          const withRightAddon = !!rightAddon

          if (!withLeftAddon && !withRightAddon) {
            return {}
          }

          const sectionBaseStyles: MantineNumberInputProps['style'] = {
            position: 'initial',
            width: 'fit-content',
            border: `1px solid ${theme.colors.carbon[4]}`,
            backgroundColor: theme.colors.carbon[2],
            paddingLeft: 12,
            paddingRight: 12
          }

          const wrapperBaseStyles: MantineNumberInputProps['style'] = {
            '--input-padding-inline-start': 'var(--input-padding)'
          }

          return {
            wrapper: {
              display: 'flex',
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
        }
      ])}
      leftSection={
        !!leftAddon ? (
          <Typography variant="label-lg" {...leftAddonProps}>
            {leftAddon}
          </Typography>
        ) : (
          leftSection
        )
      }
      rightSection={
        !!rightAddon ? (
          <Typography variant="label-lg" {...rightAddonProps}>
            {rightAddon}
          </Typography>
        ) : (
          rightSection
        )
      }
    />
  )
})
