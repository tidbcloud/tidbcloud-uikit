import { useMemo } from 'react'

import { Box, Checkbox, Group, Stack, Text, TreeNodeData, useMantineTheme } from '../../primitive/index.js'

import { CascaderItemProps, DEFAULT_PANEL_HEIGHT, DEFAULT_PANEL_WIDTH } from './CascaderPanel.js'
import { useTreeContext } from './useTree.js'

interface SearchPanelProps extends Omit<CascaderItemProps, 'option'> {
  currentValue: string[]
  searchData?: TreeNodeData[]
}

export const SearchPanel = (props: SearchPanelProps) => {
  const { searchData = [], optionProps } = props

  return (
    <Stack
      gap={8}
      py="xs"
      w={optionProps?.panelWidth || DEFAULT_PANEL_WIDTH}
      h={optionProps?.panelHeight || DEFAULT_PANEL_HEIGHT}
      align="flex-start"
      sx={{ overflow: 'auto' }}
    >
      {searchData.map((option) => (
        <SearchItem key={option.value} option={option} {...props} />
      ))}
    </Stack>
  )
}

const SearchItem = ({ multiple, option, optionProps, onCheck }: CascaderItemProps) => {
  const { defaultRadius, colors } = useMantineTheme()
  const { wrapperProps, textProps } = optionProps || {}
  const { toggleCheck, isNodeChecked, disabledState, expandedState } = useTreeContext()
  const { label, value } = option
  const disabled = disabledState[option.value]
  const expanded = expandedState[option.value]
  const isChecked = isNodeChecked(option.value)

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
          const updatedOptions = toggleCheck?.(option.value)
          onCheck?.(
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
