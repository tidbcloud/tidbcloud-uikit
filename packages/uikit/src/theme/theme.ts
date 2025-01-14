// eslint-disable-next-line no-restricted-imports
import { MantineTheme, createTheme, mergeMantineTheme, DEFAULT_THEME } from '@mantine/core'
import { EmotionHelpers, keyframes } from '@mantine/emotion'

import {
  ButtonProps,
  SkeletonProps,
  MenuProps,
  NavLinkProps,
  StepperProps,
  AlertProps,
  TabsProps,
  SelectProps,
  InputProps,
  MultiSelectProps,
  BadgeProps,
  CheckboxProps,
  PaperProps,
  TableProps,
  SwitchProps,
  RadioProps,
  ActionIconProps
} from '../primitive/index.js'
import { getPrimaryShade, getThemeColor, rem, rgba } from '../utils/index.js'

import * as dark from './colors.dark.js'
import * as light from './colors.js'
import { FONT_FAMILY } from './font.js'

export type ColorMap = typeof light
export type Color = keyof ColorMap
export const Colors = Object.keys(light) as Color[]

function themeColor(theme: MantineTheme, color: string, shade: number) {
  return getThemeColor([color, shade].join('.'), theme)
}

const InputSizes = {
  xl: 48,
  lg: 44,
  md: 40,
  sm: 32,
  xs: 28
}
const InputFontSizes = {
  xl: 16,
  lg: 14,
  md: 14,
  sm: 13,
  xs: 12
}

function getInputStyles(theme: MantineTheme, props: Pick<InputProps, 'size' | 'variant'>) {
  const size = InputSizes[(props.size as keyof typeof InputSizes) ?? 'md']
  const inputFontSize = InputFontSizes[(props.size as keyof typeof InputFontSizes) ?? 'md']

  const inputSize = size
    ? {
        '--input-size': `${size}px`,
        '--input-height': `${size}px`,
        '--input-line-height': `${size - 2}px`,
        '--input-fz': `${inputFontSize}px`
      }
    : {}
  const passwordInnerInputSize = size
    ? {
        height: size - 2,
        minHeight: size - 2,
        lineHeight: `${size - 2}px`,
        fontSize: inputFontSize
      }
    : {}

  if (props.variant === 'unstyled') {
    return {
      input: {
        '&:not(.mantine-Textarea-input)': {
          ...inputSize
        },
        '& .mantine-PasswordInput-innerInput': {
          ...passwordInnerInputSize
        },
        '&::placeholder': {
          color: themeColor(theme, 'carbon', 6)
        }
      }
    }
  }

  if (props.variant === 'filled') {
    return {
      input: {
        '--input-bg': themeColor(theme, 'carbon', 3),
        '--input-bd-focus': themeColor(theme, 'carbon', 9),
        '&:not(.mantine-Textarea-input)': {
          ...inputSize
        },
        '& .mantine-PasswordInput-innerInput': {
          ...passwordInnerInputSize
        },
        '&::placeholder': {
          color: themeColor(theme, 'carbon', 6)
        }
      }
    }
  }

  return {
    label: {
      color: themeColor(theme, 'carbon', 8),
      marginBottom: 6,
      lineHeight: '20px',
      fontSize: 14
    },
    description: {
      color: themeColor(theme, 'carbon', 7),
      fontSize: 12
    },
    input: {
      color: theme.colors.carbon[8],
      border: `1px solid ${themeColor(theme, 'carbon', 4)}`,
      backgroundColor: themeColor(theme, 'carbon', 0),

      '&:not(.mantine-Textarea-input)': {
        ...inputSize
      },

      '&:hover': {
        borderColor: themeColor(theme, 'carbon', 5)
      },
      '&:focus, &:focus-within': {
        borderColor: themeColor(theme, 'carbon', 9)
      },
      '&:disabled': {
        borderColor: themeColor(theme, 'carbon', 4),
        backgroundColor: themeColor(theme, 'carbon', 2),
        color: themeColor(theme, 'carbon', 8),
        opacity: 1
      },
      '&::placeholder': {
        color: themeColor(theme, 'carbon', 6)
      },

      '& .mantine-PasswordInput-innerInput': {
        ...passwordInnerInputSize,
        '&::placeholder': {
          color: themeColor(theme, 'carbon', 6)
        }
      }
    },
    error: {
      color: themeColor(theme, 'red', 7)
    },
    wrapper: {
      '&[data-error]': {
        '.mantine-Input-input, .mantine-TextInput-input, .mantine-PasswordInput-innerInput': {
          color: themeColor(theme, 'red', 7),
          borderColor: themeColor(theme, 'red', 4),

          '& .mantine-PasswordInput-innerInput': {
            borderColor: 'transparent'
          },
          '&:hover': {
            borderColor: themeColor(theme, 'red', 4)
          },
          '&:focus, &:focus-within': {
            borderColor: themeColor(theme, 'red', 4)
          },
          '&::placeholder': {
            color: themeColor(theme, 'carbon', 2)
          }
        }
      }
    },
    section: {
      overflow: 'hidden',

      '& .mantine-PasswordInput-visibilityToggle svg': {
        color: themeColor(theme, 'carbon', 6)
      }
    }
  }
}

