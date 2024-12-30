// eslint-disable-next-line no-restricted-imports
import { createTheme, MantineTheme, rgba } from '@mantine/core'

export const dark = (theme: MantineTheme): Record<string, React.CSSProperties> => ({
  '.hljs': {
    color: theme.colors.gray[4],
    backgroundColor: theme.colors.dark[8]
  },
  '.hljs-comment': {
    color: theme.colors.gray[6]
  },
  '.hljs-string, .hljs-inserted, .hljs-selector, .hljs-atrule': {
    color: theme.colors.teal[4]
  },
  '.hljs-number': {
    color: theme.colors.blue[4]
  },
  '.hljs-builtin, .hljs-char, .hljs-constant, .hljs-function': {
    color: theme.colors.orange[5]
  },
  '.hljs-punctuation': {
    color: theme.colors.gray[5]
  },
  '.hljs-variable': {
    color: theme.colors.gray[5]
  },
  '.hljs-class-name, .hljs-attr-name': {
    color: theme.colors.yellow[5]
  },
  '.hljs-tag, .hljs-deleted': {
    color: theme.colors.red[6]
  },
  '.hljs-operator': {
    color: theme.colors.gray[5]
  },
  '.hljs-boolean': {
    color: theme.colors.red[6]
  },
  '.hljs-keyword': {
    color: theme.colors.indigo[3]
  },
  '.hljs-doctype': {
    color: theme.colors.gray[5]
  },
  '.hljs-url': {
    color: theme.colors.gray[5]
  }
})

export const light = (theme: MantineTheme): Record<string, React.CSSProperties> => ({
  '.hljs': {
    color: theme.colors.gray[9],
    backgroundColor: rgba(theme.colors.gray[0], 0.65)
  },
  '.hljs-comment': {
    color: theme.colors.gray[6]
  },
  '.hljs-string, .hljs-inserted': {
    color: theme.colors.indigo[9]
  },
  '.hljs-number': {
    color: theme.colors.blue[7]
  },
  '.hljs-builtin, .hljs-char, .hljs-constant, .hljs-function, .hljs-selector, .hljs-atrule': {
    color: theme.colors.lime[9]
  },
  '.hljs-punctuation': {
    color: theme.colors.gray[7]
  },
  '.hljs-variable': {
    color: theme.colors.violet[9]
  },
  '.hljs-attr-name': {
    color: theme.colors.green[9]
  },
  '.hljs-class-name': {
    color: theme.colors.red[9]
  },
  '.hljs-tag, .hljs-deleted': {
    color: theme.colors.violet[9]
  },
  '.hljs-operator': {
    color: theme.colors.red[9]
  },
  '.hljs-boolean': {
    color: theme.colors.red[9]
  },
  '.hljs-keyword': {
    color: theme.colors.red[9]
  },
  '.hljs-doctype': {
    color: theme.colors.gray[7]
  },
  '.hljs-url': {
    color: theme.colors.gray[7]
  }
})

export const getCodeHighlightTheme = (theme: MantineTheme, colorScheme: 'light' | 'dark') => {
  const styles = colorScheme === 'dark' ? dark(theme) : light(theme)
  return createTheme({
    components: {
      CodeHighlight: {
        styles: () => ({
          code: styles
        })
      }
    }
  })
}
