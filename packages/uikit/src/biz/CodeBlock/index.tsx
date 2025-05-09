import React, { useMemo, useState } from 'react'

import { useLocalStorage } from '../../hooks/index.js'
import { IconChevronVerticalExpand, IconChevronVerticalShrink, IconCheck, IconCopy01 } from '../../icons/index.js'
import { ActionIcon, Box, BoxProps, CopyButton, Group, Code, CodeProps, HoverCard } from '../../primitive/index.js'
import { Prism, PrismProps } from '../../primitive/Prism/index.js'
import { mergeSxList, mergeStylesList } from '../../utils/index.js'

function useFold(persistenceKey?: string) {
  const foldPersistenceKey = `${persistenceKey}.codeblock.fold`
  const [persistentFolded, setPersistentFolded] = useLocalStorage({
    key: foldPersistenceKey,
    defaultValue: true,
    getInitialValueInEffect: false
  })
  const [memoryFolded, setMemoryFolded] = useState(true)
  const persistent = !!persistenceKey

  const folded = persistent ? persistentFolded : memoryFolded
  const setFolded: (v: boolean) => void = persistent ? setPersistentFolded : setMemoryFolded
  return { folded, setFolded }
}

export interface CodeBlockProps extends BoxProps {
  children: PrismProps['children']
  language?: PrismProps['language']

  copyContent?: string
  onCopyClick?: () => void

  codeRender?: (content: string) => React.ReactNode
  codeHighlightProps?: Omit<PrismProps, 'language' | 'children'>

  foldProps?: {
    defaultHeight?: number
    persistenceKey?: string
    iconVisible?: boolean
    onIconClick?: (folded: boolean) => void
  }

  withBorder?: boolean
}

export const CodeBlock = ({
  language = 'bash',
  codeRender,
  children,
  copyContent,
  onCopyClick,
  codeHighlightProps,
  foldProps,
  withBorder = true,
  ...rest
}: CodeBlockProps) => {
  const { defaultHeight, persistenceKey, iconVisible: foldIconVisible, onIconClick: onFoldIconClick } = foldProps || {}
  const { folded, setFolded } = useFold(persistenceKey)

  const mah = useMemo(() => {
    if (defaultHeight) {
      return folded ? defaultHeight : undefined
    }
    if (foldIconVisible) {
      return folded ? 200 : undefined
    }
    return undefined
  }, [foldIconVisible, folded, defaultHeight])

  const codeScrollAreaPadding = foldIconVisible ? 48 : 24

  return (
    <Box {...rest} sx={mergeSxList([{ position: 'relative' }, rest?.sx])}>
      <Box
        p="md"
        mah={mah}
        bg="carbon.2"
        sx={(theme) => ({
          border: `1px solid ${withBorder ? theme.colors.carbon[4] : 'transparent'}`,
          borderRadius: theme.defaultRadius,
          overflow: 'auto'
        })}
      >
        <Box sx={{ paddingRight: codeScrollAreaPadding }}>
          {codeRender ? (
            codeRender(children)
          ) : (
            <Prism
              {...codeHighlightProps}
              noCopy
              language={language}
              styles={mergeStylesList([
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
                codeHighlightProps?.styles
              ])}
            >
              {children}
            </Prism>
          )}
        </Box>
      </Box>

      <Group gap={4} sx={(theme) => ({ position: 'absolute', top: 16, right: 16, color: theme.colors.carbon[8] })}>
        {foldIconVisible && (
          <HoverCard withArrow position="top" shadow="xs">
            <HoverCard.Target>
              <ActionIcon
                size="sm"
                variant="subtle"
                onClick={() => {
                  const v = !folded
                  setFolded(v)
                  onFoldIconClick?.(v)
                }}
              >
                {folded ? (
                  <IconChevronVerticalExpand size={14} strokeWidth={2.5} />
                ) : (
                  <IconChevronVerticalShrink size={14} strokeWidth={2.5} />
                )}
              </ActionIcon>
            </HoverCard.Target>
            <HoverCard.Dropdown p="xs">{folded ? 'Expand' : 'Collapse'}</HoverCard.Dropdown>
          </HoverCard>
        )}

        <CopyButton value={copyContent ?? children} timeout={2000}>
          {({ copied, copy }) => (
            <HoverCard withArrow position="top" shadow="xs">
              <HoverCard.Target>
                <ActionIcon
                  aria-label="Copy"
                  size="sm"
                  variant="subtle"
                  onClick={() => {
                    copy()
                    onCopyClick?.()
                  }}
                >
                  {copied ? <IconCheck size={14} /> : <IconCopy01 size={14} strokeWidth={2.5} />}
                </ActionIcon>
              </HoverCard.Target>
              <HoverCard.Dropdown p="xs">{copied ? 'Copied' : 'Copy'}</HoverCard.Dropdown>
            </HoverCard>
          )}
        </CopyButton>
      </Group>
    </Box>
  )
}

export interface CopyTextProps extends CodeProps {
  value: string
}

export const CopyText = ({ children, value, ...rest }: React.PropsWithChildren<CopyTextProps>) => {
  return (
    <Code
      bg="carbon.3"
      {...rest}
      p={8}
      sx={(theme, u) => {
        return mergeSxList([
          {
            display: 'inline-flex',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: theme.defaultRadius
          },
          rest?.sx
        ])(theme, u)
      }}
    >
      {children}
      <CopyButton value={value} timeout={2000}>
        {({ copied, copy }) => (
          <HoverCard withArrow position="top" shadow="xs">
            <HoverCard.Target>
              <ActionIcon
                aria-label="Copy"
                variant="subtle"
                size="sm"
                ml={8}
                display="inline-block"
                onClick={() => {
                  copy()
                }}
              >
                {copied ? <IconCheck size={14} /> : <IconCopy01 size={14} strokeWidth={2.5} />}
              </ActionIcon>
            </HoverCard.Target>
            <HoverCard.Dropdown p="xs">{copied ? 'Copied' : 'Copy'}</HoverCard.Dropdown>
          </HoverCard>
        )}
      </CopyButton>
    </Code>
  )
}
