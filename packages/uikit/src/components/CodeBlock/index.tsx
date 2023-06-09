import { ActionIcon, Box, BoxProps, CopyButton, Group, Tooltip } from '@mantine/core'
import { Prism, PrismProps } from '@mantine/prism'
import React, { useMemo, useState } from 'react'

import { Icon } from '../../icons'
import { mergeStyles, mergeSx } from '../../utils'

interface CodeBlockProps extends BoxProps {
  language?: PrismProps['language']

  codeRender?: (content: string) => React.ReactNode
  children: PrismProps['children']

  copyContent?: string
  onCopyClick?: () => void

  prismProps?: Omit<PrismProps, 'language' | 'children'>

  defaultHeight?: number
  showExpand?: boolean
  onExpandClick?: () => void
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  language = 'bash',
  codeRender,
  copyContent,
  onCopyClick,
  defaultHeight,
  showExpand = false,
  onExpandClick,
  children,
  prismProps,
  ...rest
}) => {
  const [expanded, setExpanded] = useState(false)

  const mah = useMemo(() => {
    if (defaultHeight) {
      return expanded ? undefined : defaultHeight
    }
    if (showExpand) {
      return expanded ? undefined : 200
    }
    return undefined
  }, [showExpand, expanded, defaultHeight])

  return (
    <Box {...rest} sx={(theme) => mergeSx(theme, { position: 'relative' }, rest?.sx)}>
      <Box
        p="md"
        mah={mah}
        bg="gray.1"
        sx={(theme) => ({
          border: `1px solid ${theme.colors.gray[4]}`,
          borderRadius: theme.defaultRadius,
          overflow: 'auto'
        })}
      >
        {codeRender ? (
          codeRender(children)
        ) : (
          <Prism
            {...prismProps}
            language={language}
            styles={(theme, params) =>
              mergeStyles(
                theme,
                params,
                {
                  code: {
                    padding: 0,
                    backgroundColor: `transparent !important`,
                    wordBreak: 'break-all'
                  },
                  line: {
                    paddingLeft: 0
                  },
                  lineContent: {
                    whiteSpace: 'pre-wrap'
                  }
                },
                prismProps?.styles || {}
              )
            }
          >
            {children}
          </Prism>
        )}
      </Box>

      <Group spacing={4} sx={(theme) => ({ position: 'absolute', top: 16, right: 16, color: theme.colors.gray[7] })}>
        {showExpand && (
          <Tooltip label={expanded ? 'Collapse' : 'Expand'} withArrow position="top">
            <ActionIcon
              variant="transparent"
              size="sm"
              onClick={() => {
                const v = !expanded
                setExpanded(v)
                onExpandClick?.()
              }}
            >
              {expanded ? (
                <Icon name="ChevronVerticalShrink" size={14} strokeWidth={2.5} />
              ) : (
                <Icon name="ChevronVerticalExpand" size={14} strokeWidth={2.5} />
              )}
            </ActionIcon>
          </Tooltip>
        )}

        <CopyButton value={copyContent ?? children} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="top">
              <ActionIcon
                variant="transparent"
                size="sm"
                onClick={() => {
                  copy()
                  onCopyClick?.()
                }}
              >
                {copied ? <Icon name="Check" size={14} /> : <Icon name="Copy01" size={14} strokeWidth={2.5} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Group>
    </Box>
  )
}
