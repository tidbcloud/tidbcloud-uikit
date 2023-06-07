import { CopyButton, ActionIcon, Flex, Tooltip } from '@tidbcloud/uikit-primitives'
import { Prism } from '@tidbcloud/uikit-primitives'
import { Language } from 'prism-react-renderer'
import React from 'react'

import { Icon } from '@tidbcloud/uikit-icons'

export interface CodeBlockProps {
  value: string
  language?: Language
  fontSize?: string | number
  copyButton?: boolean
  copyProps?: {
    copyText?: string | React.ReactNode
    copiedText?: string | React.ReactNode
  }
  border?: boolean
  borderColor?: string
  backgroundColor?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  value = '',
  language = 'bash',
  fontSize = 13,
  copyButton = true,
  copyProps = {
    copyText: 'Copy',
    copiedText: 'Copied'
  },
  border = true,
  borderColor,
  backgroundColor
}) => {
  return (
    <Flex
      bg={`${backgroundColor || ''}`}
      sx={(theme) => ({
        border: border ? `1px solid ${borderColor || theme.colors.gray[4]}` : '',
        borderRadius: theme.defaultRadius,
        justifyContent: 'space-between',
        color: theme.black
      })}
    >
      <Prism
        noCopy
        language={language as any}
        styles={(theme) => ({
          code: {
            backgroundColor: backgroundColor || 'transparent !important',
            wordBreak: 'break-all',
            fontSize: fontSize
          },
          line: {
            padding: '0 0 0 16px',
            whiteSpace: 'pre',
            color: theme.colors.gray[9]
          },
          lineContent: {
            whiteSpace: 'pre-wrap'
          }
        })}
      >
        {value}
      </Prism>

      {copyButton && (
        <CopyButton value={value}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? copyProps.copiedText : copyProps.copyText}>
              <ActionIcon color="gray.7" onClick={copy}>
                <Icon name="Copy01" size={16} />
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      )}
    </Flex>
  )
}
