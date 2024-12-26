import { ReactNode, useMemo } from 'react'

import { IconChevronRight } from '../../icons/index.js'
import { ActionIcon, Box, Checkbox, Divider, Group, Stack, Text, useMantineTheme } from '../../primitive/index.js'

import { TreeSelectOption, useTreeContext } from './useTreeStore.js'
import { getAllLeafNodes } from './utils.js'

import type { OptionProps, RenderOption } from './index.js'

export const DEFAULT_PANEL_HEIGHT = 240
export const DEFAULT_PANEL_WIDTH = 260

export interface CascaderPanelProps extends Omit<CascaderItemProps, 'option'> {
  fixedGroup: number
  optionGroupTitle?: (index: number) => ReactNode
}

export const CascaderPanel = (props: CascaderPanelProps) => {
  const { options } = useTreeContext()
  const { optionGroupTitle, fixedGroup, optionProps } = props
  const optionGroups = useMemo(() => {
    const groups: TreeSelectOption[][] = [options]
    const walk = (tree: TreeSelectOption[]) => {
      tree.forEach((option) => {
        if (option.expanded) {
          groups.push(option.children || [])
          walk(option.children || [])
        }
      })
    }

    walk(options)

    if (fixedGroup > 1 && groups.length < fixedGroup) {
      groups.push(...new Array(fixedGroup - groups.length).fill([]))
    }

    return groups
  }, [options])

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
              <CascaderItem key={option.value} option={option} {...props} />
            ))}
          </Stack>
        </>
      ))}
    </Group>
  )
}

export interface CascaderItemProps<T = string> {
  multiple?: boolean
  option: TreeSelectOption<T>
  optionProps?: OptionProps
  renderOption?: RenderOption
  onClick?: (target: TreeSelectOption, newValue: string[]) => void
}

const CascaderItem = ({ multiple, option, optionProps, renderOption, onClick }: CascaderItemProps) => {
  const { defaultRadius, colors } = useMantineTheme()
  const { wrapperProps, textProps } = optionProps || {}
  const { loadChildren, toggleExpand, toggleCheck } = useTreeContext()
  const { label, value, disabled, isChecked, isLeaf, isLoading, expanded, children } = option
  const everyChildrenChecked = !!children?.length && getAllLeafNodes(children).every((child) => child.isChecked)
  const someChildrenChecked = !!children?.length && getAllLeafNodes(children).some((child) => child.isChecked)
  const isIndeterminate = !isLeaf && !everyChildrenChecked && someChildrenChecked
  const _isChecked = (isLeaf && isChecked) || (!isLeaf && everyChildrenChecked)

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
          const updatedOptions = toggleCheck?.(option)
          onClick?.(
            option,
            multiple
              ? getAllLeafNodes(updatedOptions)
                  .filter((n) => n.isChecked)
                  .map((n) => n.value)
              : [value]
          )
        }}
      >
        <Group w="100%" pl="sm" gap={8} wrap="nowrap" sx={{ userSelect: 'none' }} justify="space-between">
          <Box w="100%" py={8}>
            <Group gap={8} wrap="nowrap">
              {multiple && (
                <Checkbox indeterminate={isIndeterminate} checked={_isChecked} disabled={disabled} readOnly />
              )}
              {!!renderOption ? (
                renderOption({ label, value, disabled })
              ) : (
                <Text truncate maw="80%" {...textProps}>
                  {label}
                </Text>
              )}
            </Group>
          </Box>

          {!isLeaf ? (
            <ActionIcon
              variant="transparent"
              size={40}
              loading={isLoading}
              disabled={disabled}
              onClick={async (e) => {
                e.stopPropagation()

                if (!isLoading && !children?.length) {
                  await loadChildren(option)
                }
                toggleExpand(option, true)
              }}
            >
              <IconChevronRight size={16} />
            </ActionIcon>
          ) : (
            <></>
          )}
        </Group>
      </Box>
    </Box>
  )
}
