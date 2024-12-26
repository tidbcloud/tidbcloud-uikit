import { IconSearch } from '@tabler/icons-react'
import { ReactNode, Ref, useEffect, useImperativeHandle, useState } from 'react'

import { IconChevronSelectorVertical, IconXCircle } from '../../icons/index.js'
import {
  Box,
  BoxProps,
  Button,
  Combobox,
  ComboboxProps,
  ComboboxStore,
  Divider,
  ElementProps,
  Flex,
  Group,
  Input,
  InputProps,
  LoadingOverlay,
  TextProps,
  ComboboxSearchProps,
  useCombobox,
  ActionIcon
} from '../../primitive/index.js'

import { CascaderPanel, DEFAULT_PANEL_HEIGHT } from './CascaderPanel.js'
import { SearchPanel } from './SearchPanel.js'
import { useCascader } from './useCascader.js'
import { SelectionProtectType, SelectOption, TreeProvider, TreeSelectOption, TreeStore } from './useTreeStore.js'
import { getAllLeafNodes } from './utils.js'

export interface CascaderProps<T extends SelectionProtectType = string> {
  value: T[]
  // target will be null when changeTrigger is onConfirm
  onChange?: (target: TreeSelectOption<T> | null, value: T[]) => void
  // works when multiple is true
  changeTrigger?: 'onSelect' | 'onConfirm'

  options?: SelectOption<T>[]
  store?: TreeStore<T>

  // multi-selection or single-selection
  multiple?: boolean
  emptyMessage?: string
  // should the empty array be check all status
  allWithEmpty?: boolean
  loading?: boolean

  // combobox
  comboboxProps?: Omit<ComboboxProps, 'children'>
  comboboxRef?: Ref<ComboboxStore>

  // target
  target?: ReactNode
  defaultTargetProps?: InputProps & ElementProps<'input'>

  // options
  fixedGroup?: number
  optionGroupTitle?: (index: number) => ReactNode
  optionProps?: OptionProps
  renderOption?: RenderOption<T>

  // search
  searchable?: boolean
  searchProps?: ComboboxSearchProps & ElementProps<'input', 'onChange'> & { onChange?: (search: string) => void }
  searchOptions?: SelectOption<T>[]
  renderSearchOption?: RenderOption<T>
}

export interface OptionProps {
  wrapperProps?: BoxProps
  textProps?: TextProps
  panelHeight?: number
  panelWidth?: number
}

export interface RenderOption<T = string> {
  (currentOption: TreeSelectOption<T>): React.ReactNode
}

