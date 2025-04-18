import { MantineRadius, getRadius } from '@mantine/core'
import { createStyles } from '@mantine/emotion'

export interface PrismStylesParams {
  colorScheme: 'light' | 'dark'
  native: boolean
  maxLineSize: number
  radius: MantineRadius
}

export default createStyles((theme, { colorScheme, native, maxLineSize, radius }: PrismStylesParams) => ({
  scrollArea: {},

  root: {
    position: 'relative'
  },

  code: {
    boxSizing: 'border-box',
    position: 'relative',
    fontFamily: theme.fontFamilyMonospace,
    lineHeight: 1.7,
    fontSize: 13,
    overflowX: native ? 'auto' : undefined,
    borderRadius: getRadius(radius),
    padding: `${theme.spacing.sm}px 0`,
    marginTop: 0,
    marginBottom: 0
  },

  copy: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs,
    // right: theme.dir === 'ltr' ? theme.spacing.xs : 'unset',
    // left: theme.dir === 'rtl' ? theme.spacing.xs : 'unset',
    zIndex: 2,

    '&, &:hover': {
      backgroundColor: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0]
    }
  },

  line: {
    display: 'flex',
    width: '100%',
    padding: `0 ${theme.spacing.md}px`
  },

  lineNumber: {
    color: colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
    textAlign: 'right',
    width: 8 * maxLineSize,
    marginRight: theme.spacing.xs,
    // marginRight: theme.dir === 'ltr' ? theme.spacing.xs : undefined,
    // marginLeft: theme.dir === 'rtl' ? theme.spacing.xs : undefined,
    userSelect: 'none'
  },

  lineContent: {
    width: '100%'
  }
}))
