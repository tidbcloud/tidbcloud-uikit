import { useMemo } from 'react'

import { Box, Checkbox, Group, Stack, Text, useMantineTheme } from '../../primitive/index.js'

import { CascaderItemProps, DEFAULT_PANEL_HEIGHT, DEFAULT_PANEL_WIDTH } from './CascaderPanel.js'
import { SelectOption, TreeSelectOption, useTreeContext } from './useTreeStore.js'
import { getAllLeafNodes } from './utils.js'

interface SearchPanelProps extends Omit<CascaderItemProps, 'option'> {
  currentValue: string[]
  searchOptions?: SelectOption[]
}

export const SearchPanel = (props: SearchPanelProps) => {
  const { options } = useTreeContext()
  const { searchOptions = [], optionProps, currentValue } = props
  const displayedOptions = useMemo(() => {
    const currentOptionMap = new Map()
    const walk = (tree: TreeSelectOption[]) => {
      tree.forEach((option) => {
        currentOptionMap.set(option.value, option)
        walk(option.children || [])
      })
    }

    walk(options)

    return searchOptions.map((opt) => {
      // value not in options(lazy load)
      const currentValueChecked = currentValue.includes(opt.value)

      // leaf
      const currentOpt = currentOptionMap.get(opt.value)
      const currentChecked = currentOpt?.isChecked

      // all children checked
      const allChildren = !!currentOpt && getAllLeafNodes([currentOpt])
      const allChildrenChecked = allChildren && !!allChildren.length && allChildren.every((n) => n.isChecked)

      return { ...opt, isChecked: currentValueChecked || currentChecked || allChildrenChecked }
    })
  }, [currentValue, optionProps])

  return (
    <Stack
      gap={8}
      py="xs"
      w={optionProps?.panelWidth || DEFAULT_PANEL_WIDTH}
      h={optionProps?.panelHeight || DEFAULT_PANEL_HEIGHT}
      align="flex-start"
      sx={{ overflow: 'auto' }}
    >
      {displayedOptions.map((option) => (
        <SearchItem key={option.value} option={option} {...props} />
      ))}
    </Stack>
  )
}

const SearchItem = ({ multiple, option, optionProps, renderOption, onClick }: CascaderItemProps) => {
  const { defaultRadius, colors } = useMantineTheme()
  const { wrapperProps, textProps } = optionProps || {}
  const { toggleCheck } = useTreeContext()
  const { label, value, disabled, isChecked, expanded } = option

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
              {multiple && <Checkbox checked={isChecked} disabled={disabled} readOnly />}
              {!!renderOption ? (
                renderOption({ label, value, disabled })
              ) : (
                <Text truncate maw="80%" {...textProps}>
                  {label}
                </Text>
              )}
            </Group>
          </Box>
        </Group>
      </Box>
    </Box>
  )
}