export const Cascader = <T extends SelectionProtectType = string>({
  value,
  onChange,
  changeTrigger = 'onSelect',

  options = [],
  store,

  multiple,
  emptyMessage,
  allWithEmpty,
  loading,

  comboboxProps,
  comboboxRef,

  target,
  defaultTargetProps,

  fixedGroup = 1,
  optionGroupTitle,
  optionProps,
  renderOption,

  searchable,
  searchProps,
  searchOptions,
  renderSearchOption
}: CascaderProps<T>) => {
  let cascader = useCascader({ options })
  if (store) {
    cascader = store
  }
  const { options: treeOptions, checkByValues, foldAll } = cascader

  const resetCheckedStatusByValues = () => {
    const isCheckAll = value.length === 0 && allWithEmpty
    checkByValues(isCheckAll ? getAllLeafNodes(treeOptions).map((n) => n.value) : value)
  }

  const combobox = useCombobox({
    onDropdownOpen: () => {
      combobox.focusSearchInput()
      resetCheckedStatusByValues()
    },
    onDropdownClose: () => {
      foldAll()
    }
  })
  useImperativeHandle(comboboxRef, () => combobox, [combobox])

  const [search, setSearch] = useState('')
  const { onChange: onSearchChange } = searchProps || {}
  const onSearch = (search: string) => {
    setSearch(search)
    onSearchChange?.(search)
  }

  useEffect(() => {
    if (!multiple) {
      return
    }
    resetCheckedStatusByValues()
  }, [value])

  return (
    <TreeProvider value={cascader}>
      <Combobox {...comboboxProps} shadow="sm" store={combobox}>
        <Combobox.Target>
          {target ? (
            target
          ) : (
            <Input
              styles={{
                input: {
                  userSelect: 'none',
                  height: '40px',
                  lineHeight: '38px',
                  paddingRight: '40px',
                  ':hover': {
                    cursor: defaultTargetProps?.disabled ? 'not-allowed' : 'pointer'
                  },
                  '::selection': {
                    backgroundColor: 'transparent'
                  }
                },
                section: {
                  width: '40px',
                  pointerEvents: 'none'
                }
              }}
              sx={{
                lineHeight: '1.55'
              }}
              // value={selectedTips}
              readOnly
              rightSection={<IconChevronSelectorVertical size={16} />}
              onClick={() => {
                combobox.toggleDropdown()
                combobox.focusSearchInput()
              }}
              {...defaultTargetProps}
            />
          )}
        </Combobox.Target>
        <Combobox.Dropdown p={0}>
          {searchable && (
            <Box>
              <Combobox.Search
                {...searchProps}
                value={search}
                onChange={(event) => {
                  onSearch(event.currentTarget.value)
                }}
                leftSection={<IconSearch size={16} />}
                rightSectionPointerEvents="all"
                rightSection={
                  !!search && (
                    <ActionIcon
                      size="sm"
                      radius="lg"
                      onClick={() => {
                        onSearch('')
                        combobox.focusSearchInput()
                      }}
                    >
                      <IconXCircle size={16} />
                    </ActionIcon>
                  )
                }
              />
              <Divider color="carbon.3" />
            </Box>
          )}
          <Box pos="relative">
            <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />
            {treeOptions.length ? (
              <>
                <Box h={optionProps?.panelHeight || DEFAULT_PANEL_HEIGHT} sx={{ overflow: 'auto' }}>
                  {searchable && search && searchOptions?.length ? (
                    <SearchPanel
                      currentValue={value as string[]}
                      searchOptions={searchOptions as SelectOption<string>[]}
                      multiple={multiple}
                      optionProps={optionProps}
                      renderOption={renderSearchOption as RenderOption<string>}
                      onClick={(target, newValue) => {
                        if (changeTrigger === 'onSelect' || !multiple) {
                          onChange?.(target as TreeSelectOption<T>, newValue as T[])
                        }
                        if (!multiple) {
                          combobox.closeDropdown()
                        }
                      }}
                    />
                  ) : (
                    <CascaderPanel
                      fixedGroup={fixedGroup}
                      multiple={multiple}
                      optionProps={optionProps}
                      renderOption={renderOption as RenderOption<string>}
                      optionGroupTitle={optionGroupTitle}
                      onClick={(target, newValue) => {
                        if (changeTrigger === 'onSelect' || !multiple) {
                          onChange?.(target as TreeSelectOption<T>, newValue as T[])
                        }
                        if (!multiple) {
                          combobox.closeDropdown()
                        }
                      }}
                    />
                  )}
                </Box>
                {multiple && changeTrigger === 'onConfirm' && (
                  <>
                    <Divider color="carbon.3" />
                    <Group p="md" gap={8} justify="flex-end">
                      <Button
                        variant="default"
                        size="xs"
                        onClick={() => {
                          // resetCheckedStatus()
                          combobox.closeDropdown()
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        size="xs"
                        onClick={() => {
                          onChange?.(
                            null,
                            getAllLeafNodes(treeOptions)
                              .filter((n) => n.isChecked)
                              .map((n) => n.value)
                          )
                          combobox.closeDropdown()
                        }}
                      >
                        Apply
                      </Button>
                    </Group>
                  </>
                )}
              </>
            ) : (
              <Flex my={16} justify="center">
                {emptyMessage}
              </Flex>
            )}
          </Box>
        </Combobox.Dropdown>
      </Combobox>
    </TreeProvider>
  )
}
