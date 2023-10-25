import React, { useMemo, useState } from 'react'

import { useLocalStorage } from '../../hooks'
import { IconChevronVerticalExpand, IconChevronVerticalShrink, IconCheck, IconCopy01 } from '../../icons'
import { ActionIcon, Box, BoxProps, CopyButton, Group, Tooltip, Code, CodeProps } from '../../primitive'
import { Prism, PrismProps } from '../../primitive/Prism'
import { mergeSxList, mergeStylesList } from '../../utils'

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
  language?: PrismProps['language']

  codeRender?: (content: string) => React.ReactNode
  children: PrismProps['children']

  copyContent?: string
  onCopyClick?: () => void

  prismProps?: Omit<PrismProps, 'language' | 'children'>

  foldProps?: {
    defaultHeight?: number
    persistenceKey?: string
    iconVisible?: boolean
    onIconClick?: (folded: boolean) => void
  }
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  language = 'bash',
  codeRender,
  children,
  copyContent,
  onCopyClick,
  prismProps,
  foldProps,
  ...rest
}) => {
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

  return (
    <Box {...rest} sx={mergeSxList([{ position: 'relative' }, rest?.sx])}>
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
              prismProps?.styles
            ])}
          >
            {children}
          </Prism>
        )}
      </Box>

      <Group spacing={4} sx={(theme) => ({ position: 'absolute', top: 16, right: 16, color: theme.colors.gray[7] })}>
        {foldIconVisible && (
          <Tooltip label={folded ? 'Expand' : 'Collapse'} withArrow position="top">
            <ActionIcon
              variant="transparent"
              size="sm"
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
                {copied ? <IconCheck size={14} /> : <IconCopy01 size={14} strokeWidth={2.5} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Group>
    </Box>
  )
}

export interface CopyTextProps extends CodeProps {
  value: string
}

export const CopyText: React.FC<CopyTextProps> = ({ children, value, ...rest }) => {
  return (
    <Code
      bg="gray.2"
      {...rest}
      p={8}
      sx={(theme) => {
        return mergeSxList([
          {
            display: 'inline-flex',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: theme.defaultRadius
          },
          rest?.sx
        ])(theme)
      }}
    >
      {children}
      <CopyButton value={value} timeout={2000}>
        {({ copied, copy }) => (
          <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="top">
            <ActionIcon
              variant="transparent"
              size="sm"
              ml={8}
              display="inline-block"
              onClick={() => {
                copy()
              }}
            >
              {copied ? <IconCheck size={14} /> : <IconCopy01 size={14} strokeWidth={2.5} />}
            </ActionIcon>
          </Tooltip>
        )}
      </CopyButton>
    </Code>
  )
}
