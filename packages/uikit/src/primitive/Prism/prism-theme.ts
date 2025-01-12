// This file is copied from
// https://github.com/mantinedev/mantine/blob/5.10.5/src/mantine-prism/src/Prism/prism-theme.ts
// and will be modified to sync with Figma code colors design

import { MantineTheme, rgba } from '@mantine/core'
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
    backgroundColor: rgba(theme.colors.carbon[1], 0.65)
  },

  styles: [
    // from sql editor
    {
      types: ['comment', 'meta'],
      style: {
        color: theme.colors.green[8]
      }
    },
    {
      types: ['keyword', 'strong'],
      style: {
        color: theme.colors.sky[8]
      }
    },
    {
      types: ['number'],
      style: {
        color: theme.colors.rosy[8]
      }
    },
    {
      types: ['string'],
      style: {
        color: theme.colors.purple[8]
      }
    },
    {
      types: ['variable'],
      style: {
        color: theme.colors.airy[9]
      }
    },
    {
      types: ['escape'],
      style: {
        color: theme.colors.ocher[8]
      }
    },
    {
      types: ['tag'],
      style: {
        color: theme.colors.aqua[8]
      }
    },
    {
      types: ['heading'],
      style: {
        color: theme.colors.blue[8]
      }
    },
    {
      types: ['quote'],
      style: {
        color: theme.colors.carbon[8]
      }
    },
    {
      types: ['list'],
      style: {
        color: theme.colors.magenta[8]
      }
    },
    {
      types: ['documentMeta'],
      style: {
        color: theme.colors.gray[8]
      }
    },
    {
      types: ['function'],
      style: {
        color: theme.colors.mauve[8]
      }
    },
    {
      types: ['type', 'class-name'],
      style: {
        color: theme.colors.violet[8]
      }
    },
    // other languages
    {
      types: ['builtin', 'char', 'constant', 'selector', 'atrule'],
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
      types: ['attr-name'],
      style: {
        color: theme.colors.green[9]
      }
    },
    {
      types: ['deleted'],
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

export const getPrismTheme = (theme: MantineTheme) => light(theme)
