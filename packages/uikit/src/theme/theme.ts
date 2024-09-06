import {
  CSSObject,
  MantineThemeOverride,
  NavLinkStylesParams,
  AlertStylesParams,
  InputStylesParams,
  SkeletonStylesParams,
  keyframes,
  MultiSelectStylesParams,
  TableStylesParams,
  StepperStylesParams,
  SwitchStylesParams,
  ButtonStylesParams,
  PaperStylesParams,
  MantineTheme,
  CheckboxStylesParams,
  BadgeStylesParams
} from '@mantine/core'

import * as dark from './colors.dark.js'
import * as light from './colors.js'
import { FONT_FAMILY } from './font.js'

export type ColorMap = typeof light
export type Color = keyof ColorMap
export const Colors = Object.keys(light) as Color[]

const getButtonStyles = (theme: MantineTheme, params: ButtonStylesParams): Record<string, CSSObject> => {
  let color = params.color?.includes('.') ? params.color.split('.')[0] : params.color

  const getFilledStyles = (): CSSObject => {
    color = color || theme.primaryColor
    const bgColorShade = color.includes('carbon') ? 9 : theme.fn.primaryShade()
    const hoverBgColorShade = color.includes('carbon') ? bgColorShade - 1 : bgColorShade + 1

    const bgColor = theme.fn.themeColor(color, bgColorShade)
    const bgHoverColor = theme.fn.themeColor(color, hoverBgColorShade)

    return {
      color: theme.white,
      backgroundColor: bgColor,

      ...theme.fn.hover({
        backgroundColor: bgHoverColor
      }),

      '&:disabled': {
        color: theme.white,
        backgroundColor: theme.fn.themeColor(color, 5)
      }
    }
  }

  const getLightStyles = (): CSSObject => {
    color = color || 'peacock'
    const mainColor = theme.colors[color]
    const fontColorShade = 7
    const bgColorShade = 1
    const borderColorShade = 4

    return {
      color: mainColor[fontColorShade],
      backgroundColor: mainColor[bgColorShade],
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: mainColor[borderColorShade],

      ...theme.fn.hover({
        color: mainColor[fontColorShade + 1],
        borderColor: mainColor[borderColorShade + 1],
        backgroundColor: mainColor[bgColorShade + 1]
      }),

      '&:disabled': {
        color: theme.colors[theme.primaryColor][6],
        borderColor: theme.colors[theme.primaryColor][borderColorShade + 1],
        backgroundColor: theme.colors[theme.primaryColor][2]
      }
    }
  }

  const getDefaultStyles = (): CSSObject => {
    color = color || theme.primaryColor
    const mainColor = theme.colors[color]
    const fontColorShade = color === 'carbon' ? 8 : 7
    const bgColorShade = 2
    const borderColorShade = color === 'carbon' ? 5 : 4

    return {
      color: mainColor[fontColorShade],
      backgroundColor: mainColor[bgColorShade],
      borderColor: mainColor[borderColorShade],

      ...theme.fn.hover({
        color: mainColor[fontColorShade + 1],
        borderColor: mainColor[borderColorShade + 1],
        backgroundColor: mainColor[bgColorShade + 1]
      }),

      '&:disabled': {
        color: theme.colors[theme.primaryColor][6],
        borderColor: theme.colors[theme.primaryColor][borderColorShade + 1],
        backgroundColor: theme.colors[theme.primaryColor][2]
      }
    }
  }

  const getSubtleStyles = (): CSSObject => {
    color = color || 'peacock'
    const mainColor = theme.colors[color]
    const fontColorShade = 7
    const bgColorShade = 1

    return {
      color: mainColor[fontColorShade],
      backgroundColor: 'transparent',

      ...theme.fn.hover({
        color: mainColor[fontColorShade + 1],
        backgroundColor: mainColor[bgColorShade + 1]
      }),

      '&:disabled': {
        color: theme.colors[theme.primaryColor][6],
        backgroundColor: theme.white
      }
    }
  }

  const variantStyles: Record<string, CSSObject> = {
    filled: getFilledStyles(),
    light: getLightStyles(),
    default: getDefaultStyles(),
    subtle: getSubtleStyles(),
    outline: getDefaultStyles()
  }

  const sizeStyles: Record<string, CSSObject> = {
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

  const finalStyles = {
    root: {
      fontWeight: 700,
      ...variantStyles[params.variant],
      ...sizeStyles[params.size]
    }
  }

  return finalStyles
}

const getInputStyles = (theme: MantineTheme, params: InputStylesParams) => {
  const inputStyle = {
    height: 40,
    minHeight: 40,
    lineHeight: '38px'
  }
  const diffSizeStyles: Record<string, Record<string, CSSObject>> = {
    sm: {
      label: {
        lineHeight: '20px',
        marginBottom: 8
      },
      input: {
        ...inputStyle,

        // This is for PasswordInput, is has different dom structure with normal input
        // FIXME innerInput is not working in current v5.10.4, use that key after upgrade mantine
        '& .mantine-PasswordInput-innerInput': inputStyle
      }
    }
  }

  const matches = diffSizeStyles[params.size] || { label: {}, input: {} }

  return {
    label: matches.label,
    input: {
      ...matches.input,
      color: theme.colors.carbon[8],
      '&:disabled': {
        opacity: 1
      }
    },
    invalid: {
      '&:hover': {
        borderColor: theme.colors.red[5]
      },
      '&:focus': {
        borderColor: theme.colors.red[5]
      }
    }
  }
}

const spinKeyFrames = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
})

