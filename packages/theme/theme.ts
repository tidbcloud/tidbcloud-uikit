import {
  CSSObject,
  MantineThemeOverride,
  NavLinkStylesParams,
  AlertStylesParams,
  InputStylesParams,
  SkeletonStylesParams,
  keyframes,
  MultiSelectStylesParams
} from '@mantine/core'

import { getButtonStyles } from '../components/Button/style'
import { getInputStyles } from '../components/Input/style'

import { FONT_FAMILY } from './font'

export const theme: MantineThemeOverride = {
  primaryColor: 'cyan',
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
  components: {
    Button: {
      styles: getButtonStyles
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
              backgroundImage: `linear-gradient(90deg,${theme.colors.gray[1]},${theme.colors.gray[3]},${theme.colors.gray[3]},${theme.colors.gray[1]})`,
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
            gap: 16,
            border: 0
          },
          tab: {
            color: theme.colors.gray[6],
            fontWeight: 600,
            paddingLeft: 0,
            paddingRight: 0,
            '&[data-active]': {},
            '&:hover': {
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
      styles: {
        dropdown: {
          boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.05)'
        }
      }
    },
    NavLink: {
      defaultProps: {
        px: 10,
        lh: 1.5,
        fw: 500
      },
      styles: (theme, params: NavLinkStylesParams) => {
        const rootStyles: Record<string, CSSObject> = {
          light: {
            color: theme.colors.gray[7],
            '&:hover': {
              color: theme.colors.gray[8],
              backgroundColor: theme.colors.gray[2]
            },
            '&:active': {
              color: theme.colors.gray[8],
              backgroundColor: theme.colors.gray[3]
            },
            '&[data-active]': {
              color: theme.colors.sky[7],
              backgroundColor: theme.colors.sky[2],
              '&:hover': {
                backgroundColor: theme.colors.sky[2]
              },
              '&:active': {
                backgroundColor: theme.colors.sky[2]
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
      styles: (theme) => ({
        stepIcon: {
          backgroundColor: theme.white,
          borderColor: theme.colors.gray[3]
        },
        separator: {
          borderColor: theme.colors.gray[3]
        },
        verticalSeparator: {
          borderColor: theme.colors.gray[3]
        }
      })
    },
    Alert: {
      styles: (theme, params: AlertStylesParams) => {
        const colorName = params.color || 'cyan'
        const color = theme.colors[colorName][8]
        return {
          root: {
            borderRadius: 0,
            border: 'none',
            borderLeft: `2px solid ${theme.colors[colorName][5]}`,
            backgroundColor: theme.fn.rgba(theme.colors[colorName][5], 0.1)
          },
          title: {
            color
          },
          icon: {
            color,
            marginRight: 4
          },
          message: {
            color
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
            color: theme.colors.gray[8],
            '&:disabled': {
              opacity: 1
            }
          },
          item: {
            '&[data-selected]': {
              '&, &:hover': {
                backgroundColor: 'inherit',
                color: theme.other.primary
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
    Checkbox: {
      styles() {
        return {
          input: {
            borderRadius: 4
          }
        }
      }
    },
    Divider: {
      styles(theme) {
        return {
          root: {
            borderColor: theme.colors.gray[3]
          }
        }
      }
    },
    Card: {
      defaultProps: {
        shadow: 'xs',
        withBorder: true
      }
    },
    Modal: {
      defaultProps: (theme) => ({
        shadow: '0px 24px 48px rgba(0, 0, 0, 0.07)',
        padding: 0,
        exitTransitionDuration: 200,
        overlayColor: theme.colors.gray[1],
        overlayOpacity: 0.9,
        overlayBlur: 3
      }),
      styles: (theme) => ({
        header: {
          padding: '16px 16px 16px 24px',
          margin: 0,
          backgroundColor: theme.colors.gray[1]
        },
        title: {
          fontWeight: 700,
          fontSize: 16,
          lineHeight: 1.5,
          color: theme.colors.gray[9]
        },
        body: {
          padding: 24
        }
      })
    }
  }
}
