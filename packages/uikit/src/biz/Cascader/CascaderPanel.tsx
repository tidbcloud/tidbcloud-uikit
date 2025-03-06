import { ReactNode, useMemo } from 'react'

import { IconChevronRight } from '../../icons/index.js'
import {
  ActionIcon,
  Box,
  Checkbox,
  Divider,
  Group,
  Stack,
  Text,
  TreeNodeData,
  useMantineTheme
} from '../../primitive/index.js'

import { useTreeContext } from './useTree.js'

import type { OptionProps } from './index.js'

export const DEFAULT_PANEL_HEIGHT = 240
export const DEFAULT_PANEL_WIDTH = 260

export interface CascaderPanelProps extends Omit<CascaderItemProps, 'option' | 'siblings'> {
  data: TreeNodeData[]
  fixedGroup: number
  optionGroupTitle?: (index: number) => ReactNode
}

export const CascaderPanel = (props: CascaderPanelProps) => {
  const { expandedState } = useTreeContext()
  const { data, optionGroupTitle, fixedGroup, optionProps } = props
  const optionGroups = useMemo(() => {
    const groups: TreeNodeData[][] = [data]
    const walk = (tree: TreeNodeData[]) => {
      tree.some((option) => {
        if (expandedState[option.value]) {
          groups.push(option.children || [])
          walk(option.children || [])
          return true
        }
        return false
      })
    }

    walk(data)

    if (fixedGroup > 1 && groups.length < fixedGroup) {
      groups.push(...new Array(fixedGroup - groups.length).fill([]))
    }

    return groups
  }, [data, expandedState])

  return (
    <Group align="flex-start" gap={0}>
      {optionGroups.map((group, index) => (
        <>
          {index > 0 && <Divider orientation="vertical" color="carbon.3" />}
          <Stack
            key={index}
            py="xs"
            gap={8}
            w={optionProps?.panelWidth || DEFAULT_PANEL_WIDTH}
            h={optionProps?.panelHeight || DEFAULT_PANEL_HEIGHT}
            align="flex-start"
            sx={{ overflow: 'auto' }}
          >
            {!!optionGroupTitle && optionGroupTitle(index)}
            {group.map((option) => (
              <CascaderItem key={option.value} option={option} siblings={group} {...props} />
            ))}
          </Stack>
        </>
      ))}
    </Group>
  )
}

export interface CascaderItemProps {
  multiple?: boolean
  option: TreeNodeData
  siblings: TreeNodeData[]
  optionProps?: OptionProps
  onCheck?: (target: TreeNodeData, prev: boolean, next: boolean) => void
}

const CascaderItem = ({ multiple, option, siblings, optionProps, onCheck }: CascaderItemProps) => {
  const { defaultRadius, colors } = useMantineTheme()
  const { wrapperProps, textProps } = optionProps || {}
  const {
    loadNodes,
    toggleExpanded,
    toggleCheck,
    loadingState,
    disabledState,
    expandedState,
    isNodeChecked,
    isNodeIndeterminate,
    collapse
  } = useTreeContext()
  const { label, value, children, nodeProps } = option
  const isParent = nodeProps?.isParent
  const isLoading = loadingState[value]
  const disabled = disabledState[value]
  const expanded = expandedState[value]
  const isChecked = isNodeChecked(value)
  const isIndeterminate = isNodeIndeterminate(value)

  const collapseSiblings = (nodes: TreeNodeData[]) => {
    nodes.forEach((node) => {
      if (node.value !== value && expandedState[node.value]) {
        collapse(node.value)
        collapseSiblings(node.children || [])
      }
    })
  }

  return (
    <Box {...wrapperProps} w="100%" px="sm">
      <Box
        w="100%"
        bg={expanded ? colors.carbon[4] : undefined}
        sx={{
          cursor: disabled ? 'not-allowed' : 'pointer',
          borderRadius: defaultRadius,
          ':hover': { backgroundColor: colors.carbon[3] }
        }}
        onClick={() => {
          if (disabled) {
            return
          }
          toggleCheck?.(value)
          onCheck?.(option, isChecked, !isChecked)
        }}
      >
        <Group w="100%" pl="sm" gap={8} wrap="nowrap" sx={{ userSelect: 'none' }} justify="space-between">
          <Box w="100%" py={8}>
            <Group gap={8} wrap="nowrap">
              {multiple && (
                <Checkbox indeterminate={isIndeterminate} checked={isChecked} disabled={disabled} readOnly />
              )}
              <Text truncate maw="80%" {...textProps}>
                {label}
              </Text>
            </Group>
          </Box>

          {(isParent || children?.length) && (
            <ActionIcon
              variant="transparent"
              size={40}
              loading={isLoading}
              disabled={disabled}
              onClick={async (e) => {
                e.stopPropagation()

                if (!isLoading && !children?.length) {
                  await loadNodes(value)
                }

                collapseSiblings(siblings)
                toggleExpanded(value)
              }}
            >
              <IconChevronRight size={16} />
            </ActionIcon>
          )}
        </Group>
      </Box>
    </Box>
  )
}