// DO NOT CHANGE, THE PATCH FOR LOADER RELIES ON THIS NAME
const loaderClassName = 'mantine-loader-root'
const loaderAnimation = `${spinKeyFrames} 1s linear infinite`

const theme: MantineThemeOverride = {
  primaryColor: 'carbon',
  primaryShade: 7,
  defaultRadius: 8,
  cursorType: 'pointer',
  fontFamily: FONT_FAMILY,
  breakpoints: {
    xs: 576,
    sm: 768,
    md: 960,
    lg: 1200,
    xl: 1440
  },
  shadows: {
    xs: '0px 2px 4px rgba(0, 0, 0, 0.04)',
    sm: '0px 4px 16px rgba(0, 0, 0, 0.04)',
    md: '0px 8px 32px rgba(0, 0, 0, 0.08)',
    lg: '0px 8px 64px rgba(0, 0, 0, 0.08)',
    xl: '0px 16px 64px rgba(0, 0, 0, 0.08)'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 14,
    lg: 18,
    xl: 20
  },
  globalStyles(theme) {
    return {
      body: {
        color: theme.colors?.carbon[8],
        backgroundColor: theme.colors?.carbon[1],
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased'
      },
      [`.${loaderClassName}`]: {
        animation: loaderAnimation
      }
    }
  },
  components: {
    Button: {
      defaultProps() {
        return {
          size: 'md'
        }
      },
      styles: getButtonStyles
    },
    Loader: {
      defaultProps: {
        color: 'carbon.5'
      }
    },
    Skeleton: {
      styles(theme, params: SkeletonStylesParams) {
        const animation = keyframes({
          '0%': {
            backgroundPosition: '200% 0'
          },
          '100%': {
            backgroundPosition: '-200% 0'
          }
        })

        return {
          visible: {
            '&::after': {
              backgroundImage: `linear-gradient(90deg,${theme.colors.carbon[2]},${theme.colors.carbon[4]},${theme.colors.carbon[4]},${theme.colors.carbon[2]})`,
              backgroundSize: '400% 100%',
              animation: params.animate ? `${animation} 5000ms ease-in-out infinite` : 'none'
            }
          }
        }
      }
    },
    Tabs: {
      styles(theme) {
        return {
          tabsList: {
            gap: 32,
            border: 0
          },
          tab: {
            color: theme.colors.carbon[7],
            fontWeight: 600,
            paddingLeft: 0,
            paddingRight: 0,
            '&[data-active]': {
              color: theme.colors.carbon[9]
            },
            '&:hover': {
              color: theme.colors.carbon[9],
              background: 'transparent',
              borderColor: 'transparent'
            },
            '&:focus': { outlineColor: 'transparent' }
          }
        }
      }
    },
    Notification: {
      styles: {
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
          fontWeight: 600,
          lineHeight: 20,
          fontSize: 16
        }
      }
    },
    Menu: {
      styles: (theme) => ({
        dropdown: {
          boxShadow: theme.shadows.md
        },
        item: {
          transition: 'background 150ms ease-in-out',
          color: theme.colors.carbon[8],
          '&:hover, &[data-hovered]': {
            color: theme.colors.carbon[8],
            backgroundColor: theme.colors.carbon[2],
            textDecoration: 'none'
          },
          '&:active, &[data-active]': {
            color: theme.colors.carbon[8],
            backgroundColor: theme.colors.carbon[3]
          },
          '&:disabled, &[data-disabled]': {
            color: theme.colors.carbon[5],
            userSelect: 'none',
            cursor: 'not-allowed',
            '&:hover, &[data-hovered]': {
              color: theme.colors.carbon[6],
              backgroundColor: 'transparent'
            }
          }
        }
      })
    },
    NavLink: {
      defaultProps: {
        px: 10,
        lh: 1.5,
        fw: 500
      },
      styles: (theme, params: NavLinkStylesParams) => {
        const withThemeColor = (shade: number) => theme.fn.themeColor(params.color ?? theme.primaryColor, shade)

        const rootStyles: Record<string, CSSObject> = {
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

        const matchedStyle = rootStyles[params.variant] || {}

        return {
          root: {
            ...matchedStyle,
            borderRadius: theme.defaultRadius,
            transition: 'background 150ms ease-in-out'
          },
          icon: {
            marginRight: 10
          }
        }
      }
    },
    Stepper: {
      styles: (theme, params: StepperStylesParams) => {
        const filledColors = theme.fn.variant({
          variant: 'filled',
          color: params.color || theme.primaryColor,
          primaryFallback: false
        })
        const lightColors = theme.fn.variant({
          variant: 'light',
          color: params.color || theme.primaryColor,
          primaryFallback: false
        })

        return {
          stepIcon: {
            backgroundColor: theme.colors.carbon[1],
            borderColor: theme.colors.carbon[4],
            color: theme.colors.carbon[8],
            '&[data-progress]': {
              backgroundColor: filledColors.background,
              color: filledColors.color
            },
            '&[data-completed]': {
              backgroundColor: lightColors.background,
              color: lightColors.color
            }
          },
          stepCompletedIcon: {
            color: lightColors.color,
            '> svg': {
              width: 14,
              height: 14
            }
          },
          separator: {
            borderColor: theme.colors.carbon[4]
          },
          verticalSeparator: {
            borderColor: theme.colors.carbon[4]
          }
        }
      }
    },
    Alert: {
      defaultProps: {
        color: 'peacock'
      },
      styles: (theme, params: AlertStylesParams) => {
        return {
          root: {
            borderRadius: 0,
            border: 'none',
            borderLeft: `2px solid ${theme.fn.themeColor(params.color, 7)}`,
            color: theme.fn.themeColor(params.color, 9),
            backgroundColor: theme.fn.themeColor(params.color, 1)
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
        transition: 'fade',
        transitionDuration: 200,
        transitionTimingFunction: 'ease'
      },
      styles: (theme, params: InputStylesParams) => {
        const diffSizeStyles: Record<string, Record<string, CSSObject>> = {
          sm: {
            label: {
              lineHeight: '20px',
              marginBottom: 8
            },
            input: {
              height: 40,
              minHeight: 40,
              lineHeight: '38px'
            }
          }
        }
        const matches = diffSizeStyles[params.size] || { label: {}, input: {} }

        return {
          label: matches.label,
          input: {
            ...matches.input,
            color: theme.colors.carbon[8],
            '&:disabled': {
              opacity: 1
            }
          },
          item: {
            transition: 'background 150ms ease-in-out',
            color: theme.colors.carbon[8],
            '&[data-hovered]': {
              color: theme.colors.carbon[8],
              backgroundColor: theme.colors.carbon[3]
            },
            '&[data-selected]': {
              color: theme.colors.peacock[7],
              backgroundColor: 'transparent',
              '&:hover': {
                backgroundColor: theme.colors.carbon[3]
              }
            }
          }
        }
      }
    },
    MultiSelect: {
      styles: (theme, params: MultiSelectStylesParams) => {
        const diffSizeStyles: Record<string, Record<string, CSSObject>> = {
          sm: {
            values: {
              height: 38,
              minHeight: 38,
              lineHeight: '38px'
            }
          }
        }
        const matches = diffSizeStyles[params.size] || { values: {} }
        return {
          values: {
            ...matches.values
          }
        }
      }
    },
    TextInput: {
      styles: getInputStyles
    },
    PasswordInput: {
      styles: getInputStyles
    },
    NumberInput: {
      styles: getInputStyles
    },
    Textarea: {
      styles: (theme, params) => {
        const styles = getInputStyles(theme, params)
        styles.input.height = undefined
        return styles
      }
    },
    Badge: {
      defaultProps: {
        color: 'peacock'
      },
      styles(theme, params: BadgeStylesParams) {
        const color = params.color ?? theme.primaryColor
        const mainShade = color.includes('carbon') ? 9 : 7

        const sizes = {
          xs: 11,
          sm: 12,
          md: 13,
          lg: 14,
          xl: 16
        }

        const styles: Record<string, CSSObject> = {
          dot: {
            border: 'none',
            textTransform: 'capitalize',
            fontWeight: 400,
            fontSize: theme.fn.size({ sizes, size: params.size }),
            backgroundColor: 'transparent',
            color: theme.fn.themeColor(theme.primaryColor, 8),

            '&:before': {
              backgroundColor: theme.fn.themeColor(color, 7)
            }
          },
          outline: {
            color: theme.fn.themeColor(color, mainShade),
            borderColor: theme.fn.themeColor(color, 4)
          },
          light: {
            backgroundColor: theme.fn.themeColor(color, 1),
            color: theme.fn.themeColor(color, mainShade)
          },
          filled: {
            backgroundColor: theme.fn.themeColor(color, mainShade),
            color: theme.white
          }
        }

        return {
          root: {
            ...styles[params.variant]
          }
        }
      }
    },
    Checkbox: {
      styles(theme, params: CheckboxStylesParams) {
        const withThemeColor = (shade: number) => theme.fn.themeColor(params.color ?? theme.primaryColor, shade)
        return {
          input: {
            borderRadius: 4,
            borderColor: withThemeColor(6),

            '&:checked:not(:disabled)': {
              backgroundColor: withThemeColor(9),
              borderColor: withThemeColor(9)
            },
            '&:disabled:checked': {
              backgroundColor: theme.colors.carbon[6],
              borderColor: theme.colors.carbon[6]
            }
          },
          label: {
            color: withThemeColor(8),

            '&[data-disabled]': {
              color: theme.colors.carbon[6]
            }
          }
        }
      }
    },
    Divider: {
      styles(theme) {
        return {
          root: {
            borderColor: theme.colors.carbon[4]
          }
        }
      }
    },
    Card: {
      defaultProps: {
        shadow: 'xs',
        withBorder: true
      },
      styles: (theme) => {
        return {
          root: {
            backgroundColor: theme.colors.carbon[0]
          }
        }
      }
    },
    Paper: {
      styles: (theme, params: PaperStylesParams) => {
        return {
          root: {
            backgroundColor: theme.colors.carbon[0],
            borderColor: params.withBorder ? theme.colors.carbon[3] : 'transparent'
          }
        }
      }
    },
    Drawer: {
      defaultProps: (theme) => ({
        overlayColor: theme.colors.carbon[2],
        overlayOpacity: 0.9,
        overlayBlur: 3
      })
    },
    Modal: {
      defaultProps: (theme) => ({
        shadow: 'xl',
        padding: 0,
        exitTransitionDuration: 200,
        overlayColor: theme.colors.carbon[2],
        overlayOpacity: 0.9,
        overlayBlur: 3
      }),
      styles: (theme) => ({
        modal: {
          border: `1px solid ${theme.colors.carbon[4]}`
        },
        header: {
          borderTopLeftRadius: theme.defaultRadius,
          borderTopRightRadius: theme.defaultRadius,
          padding: '16px 16px 16px 24px',
          margin: 0,
          backgroundColor: theme.colors.carbon[1]
        },
        title: {
          fontWeight: 700,
          fontSize: 16,
          lineHeight: 1.5,
          color: theme.colors.carbon[9]
        },
        body: {
          padding: 24,
          backgroundColor: theme.colors.carbon[0],
          borderBottomLeftRadius: theme.defaultRadius,
          borderBottomRightRadius: theme.defaultRadius
        }
      })
    },
    Table: {
      styles: (theme, params: TableStylesParams) => {
        const colBorderStyles: CSSObject = params.withColumnBorders
          ? {
              'thead th:last-of-type, tbody td:last-of-type': {
                borderLeft: 'none'
              }
            }
          : {}
        const borderStyles: CSSObject = params.withBorder
          ? {
              borderCollapse: 'initial',
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
          root: {
            thead: {
              backgroundColor: theme.colors.carbon[2]
            },
            ...borderStyles,
            ...colBorderStyles
          }
        }
      }
    },
    Switch: {
      styles: (theme, params: SwitchStylesParams) => {
        const color = params.color ?? theme.primaryColor

        return {
          root: {
            '& input:checked+.mantine-Switch-track': {
              backgroundColor: theme.fn.themeColor(color, 9),
              borderColor: theme.fn.themeColor(color, 9)
            },
            '& input:disabled+.mantine-Switch-track': {
              backgroundColor: theme.fn.themeColor(color, 4),
              borderColor: theme.fn.themeColor(color, 4)
            },
            '& input:disabled:checked+.mantine-Switch-track': {
              backgroundColor: theme.fn.themeColor(color, 7),
              borderColor: theme.fn.themeColor(color, 7)
            },

            '& input+*>.mantine-Switch-trackLabel': {
              color: theme.fn.themeColor(color, 8)
            },
            '& input:checked+*>.mantine-Switch-trackLabel': {
              color: theme.fn.themeColor(color, 0)
            }
          },
          track: {
            backgroundColor: theme.fn.themeColor(color, 5),
            borderColor: theme.fn.themeColor(color, 5)
          },
          trackLabel: {
            color: theme.fn.themeColor(color, 8)
          }
        }
      }
    },
    Radio: {
      styles(theme, params) {
        const color = params.color?.includes('.') ? params.color.split('.')[0] : (params.color ?? 'carbon')
        const shade = color.includes('carbon') ? 9 : 7
        const size = params.size ?? 'sm'

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

        return {
          icon: {
            width: theme.fn.size({ sizes: iconSizes, size }),
            height: theme.fn.size({ sizes: iconSizes, size }),
            top: `calc(50% - ${theme.fn.size({ sizes: iconSizes, size }) / 2}px)`,
            left: `calc(50% - ${theme.fn.size({ sizes: iconSizes, size }) / 2}px)`
          },
          label: {
            lineHeight: `${theme.fn.size({ sizes, size })}px`
          },
          radio: {
            width: theme.fn.size({ sizes, size }),
            height: theme.fn.size({ sizes, size }),
            borderRadius: theme.fn.size({ sizes, size }),
            borderColor: theme.colors[color][6],

            '&:checked:not(:disabled)': {
              background: theme.colors[color][shade],
              borderColor: theme.colors[color][shade]
            },

            '&:disabled:not(:checked)': {
              background: theme.colors.carbon[4],
              borderColor: theme.colors.carbon[6],
              cursor: 'not-allowed'
            },

            '&:disabled:checked': {
              color: theme.colors.carbon[2],
              background: theme.colors.carbon[6],
              borderColor: theme.colors.carbon[6],
              cursor: 'not-allowed'
            }
          }
        }
      }
    },
    SegmentedControl: {
      styles: (theme) => {
        return {
          root: {
            backgroundColor: theme.colors.carbon[4]
          },
          active: {
            borderRadius: 6,
            backgroundColor: theme.colors.carbon[0]
          },
          labelActive: {
            color: `${theme.colors.carbon[9]} !important`
          },
          label: {
            color: `${theme.colors.carbon[7]} !important`
          },
          disabled: {
            color: `${theme.colors.carbon[6]} !important`
          },
          control: {
            borderColor: `${theme.colors.carbon[5]} !important`
          }
        }
      }
    },
    Tooltip: {
      defaultProps: {
        withArrow: true
      },
      styles(theme) {
        const styles = {
          dark: {
            backgroundColor: theme.colors.carbon[8],
            color: theme.colors.carbon[1]
          },
          light: {
            backgroundColor: theme.colors.carbon[8],
            color: theme.colors.carbon[1]
          }
        }

        return {
          tooltip: {
            ...styles[theme.colorScheme]
          }
        }
      }
    },

    ActionIcon: {
      defaultProps: {
        color: 'carbon'
      },
      styles(theme, params) {
        const color = params.color ?? theme.primaryColor
        const shade = color.includes('carbon') ? 8 : 7

        const variantStyles: Record<string, CSSObject> = {
          default: {
            color: theme.fn.themeColor(color, 8),
            backgroundColor: theme.fn.themeColor(color, 2),
            borderColor: theme.fn.themeColor(color, 5),

            '&:hover': {
              color: theme.fn.themeColor(color, 9),
              backgroundColor: theme.fn.themeColor(color, 2),
              borderColor: theme.fn.themeColor(color, 6)
            },
            '&:active': {
              color: theme.fn.themeColor(color, 9),
              backgroundColor: theme.fn.themeColor(color, 4),
              borderColor: theme.fn.themeColor(color, 6)
            },

            '&:disabled': {
              color: theme.fn.themeColor(color, 6),
              backgroundColor: theme.fn.themeColor(color, 2),
              borderColor: theme.fn.themeColor(color, 5)
            }
          },
          transparent: {
            backgroundColor: 'transparent',
            color: theme.fn.themeColor(color, shade)
          },
          subtle: {
            backgroundColor: 'transparent',
            color: theme.fn.themeColor(color, 8),

            '&:hover': {
              backgroundColor: theme.fn.themeColor(color, 2)
            },
            '&:active': {
              backgroundColor: theme.fn.themeColor(color, 4)
            },
            '&:disabled': {
              color: theme.fn.themeColor(color, 6)
            }
          },
          outline: {
            backgroundColor: 'transparent',
            color: theme.fn.themeColor(color, shade),
            border: `1px solid ${theme.fn.themeColor(color, 4)}`,
            '&:hover': {
              backgroundColor: theme.fn.themeColor(color, 2)
            }
          },
          filled: {
            backgroundColor: theme.fn.themeColor(color, color.includes('carbon') ? 9 : 7),
            color: theme.white
          },
          light: {
            backgroundColor: theme.fn.themeColor(color, 3),
            color: theme.fn.themeColor(color, 8),
            '&:hover': {
              backgroundColor: theme.fn.themeColor(color, 4)
            },
            '&:active': {
              backgroundColor: theme.fn.themeColor(color, 5)
            }
          }
        }
        return {
          root: {
            ...variantStyles[params.variant]
          }
        }
      }
    },
    RangeCalendar: {
      styles: (theme) => ({
        day: {
          '&[data-first-in-range]': {
            borderTopLeftRadius: theme.defaultRadius,
            borderBottomLeftRadius: theme.defaultRadius
          },
          '&[data-last-in-range]': {
            borderTopRightRadius: theme.defaultRadius,
            borderBottomRightRadius: theme.defaultRadius
          }
        }
      })
    },
    Anchor: {
      styles: (theme, params) => {
        const color = params.color ?? 'peacock'
        const shade = color.includes('carbon') ? 9 : theme.fn.primaryShade()
        return {
          root: {
            color: theme.fn.themeColor(color, shade),
            '&:hover': {
              color: theme.fn.themeColor(color, shade)
            }
          }
        }
      }
    }
  }
}

export type Theme = MantineThemeOverride & {
  colors: ColorMap
}

export const useTheme = (colorScheme: 'light' | 'dark'): Theme => {
  const isLight = colorScheme === 'light'
  const colors = isLight ? light : dark

  return {
    ...theme,
    colorScheme,
    colors,
    white: colors.carbon[0],
    black: colors.carbon[8]
  }
}
