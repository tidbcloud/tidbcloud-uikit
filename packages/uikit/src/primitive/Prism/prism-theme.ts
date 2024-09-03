// This file is copied from
// https://github.com/mantinedev/mantine/blob/5.10.5/src/mantine-prism/src/Prism/prism-theme.ts
// and will be modified to sync with Figma code colors design

import { MantineTheme } from '@mantine/core'
import { PrismTheme } from 'prism-react-renderer'

export const dark = (theme: MantineTheme): PrismTheme => ({
  plain: {
    color: theme.colors.carbon[5],
    backgroundColor: theme.colors.carbon[8]
  },

  styles: [
    {
      types: ['comment'],
      style: {
        color: theme.colors.carbon[7]
      }
    },
    {
      types: ['string', 'inserted', 'selector', 'atrule'],
      style: {
        color: theme.colors.aqua[4]
      }
    },
    {
      types: ['number'],
      style: {
        color: theme.colors.peacock[4]
      }
    },
    {
      types: ['builtin', 'char', 'constant', 'function'],
      style: {
        color: theme.colors.yellow[5]
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: theme.colors.carbon[6]
      }
    },
    {
      types: ['variable'],
      style: {
        color: theme.colors.carbon[6]
      }
    },
    {
      types: ['class-name', 'attr-name'],
      style: {
        color: theme.colors.yellow[5]
      }
    },
    {
      types: ['tag', 'deleted'],
      style: {
        color: theme.colors.red[6]
      }
    },
    {
      types: ['operator'],
      style: {
        color: theme.colors.carbon[6]
      }
    },
    {
      types: ['boolean'],
      style: {
        color: theme.colors.red[6]
      }
    },
    {
      types: ['keyword'],
      style: {
        color: theme.colors.violet[3]
      }
    },
    {
      types: ['doctype'],
      style: {
        color: theme.colors.carbon[6]
      }
    },
    {
      types: ['url'],
      style: {
        color: theme.colors.carbon[6]
      }
    }
  ]
})

export const light = (theme: MantineTheme): PrismTheme => ({
  plain: {
    color: theme.colors.carbon[9],
    backgroundColor: theme.fn.rgba(theme.colors.carbon[1], 0.65)
  },

  styles: [
    {
      types: ['comment'],
      style: {
        color: theme.colors.carbon[7]
      }
    },
    {
      types: ['string', 'inserted'],
      style: {
        color: theme.colors.violet[9]
      }
    },
    {
      types: ['number'],
      style: {
        color: theme.colors.blue[7]
      }
    },
    {
      types: ['builtin', 'char', 'constant', 'function', 'selector', 'atrule'],
      style: {
        color: theme.colors.thyme[9]
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: theme.colors.carbon[8]
      }
    },
    {
      types: ['variable'],
      style: {
        color: theme.colors.violet[9]
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: theme.colors.green[9]
      }
    },
    {
      types: ['class-name'],
      style: {
        color: theme.colors.red[9]
      }
    },
    {
      types: ['tag', 'deleted'],
      style: {
        color: theme.colors.violet[9]
      }
    },
    {
      types: ['operator'],
      style: {
        color: theme.colors.red[9]
      }
    },
    {
      types: ['boolean'],
      style: {
        color: theme.colors.red[9]
      }
    },
    {
      types: ['keyword'],
      style: {
        color: theme.colors.red[9]
      }
    },
    {
      types: ['doctype'],
      style: {
        color: theme.colors.carbon[8]
      }
    },
    {
      types: ['url'],
      style: {
        color: theme.colors.carbon[8]
      }
    }
  ]
})

export const getPrismTheme = (theme: MantineTheme, colorScheme: 'light' | 'dark') =>
  colorScheme === 'dark' ? dark(theme) : light(theme)