const theme = createTheme({
  primaryColor: 'carbon',
  primaryShade: 7,
  defaultRadius: 8,
  cursorType: 'pointer',
  fontFamily: FONT_FAMILY,
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '60em',
    lg: '75em',
    xl: '90em'
  },
  shadows: {
    xs: '0px 2px 4px rgba(0, 0, 0, 0.04)',
    sm: '0px 4px 16px rgba(0, 0, 0, 0.04)',
    md: '0px 8px 32px rgba(0, 0, 0, 0.08)',
    lg: '0px 8px 64px rgba(0, 0, 0, 0.08)',
    xl: '0px 16px 64px rgba(0, 0, 0, 0.08)'
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '14px',
    lg: '18px',
    xl: '20px'
  },
  spacing: {
    xs: rem(10),
    sm: rem(12),
    md: rem(16),
    lg: rem(20),
    xl: rem(24)
  },
  components: {
    Button: {
      defaultProps: {
        size: 'md',
        variant: 'filled'
      },
      styles: (theme: MantineTheme, props: ButtonProps, u: EmotionHelpers) => {
        let color = props.color || theme.primaryColor

        const getFilledStyles = () => {
          const bgColorShade = color.includes('carbon') ? 9 : getPrimaryShade(theme, 'light')
          const hoverBgColorShade = color.includes('carbon') ? bgColorShade - 1 : bgColorShade + 1

          const bgColor = themeColor(theme, color, bgColorShade)
          const bgHoverColor = themeColor(theme, color, hoverBgColorShade)

          return {
            color: theme.white,
            backgroundColor: bgColor,

            '&:hover': {
              backgroundColor: bgHoverColor
            },

            '&:disabled, &[data-disabled]': {
              color: theme.white,
              backgroundColor: themeColor(theme, color, 5)
            }
          }
        }

        const getLightStyles = () => {
          color = color || 'peacock'
          const fontColorShade = 7
          const bgColorShade = 1
          const borderColorShade = 4

          return {
            color: themeColor(theme, color, fontColorShade),
            backgroundColor: themeColor(theme, color, bgColorShade),
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: themeColor(theme, color, borderColorShade),

            '&:hover': {
              color: themeColor(theme, color, fontColorShade + 1),
              borderColor: themeColor(theme, color, borderColorShade + 1),
              backgroundColor: themeColor(theme, color, bgColorShade + 1)
            },

            '&:disabled, &[data-disabled]': {
              color: themeColor(theme, color, 6),
              borderColor: themeColor(theme, color, borderColorShade + 1),
              backgroundColor: themeColor(theme, color, 2)
            }
          }
        }

        const getDefaultStyles = () => {
          const fontColorShade = color === 'carbon' ? 8 : 7
          const bgColorShade = 2
          const borderColorShade = color === 'carbon' ? 5 : 4

          return {
            color: themeColor(theme, color, fontColorShade),
            backgroundColor: themeColor(theme, color, bgColorShade),
            borderColor: themeColor(theme, color, borderColorShade),

            '&:hover': {
              color: themeColor(theme, color, fontColorShade + 1),
              borderColor: themeColor(theme, color, borderColorShade + 1),
              backgroundColor: themeColor(theme, color, bgColorShade + 1)
            },

            '&:disabled, &[data-disabled]': {
              color: themeColor(theme, 'carbon', 6),
              borderColor: themeColor(theme, 'carbon', borderColorShade + 1),
              backgroundColor: themeColor(theme, 'carbon', 2)
            }
          }
        }

        const getSubtleStyles = () => {
          color = color || 'peacock'
          const fontColorShade = 7
          const bgColorShade = 1

          return {
            color: themeColor(theme, color, fontColorShade),
            backgroundColor: 'transparent',

            '&:hover': {
              color: themeColor(theme, color, fontColorShade + 1),
              backgroundColor: themeColor(theme, color, bgColorShade + 1)
            },

            '&:disabled, &[data-disabled]': {
              color: themeColor(theme, color, 6)
            }
          }
        }

        const variantStyles = {
          filled: getFilledStyles(),
          light: getLightStyles(),
          default: getDefaultStyles(),
          subtle: getSubtleStyles(),
          outline: getDefaultStyles()
        }

        const sizeStyles = {
          xs: {
            height: 28
          },
          sm: {
            height: 32
          },
          md: {
            height: 40
          },
          lg: {
            height: 48
          },
          xl: {
            height: 56
          }
        }

        // @ts-ignore
        const variantStyle = variantStyles[props.variant!]
        // @ts-ignore
        const sizeStyle = sizeStyles[props.size!]

        const finalStyles = {
          label: {
            fontWeight: 500,
            fontSize: props.size === 'xs' ? 12 : 14
          },
          root: {
            overflow: 'unset',
            paddingLeft: 12,
            paddingRight: 12,
            ...variantStyle,
            ...sizeStyle
          },
          leftIcon: {
            marginRight: 4
          },
          rightIcon: {
            marginLeft: 4
          }
        }

        return finalStyles
      }
    },
    Loader: {
      defaultProps: {
        color: 'carbon.5'
      }
    },
    Skeleton: {
      styles(theme: MantineTheme, props: SkeletonProps) {
        const animation = keyframes({
          '0%': {
            backgroundPosition: '200% 0'
          },
          '100%': {
            backgroundPosition: '-200% 0'
          }
        })
        const c1 = themeColor(theme, 'carbon', 2)
        const c2 = themeColor(theme, 'carbon', 4)
        return {
          root: {
            '&::after': {
              backgroundImage: `linear-gradient(90deg,${c1},${c2},${c1},${c2})`,
              backgroundSize: '400% 100%',
              animation: props.animate ? `${animation} 5000ms ease-in-out infinite` : 'none'
            }
          }
        }
      }
    },
    Tabs: {
      styles(theme: MantineTheme, props: TabsProps) {
        return {
          list: {
            gap: props.orientation === 'vertical' ? 8 : 32,
            border: 0
          },
          tab: {
            color: themeColor(theme, 'carbon', 7),
            fontWeight: 600,
            paddingLeft: 0,
            paddingRight: props.orientation === 'vertical' ? 8 : 0,
            '&[data-active]': {
              color: themeColor(theme, 'carbon', 9)
            },
            '&:hover': {
              color: themeColor(theme, 'carbon', 9),
              backgroundColor: 'transparent'
            }
          }
        }
      }
    },
    Notification: {
      styles: (theme: MantineTheme) => {
        return {
          root: {
            padding: 8,
            paddingLeft: 28,

            '&:before': {
              top: 8,
              bottom: 8,
              left: 8,
              width: 4
            }
          },
          body: {
            marginRight: 8,
            lineHeight: 20,
            fontSize: 16
          },
          title: {
            fontWeight: 600,
            color: themeColor(theme, 'carbon', 8)
          },
          description: {
            color: themeColor(theme, 'carbon', 7)
          }
        }
      }
    },
    Menu: {
      styles: (theme: MantineTheme, props: MenuProps) => {
        const textColor = themeColor(theme, 'carbon', 8)
        const bgHoverColor = themeColor(theme, 'carbon', 2)
        const bgActiveColor = themeColor(theme, 'carbon', 3)
        const disabledColor = themeColor(theme, 'carbon', 6)
        return {
          dropdown: {
            boxShadow: theme.shadows.md
          },
          item: {
            transition: 'background 150ms ease-in-out',
            color: textColor,
            '&:hover, &[data-hovered]': {
              color: textColor,
              backgroundColor: bgHoverColor,
              textDecoration: 'none'
            },
            '&:active, &[data-active]': {
              color: textColor,
              backgroundColor: bgActiveColor
            },
            '&:disabled, &[data-disabled]': {
              color: disabledColor,
              userSelect: 'none',
              cursor: 'not-allowed',
              '&:hover, &[data-hovered]': {
                color: disabledColor,
                backgroundColor: 'transparent'
              }
            }
          }
        }
      }
    },
    NavLink: {
      defaultProps: {
        px: 10,
        lh: 1.5,
        fw: 500,
        variant: 'light',
        /**
         * mantine changed the default component to `a` instead of `button` in v7
         * we need to set it back to `button` to keep the same behavior as before
         */
        component: 'button'
      },
      styles: (theme: MantineTheme, props: NavLinkProps) => {
        const withThemeColor = (shade: number) => themeColor(theme, props.color ?? theme.primaryColor, shade)

        const rootStyles = {
          light: {
            color: withThemeColor(8),
            '&:hover': {
              color: withThemeColor(8),
              backgroundColor: withThemeColor(2)
            },
            '&:active': {
              color: withThemeColor(8),
              backgroundColor: withThemeColor(4)
            },
            '&[data-active]': {
              color: withThemeColor(9),
              backgroundColor: withThemeColor(4),
              '&:hover': {
                backgroundColor: withThemeColor(4)
              },
              '&:active': {
                backgroundColor: withThemeColor(4)
              }
            }
          }
        }

        // @ts-ignore
        const matchedStyle = rootStyles[props.variant] || {}

        return {
          root: {
            ...matchedStyle,
            borderRadius: theme.defaultRadius,
            transition: 'background 150ms ease-in-out'
          },
          label: {
            lineHeight: '24px'
          }
        }
      }
    },
    Stepper: {
      styles: (theme: MantineTheme, props: StepperProps) => {
        const color = props.color || theme.primaryColor
        return {
          stepIcon: {
            backgroundColor: themeColor(theme, color, 0),
            borderColor: themeColor(theme, color, 4),
            color: themeColor(theme, color, 7),
            '&[data-progress]': {
              backgroundColor: themeColor(theme, color, 9),
              color: themeColor(theme, color, 0),
              borderColor: themeColor(theme, color, 9)
            },
            '&[data-completed]': {
              backgroundColor: themeColor(theme, color, 3),
              color: themeColor(theme, color, 9),
              borderColor: themeColor(theme, color, 9)
            }
          },
          stepCompletedIcon: {
            color: themeColor(theme, color, 9),
            '& > svg': {
              width: '14px !important',
              height: '14px !important'
            }
          },
          separator: {
            backgroundColor: themeColor(theme, color, 4)
          },
          separatorActive: {
            backgroundColor: themeColor(theme, color, 9)
          },
          verticalSeparator: {
            backgroundColor: themeColor(theme, color, 4)
          },
          verticalSeparatorActive: {
            backgroundColor: themeColor(theme, color, 9)
          }
        }
      }
    },
    Alert: {
      defaultProps: {
        color: 'peacock'
      },
      styles: (theme: MantineTheme, props: AlertProps) => {
        const color = props.color || theme.primaryColor
        return {
          root: {
            borderRadius: 0,
            border: 'none',
            borderLeft: `2px solid ${themeColor(theme, color, 7)}`,
            color: themeColor(theme, color, 9),
            backgroundColor: themeColor(theme, color, 1)
          },
          title: {
            color: 'inherit'
          },
          icon: {
            color: 'inherit',
            marginRight: 4
          },
          message: {
            color: 'inherit'
          }
        }
      }
    },
    Select: {
      defaultProps: {
        size: 'md',
        withCheckIcon: true,
        checkIconPosition: 'right',
        allowDeselect: false
      },
      styles: (theme: MantineTheme, props: SelectProps) => {
        return {
          label: {
            lineHeight: '20px',
            marginBottom: 6
          },
          description: {
            color: themeColor(theme, 'carbon', 7)
          },
          input: {
            color: themeColor(theme, 'carbon', 8),

            ...(props.variant === 'unstyled' && {
              border: 'none',
              '&:disabled': {
                color: themeColor(theme, 'carbon', 7)
              }
            }),
            ...(props.variant === 'filled' && {
              backgroundColor: themeColor(theme, 'carbon', 2),
              borderColor: 'transparent',

              '&:disabled': {
                color: themeColor(theme, 'carbon', 6),
                cursor: 'not-allowed'
              }
            })
          },
          option: {
            transition: 'background 150ms ease-in-out',
            color: themeColor(theme, 'carbon', 8),
            '&:hover': {
              color: themeColor(theme, 'carbon', 8),
              backgroundColor: themeColor(theme, 'carbon', 3)
            },
            '&[data-checked]': {
              color: themeColor(theme, 'carbon', 8),
              fontWeight: 700,
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: themeColor(theme, 'carbon', 3)
              },
              // check icon color
              '& > svg': {
                color: themeColor(theme, 'carbon', 9),
                opacity: 1
              }
            }
          },
          section: {
            '& > svg': {
              color: `${themeColor(theme, 'carbon', 7)} !important`
            }
          },
          dropdown: {
            '--popover-border-color': themeColor(theme, 'carbon', 3),
            '--popover-shadow': '0px 8px 32px 0px #00000014'
          }
        }
      }
    },
    MultiSelect: {
      defaultProps: {
        size: 'md',
        withCheckIcon: false
      },
      styles: (theme: MantineTheme, props: MultiSelectProps) => {
        return {
          label: {
            fontSize: 14,
            marginBottom: 6
          },
          inputField: {
            '&::placeholder': {
              color: themeColor(theme, 'carbon', 6)
            }
          },
          pill: {
            backgroundColor: themeColor(theme, 'carbon', 3),
            color: themeColor(theme, 'carbon', 8),
            borderRadius: theme.radius.sm
          },
          section: {
            '& > svg': {
              color: `${themeColor(theme, 'carbon', 7)} !important`
            }
          },
          option: {
            '&[data-checked]': {
              fontWeight: 700
            }
          }
        }
      }
    },
    Input: {
      defaultProps: {
        size: 'md'
      },
      styles: getInputStyles
    },
    TextInput: {
      defaultProps: {
        size: 'md',
        inputWrapperOrder: ['label', 'input', 'description', 'error']
      },
      styles: getInputStyles
    },
    PasswordInput: {
      defaultProps: {
        size: 'md'
      },
      styles: getInputStyles
    },
    NumberInput: {
      defaultProps: {
        size: 'md'
      },
      styles: getInputStyles
    },
    Textarea: {
      styles: getInputStyles
    },
    Badge: {
      defaultProps: {
        color: 'peacock',
        size: 'md',
        variant: 'light'
      },
      styles(theme: MantineTheme, props: BadgeProps) {
        const color = props.color ?? theme.primaryColor
        const mainShade = color.includes('carbon') ? 9 : 7

        const sizes = {
          xs: 11,
          sm: 12,
          md: 13,
          lg: 14,
          xl: 16
        }

        // @ts-ignore
        const fontSize = sizes[props.size]

        const styles = {
          dot: {
            border: 'none',
            textTransform: 'capitalize',
            fontWeight: 400,
            fontSize,
            backgroundColor: 'transparent',
            color: themeColor(theme, theme.primaryColor, 8),
            padding: 0,
            borderRadius: 0,

            '&:before': {
              backgroundColor: themeColor(theme, color, 7)
            }
          },
          outline: {
            color: themeColor(theme, color, mainShade),
            borderColor: themeColor(theme, color, 4)
          },
          light: {
            backgroundColor: themeColor(theme, color, 1),
            color: themeColor(theme, color, mainShade)
          },
          filled: {
            backgroundColor: themeColor(theme, color, mainShade),
            color: theme.white
          }
        }

        return {
          root: {
            // @ts-ignore
            ...styles[props.variant]
          }
        }
      }
    },
    Checkbox: {
      styles(theme: MantineTheme, props: CheckboxProps) {
        const withThemeColor = (shade: number) => themeColor(theme, props.color ?? theme.primaryColor, shade)
        return {
          input: {
            borderRadius: 4,
            borderColor: withThemeColor(6),

            '&:checked:not(:disabled)': {
              backgroundColor: withThemeColor(9),
              borderColor: withThemeColor(9)
            },
            '&:disabled:checked': {
              backgroundColor: themeColor(theme, 'carbon', 6),
              borderColor: themeColor(theme, 'carbon', 6)
            }
          },
          label: {
            color: themeColor(theme, 'carbon', 8),

            '&[data-disabled]': {
              color: themeColor(theme, 'carbon', 6)
            }
          }
        }
      }
    },
    Divider: {
      defaultProps: {
        color: 'carbon.4'
      }
    },
    Card: {
      defaultProps: {
        shadow: 'xs',
        withBorder: true
      },
      styles: (theme: MantineTheme) => {
        return {
          root: {
            backgroundColor: theme.colors.carbon[0]
          }
        }
      }
    },
    Paper: {
      styles: (theme: MantineTheme, props: PaperProps) => {
        return {
          root: {
            backgroundColor: themeColor(theme, 'carbon', 0),
            borderColor: props.withBorder ? themeColor(theme, 'carbon', 3) : 'transparent'
          }
        }
      }
    },
    Drawer: {
      defaultProps: (theme: MantineTheme) => ({
        overlayProps: {
          backgroundOpacity: 0.9,
          blur: 3,
          color: themeColor(theme, 'carbon', 2)
        }
      })
    },
    Modal: {
      defaultProps: (theme: MantineTheme) => ({
        shadow: 'xl',
        padding: 0,
        centered: true,
        transitionProps: {
          duration: 200,
          transition: 'fade-down'
        },
        overlayProps: {
          backgroundOpacity: 0.9,
          blur: 3,
          color: themeColor(theme, 'carbon', 2)
        }
      }),
      styles: (theme: MantineTheme) => ({
        content: {
          border: `1px solid ${themeColor(theme, 'carbon', 4)} !important`
        },
        header: {
          borderTopLeftRadius: theme.defaultRadius,
          borderTopRightRadius: theme.defaultRadius,
          padding: '16px 16px 16px 24px',
          margin: 0,
          backgroundColor: themeColor(theme, 'carbon', 1),
          borderBottom: `1px solid ${themeColor(theme, 'carbon', 4)}`
        },
        title: {
          fontWeight: 700,
          fontSize: 16,
          lineHeight: 1.5,
          color: themeColor(theme, 'carbon', 9)
        },
        body: {
          padding: 24,
          backgroundColor: themeColor(theme, 'carbon', 0),
          borderBottomLeftRadius: theme.defaultRadius,
          borderBottomRightRadius: theme.defaultRadius
        }
      })
    },
    Table: {
      styles: (theme: MantineTheme, props: TableProps) => {
        const borderStyles = props.withTableBorder
          ? {
              borderCollapse: 'separate',
              borderSpacing: 0,
              borderRadius: theme.defaultRadius,
              'thead tr:first-of-type th:first-of-type': {
                borderTopLeftRadius: theme.defaultRadius
              },
              'thead tr:first-of-type th:last-of-type': {
                borderTopRightRadius: theme.defaultRadius
              }
            }
          : {}

        return {
          table: {
            ...borderStyles,
            '--table-border-color': themeColor(theme, 'carbon', 3)
          },
          thead: {
            backgroundColor: themeColor(theme, 'carbon', 2)
          },
          tr: {
            '&:where([data-with-row-border]):not(:last-of-type)': {
              td: {
                borderBottom: `1px solid ${themeColor(theme, 'carbon', 3)} !important`
              }
            }
          }
        }
      }
    },
    Switch: {
      styles: (theme: MantineTheme, props: SwitchProps) => {
        const color = props.color ?? theme.primaryColor

        return {
          root: {
            '& input:checked+.mantine-Switch-track': {
              backgroundColor: themeColor(theme, color, 9),
              borderColor: themeColor(theme, color, 9)
            },
            '& input:disabled+.mantine-Switch-track': {
              backgroundColor: themeColor(theme, color, 4),
              borderColor: themeColor(theme, color, 4)
            },
            '& input:disabled:checked+.mantine-Switch-track': {
              backgroundColor: themeColor(theme, color, 7),
              borderColor: themeColor(theme, color, 7)
            },

            '& input+*>.mantine-Switch-trackLabel': {
              color: themeColor(theme, color, 8)
            },
            '& input:checked+*>.mantine-Switch-trackLabel': {
              color: themeColor(theme, color, 0)
            }
          },
          label: {
            '&[data-disabled]': {
              color: themeColor(theme, color, 6)
            }
          },
          track: {
            backgroundColor: themeColor(theme, color, 5),
            borderColor: themeColor(theme, color, 5)
          },
          trackLabel: {
            color: themeColor(theme, color, 8)
          }
        }
      }
    },
    Radio: {
      styles(theme: MantineTheme, props: RadioProps) {
        const color = (props.color?.includes('.') ? props.color.split('.')[0] : (props.color ?? 'carbon')) as Color
        const shade = color.includes('carbon') ? 9 : 7

        const sizes = {
          xs: 14,
          sm: 16,
          md: 20,
          lg: 24,
          xl: 30
        }

        const iconSizes = {
          xs: 5,
          sm: 6,
          md: 8,
          lg: 10,
          xl: 12
        }

        // @ts-ignore
        const size = sizes[props.size ?? 'sm']
        // @ts-ignore
        const iconSize = iconSizes[props.size ?? 'sm']

        return {
          root: {
            '--radio-size': rem(size),
            '--radio-icon-size': rem(iconSize),
            '--radio-color': themeColor(theme, color, shade) + ' !important',
            '--radio-icon-color':
              props.variant === 'outline' ? themeColor(theme, color, shade) : theme.white + ' !important'
          },
          label: {
            lineHeight: `${size}px`
          },
          icon: {
            transform: 'var(--radio-icon-transform, scale(0.2))'
          },
          radio: {
            '&:disabled:not(:checked)': {
              background: themeColor(theme, 'carbon', 4),
              borderColor: themeColor(theme, 'carbon', 6),
              cursor: 'not-allowed'
            },
            '&:disabled:checked': {
              color: themeColor(theme, 'carbon', 2),
              background: themeColor(theme, 'carbon', 6),
              borderColor: themeColor(theme, 'carbon', 6),
              cursor: 'not-allowed'
            }
          }
        }
      }
    },
    SegmentedControl: {
      styles: (theme: MantineTheme) => {
        return {
          root: {
            backgroundColor: themeColor(theme, 'carbon', 4)
          },
          indicator: {
            backgroundColor: themeColor(theme, 'carbon', 0)
          },
          label: {
            color: themeColor(theme, 'carbon', 7) + ' !important',
            '&[data-active]': {
              color: themeColor(theme, 'carbon', 9) + ' !important'
            },
            '&[data-disabled]': {
              color: themeColor(theme, 'carbon', 6) + ' !important'
            }
          },

          control: {
            '--separator-color': themeColor(theme, 'carbon', 5)
          }
        }
      }
    },
    Tooltip: {
      defaultProps: {
        withArrow: true
      },
      styles(theme: MantineTheme) {
        return {
          tooltip: {
            backgroundColor: themeColor(theme, 'carbon', 8),
            color: themeColor(theme, 'carbon', 1)
          }
        }
      }
    },
    ActionIcon: {
      defaultProps: {
        variant: 'subtle',
        color: 'carbon',
        size: 'md'
      },
      styles(theme: MantineTheme, props: ActionIconProps) {
        const color = props.color ?? theme.primaryColor
        const shade = color.includes('carbon') ? 8 : 7

        const variantStyles = {
          default: {
            backgroundColor: themeColor(theme, color, 2),
            borderColor: themeColor(theme, color, 5),
            color: themeColor(theme, color, 8),

            '&:hover': {
              backgroundColor: themeColor(theme, color, 3),
              borderColor: themeColor(theme, color, 6),
              color: themeColor(theme, color, 9)
            },
            '&:active': {
              backgroundColor: themeColor(theme, color, 4),
              borderColor: themeColor(theme, color, 6),
              color: themeColor(theme, color, 9)
            },

            '&:disabled': {
              backgroundColor: themeColor(theme, color, 2),
              borderColor: themeColor(theme, color, 5),
              color: themeColor(theme, color, 6)
            }
          },
          transparent: {
            backgroundColor: 'transparent',
            color: themeColor(theme, color, shade),

            '&:hover': {
              color: themeColor(theme, color, shade)
            }
          },
          subtle: {
            backgroundColor: 'transparent',
            color: themeColor(theme, color, 8),
            borderColor: 'transparent',

            '&:hover': {
              backgroundColor: themeColor(theme, color, 3),
              color: themeColor(theme, color, 8)
            },
            '&:active': {
              backgroundColor: themeColor(theme, color, 4)
            },
            '&:disabled': {
              color: themeColor(theme, color, 6),
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              cursor: 'not-allowed'
            }
          },
          outline: {
            backgroundColor: 'transparent',
            color: themeColor(theme, color, shade),
            border: `1px solid ${themeColor(theme, color, 4)}`,
            '&:hover': {
              backgroundColor: themeColor(theme, color, 2),
              color: themeColor(theme, color, shade)
            }
          },
          filled: {
            backgroundColor: themeColor(theme, color, color.includes('carbon') ? 9 : 7),
            color: theme.white,
            '&:hover': {
              color: theme.white
            }
          },
          light: {
            backgroundColor: themeColor(theme, color, 3),
            color: themeColor(theme, color, 8),
            '&:hover': {
              backgroundColor: themeColor(theme, color, 4),
              color: themeColor(theme, color, 8)
            },
            '&:active': {
              backgroundColor: themeColor(theme, color, 5)
            }
          }
        }

        const sizes = {
          xs: 16,
          sm: 20,
          md: 28,
          lg: 32,
          xl: 40
        }
        // @ts-ignore
        const size = sizes[props.size ?? 'md']
        // @ts-ignore
        const variantStyle = variantStyles[props.variant ?? 'default']

        return {
          root: {
            ...variantStyle,
            '--ai-size': size
          }
        }
      }
    },
    DatePicker: {
      styles: (theme: MantineTheme) => {
        const color = theme.primaryColor
        return {
          calendarHeaderLevel: {
            color: themeColor(theme, color, 8)
          },
          calendarHeaderControl: {
            color: themeColor(theme, color, 8)
          },
          weekday: {
            color: themeColor(theme, color, 8)
          },
          calendarHeader: {
            maxWidth: '100%'
          },
          day: {
            '--day-size-sm': '32px',
            '--day-size-md': '40px',
            color: themeColor(theme, color, 8),
            '&[data-in-range]': {
              backgroundColor: themeColor(theme, color, 3),
              borderRadius: theme.defaultRadius
            },
            '&[data-first-in-range]': {
              borderRadius: theme.defaultRadius
            },
            '&[data-last-in-range]': {
              borderRadius: theme.defaultRadius
            },
            '&[data-selected]': {
              backgroundColor: themeColor(theme, color, 9),
              color: theme.white
            },
            '&[data-weekend]': {
              color: themeColor(theme, color, 8),
              '&[data-selected]': {
                color: theme.white
              },
              '&[data-disabled], &:disabled': {
                color: themeColor(theme, color, 6)
              }
            },
            '&[data-disabled], &:disabled': {
              color: themeColor(theme, color, 6)
            },
            '&[data-outside]': {
              color: themeColor(theme, color, 6)
            }
          }
        }
      }
    },
    Anchor: {
      defaultProps: {
        c: 'peacock.7'
      }
    }
  }
})

export type Theme = MantineTheme & {
  colors: ColorMap
}

export const useTheme = (colorScheme: 'light' | 'dark'): Theme => {
  const isLight = colorScheme === 'light'
  const colors = isLight ? light : dark

  const mergedTheme = mergeMantineTheme(DEFAULT_THEME, {
    ...theme,
    colors,
    white: colors.carbon[0],
    black: colors.carbon[8]
  })

  return mergedTheme
}
