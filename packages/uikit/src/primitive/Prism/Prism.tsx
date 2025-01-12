import {
  ActionIcon,
  useMantineTheme,
  Tooltip,
  // DefaultProps,
  // Selectors,
  Box,
  ScrollArea,
  // useComponentDefaultProps,
  MantineColor,
  // MantineNumberSize,
  MantineTheme,
  rgba,
  MantineRadius,
  useProps,
  getThemeColor,
  BoxProps,
  ElementProps,
  Factory,
  factory,
  StylesApiProps,
  useStyles
} from '@mantine/core'
import { useClipboard, useColorScheme } from '@mantine/hooks'
import Highlight, { defaultProps, Language, PrismTheme } from 'prism-react-renderer'

import { CopyIcon } from './CopyIcon.js'
import { getPrismTheme as defaultGetPrismTheme } from './prism-theme.js'
import usePrismStyles from './Prism.styles.js'

export type PrismStylesNames = 'scrollArea' | 'root' | 'code' | 'copy' | 'line' | 'lineNumber' | 'lineContent'

export interface PrismProps extends BoxProps, StylesApiProps<PrismFactory>, ElementProps<'div'> {
  /** Code which will be highlighted */
  children: string

  /** Programming language that should be highlighted */
  language: Language

  /** True to remove copy to clipboard button */
  noCopy?: boolean

  /** Copy button tooltip */
  copyLabel?: string

  /** Copy button tooltip in copied state */
  copiedLabel?: string

  /** Display line numbers */
  withLineNumbers?: boolean

  /** Highlight line at given line number with color from theme.colors */
  highlightLines?: Record<string, { color: MantineColor; label?: string }>

  /** Force color scheme, defaults to theme.colorScheme */
  colorScheme?: 'dark' | 'light'

  /** Change scroll area component */
  scrollAreaComponent?: any

  /** Defines whether the code should be trimmed, defaults to true */
  trim?: boolean

  /** Key of theme.radius or number to set border-radius in px */
  radius?: MantineRadius

  /** Provide custom color scheme */
  getPrismTheme?(theme: MantineTheme, colorScheme: 'light' | 'dark'): PrismTheme
}

export type PrismFactory = Factory<{
  props: PrismProps
  ref: HTMLDivElement
  stylesNames: PrismStylesNames
}>

const prismDefaultProps: Partial<PrismProps> = {
  noCopy: false,
  copyLabel: 'Copy code',
  copiedLabel: 'Copied',
  withLineNumbers: false,
  trim: true,
  highlightLines: {},
  scrollAreaComponent: ScrollArea,
  getPrismTheme: defaultGetPrismTheme
}

export const Prism = factory<PrismFactory>((_props, ref) => {
  const props = useProps('CodeHighlight', prismDefaultProps, _props)
  const {
    className,
    children,
    language,
    noCopy,
    classNames,
    styles,
    copyLabel,
    copiedLabel,
    withLineNumbers,
    highlightLines,
    scrollAreaComponent: ScrollAreaComponent,
    colorScheme,
    trim,
    unstyled,
    radius,
    getPrismTheme,
    ...others
  } = useProps('Prism', prismDefaultProps, props)
  const code = trim && typeof children === 'string' ? children.trim() : children
  const maxLineSize = code.split('\n').length.toString().length

  const mantineColorScheme = useColorScheme()
  const theme = useMantineTheme()
  const clipboard = useClipboard()
  const _colorScheme = colorScheme || mantineColorScheme
  const { classes } = usePrismStyles({
    colorScheme: _colorScheme,
    native: ScrollAreaComponent !== ScrollArea,
    maxLineSize,
    radius: radius!
  })
  const getStyles = useStyles<PrismFactory>({
    name: 'Prism',
    props,
    classNames,
    classes,
    styles: styles as any,
    unstyled
  })

  return (
    <Box {...getStyles('root')} {...others} ref={ref} translate="no">
      {!noCopy && (
        <Tooltip
          label={clipboard.copied ? copiedLabel : copyLabel}
          position="left"
          withArrow
          arrowSize={6}
          offset={6}
          color={clipboard.copied ? 'teal' : undefined}
          unstyled={unstyled}
        >
          <ActionIcon
            {...getStyles('copy')}
            aria-label={clipboard.copied ? copiedLabel : copyLabel}
            onClick={() => clipboard.copy(code)}
            unstyled={unstyled}
          >
            <CopyIcon copied={clipboard.copied} />
          </ActionIcon>
        </Tooltip>
      )}

      <Highlight {...defaultProps} theme={getPrismTheme!(theme, _colorScheme)} code={code} language={language}>
        {({ className: inheritedClassName, style: inheritedStyle, tokens, getLineProps, getTokenProps }) => (
          <ScrollAreaComponent {...getStyles('scrollArea')} dir="ltr">
            <pre {...getStyles('code', { className: inheritedClassName, style: inheritedStyle })} dir="ltr">
              {tokens
                .map((line, index) => {
                  if (index === tokens.length - 1 && line.length === 1 && line[0].content === '\n') {
                    return null
                  }

                  const lineNumber = index + 1
                  const lineProps = getLineProps({ line, key: index })
                  const shouldHighlight = lineNumber in highlightLines!
                  const lineThemeColor = getThemeColor(highlightLines?.[lineNumber]?.color, theme)
                  const lineColor = lineThemeColor
                  // _colorScheme === 'dark'
                  //   ? rgba(theme.fn.themeColor(highlightLines?.[lineNumber]?.color, 9), 0.25)
                  //   : theme.fn.themeColor(highlightLines?.[lineNumber]?.color, 0)

                  return (
                    <div
                      {...lineProps}
                      {...getStyles('line', {
                        className: lineProps.className,
                        style: { ...(shouldHighlight ? { backgroundColor: lineColor } : null) }
                      })}
                    >
                      {withLineNumbers && (
                        <div
                          {...getStyles('lineNumber', {
                            style: { color: shouldHighlight ? lineThemeColor : undefined }
                          })}
                        >
                          {highlightLines?.[lineNumber]?.label || lineNumber}
                        </div>
                      )}

                      <div {...getStyles('lineContent')}>
                        {line.map((token, key) => {
                          const tokenProps = getTokenProps({ token, key })
                          return (
                            <span
                              {...tokenProps}
                              style={{
                                ...tokenProps.style,
                                color: shouldHighlight
                                  ? // ? theme.f[n.themeColor(
                                    //     highlightLines?.[lineNumber]?.color,
                                    //     _colorScheme === 'dark' ? 5 : 8
                                    //   )]
                                    lineThemeColor
                                  : (tokenProps?.style?.color as string)
                              }}
                            />
                          )
                        })}
                      </div>
                    </div>
                  )
                })
                .filter(Boolean)}
            </pre>
          </ScrollAreaComponent>
        )}
      </Highlight>
    </Box>
  )
})

Prism.displayName = '@mantine/prism/Prism'
