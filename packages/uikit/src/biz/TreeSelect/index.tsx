import {
  Box,
  Button,
  Checkbox,
  Divider,
  Group,
  Input,
  Text,
  Flex,
  BoxProps,
  TextProps,
  Combobox,
  ComboboxProps,
  useCombobox,
  ComboboxStore,
  ActionIcon
} from '@mantine/core'
import { ReactNode, Ref, useEffect, useImperativeHandle, useMemo, useState } from 'react'

import { IconChevronDown, IconChevronRight, IconChevronSelectorVertical } from '../../icons/index.js'

import type {
  LoadData,
  OnStatusChange,
  OnStatusChangeEvent,
  OnValueChange,
  RenderSelectItem,
  SelectionProtectType,
  StatusChangeType,
  TreeSelectOption
} from './types'
import { checkAll, checkOptionsByValue, treeToFlatArray } from './utils.js'

export interface TreeSelectProps<T extends SelectionProtectType = string, R = any> {
  options: TreeSelectOption<T>[]
  value?: T[]
  onChange?: (value: T[]) => void
  onStatusChange?: OnStatusChange<T>
  // works when multiple is true
  triggerChangeMode?: 'onStatusChange' | 'onConfirm'
  loadData?: LoadData<T, R>

  comboboxProps?: Omit<ComboboxProps, 'children'>
  comboboxRef?: Ref<ComboboxStore>

  target?: ReactNode
  defaultTargetProps?: {
    disabled?: boolean
    invalid?: boolean
    placeholder?: string
  }

  selectItemProps?: SelectItemWrapperProps
  renderSelectItem?: RenderSelectItem<T>

  multiple?: boolean
  emptyMessage?: string
  allWithEmpty?: boolean
  showCheckAll?: boolean
  loading?: boolean
}

export const TreeSelect = <T extends SelectionProtectType = string>({
  options,
  value,
  onChange,
  onStatusChange,
  triggerChangeMode = 'onConfirm',
  loadData,
  comboboxProps,
  comboboxRef,
  target,
  defaultTargetProps,
  selectItemProps,
  renderSelectItem,
  allWithEmpty = true,
  emptyMessage = 'No data.',
  showCheckAll = true,
  multiple
}: TreeSelectProps<T>) => {
  const { disabled, invalid, placeholder } = defaultTargetProps || {}
  const combobox = useCombobox()
  const [_options, setOptions] = useState<TreeSelectOption<T>[] | undefined>(undefined)
  const internalOptions = useMemo(() => {
    if (!!_options) {
      return _options
    }
    return options
  }, [options, _options])
  const flatOptions = useMemo(() => treeToFlatArray(internalOptions), [internalOptions])
  const itemCount = flatOptions.length
  const isCheckAll = value && (allWithEmpty ? !value.length || value.length === itemCount : value.length === itemCount)
  const selectedTips =
    value === undefined ? '' : isCheckAll ? `All (${itemCount})` : `Checked ${value.length} (Total ${itemCount})`
  const everyInternalChecked = flatOptions.every((o) => o.isChecked)
  const someInternalChecked = flatOptions.some((o) => o.isChecked)
  const everInternalNotChecked = flatOptions.every((o) => !o.isChecked)
  const isArray = internalOptions.every((n) => !n.children?.length)

  const _onValueChange = (v: TreeSelectOption<T>[]) => {
    const flatOptions = treeToFlatArray(v)
    const isCheckAll = flatOptions.every((n) => n.isChecked)
    onChange?.(isCheckAll && allWithEmpty ? [] : flatOptions.filter((n) => n.isChecked).map((n) => n.value))
  }
  const _onStatusChange: OnStatusChange<T> = (evt) => {
    setOptions(evt.options)
    onStatusChange?.(evt)
  }
  const afterCheckStatusChange: OnStatusChange<T> = (evt) => {
    if (evt.type !== 'check') {
      return
    }
    if (multiple && triggerChangeMode === 'onStatusChange') {
      _onValueChange(evt.options!)
    }
    if (!multiple) {
      const flatOptions = treeToFlatArray([evt.target!])
      onChange?.(flatOptions.map((n) => n.value))
      combobox.closeDropdown()
    }
  }
  const resetCheckedStatus = () => setOptions(checkOptionsByValue(internalOptions, value || [], allWithEmpty))

  useEffect(() => {
    // value could be undefined
    _onStatusChange({ type: 'check', options: checkOptionsByValue(options, value || [], allWithEmpty) })
  }, [options, value])

  useImperativeHandle(comboboxRef, () => combobox, [combobox])

  return (
    <Combobox {...comboboxProps} shadow="sm" onClose={resetCheckedStatus} store={combobox}>
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
                  cursor: disabled ? 'not-allowed' : 'pointer'
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
            value={selectedTips}
            disabled={disabled}
            placeholder={placeholder}
            readOnly
            rightSection={<IconChevronSelectorVertical size={16} />}
            onClick={() => combobox.toggleDropdown()}
            data-invalid={invalid}
          />
        )}
      </Combobox.Target>
      <Combobox.Dropdown p={0}>
        {internalOptions.length ? (
          showCheckAll ? (
            <>
              <SelectItem
                label={selectedTips}
                value="all"
                isLeaf
                isArray={isArray}
                isChecked={everyInternalChecked}
                indeterminate={someInternalChecked && !everyInternalChecked}
                onCheckStatusChange={(v) => {
                  const evt: OnStatusChangeEvent<T> = { type: 'check', options: checkAll(internalOptions, v) }
                  _onStatusChange(evt)
                  afterCheckStatusChange(evt)
                }}
                multiple={multiple}
                {...selectItemProps}
              />
              <Divider color="carbon.3" />
            </>
          ) : (
            <></>
          )
        ) : (
          <Flex my={16} justify="center">
            {emptyMessage}
          </Flex>
        )}
        <Box mah={240} sx={{ overflow: 'auto' }}>
          <SelectItems<T>
            value={internalOptions}
            renderSelectItem={renderSelectItem}
            onChange={(evt) => {
              _onStatusChange(evt)
              afterCheckStatusChange(evt)
            }}
            loadData={loadData}
            multiple={multiple}
            isArray={isArray}
            {...selectItemProps}
          />
        </Box>
        {multiple && triggerChangeMode === 'onConfirm' && (
          <>
            <Divider color="carbon.3" />
            <Group p="md" gap={8} justify="flex-end">
              <Button
                variant="default"
                size="xs"
                onClick={() => {
                  resetCheckedStatus()
                  combobox.closeDropdown()
                }}
              >
                Cancel
              </Button>
              <Button
                size="xs"
                onClick={() => {
                  _onValueChange(internalOptions)
                  combobox.closeDropdown()
                }}
                disabled={everInternalNotChecked}
              >
                Apply
              </Button>
            </Group>
          </>
        )}
      </Combobox.Dropdown>
    </Combobox>
  )
}

interface SelectItemsProps<T extends SelectionProtectType = string> {
  value: TreeSelectOption<T>[]
  onChange: OnStatusChange<T>
  level?: number
  renderSelectItem?: RenderSelectItem<T>
  loadData?: LoadData<T>
  multiple?: boolean
  isArray?: boolean
}

const SelectItems = <T extends SelectionProtectType = string>({
  value,
  level = 0,
  onChange,
  ...rest
}: SelectItemsProps<T>) => {
  return (
    <>
      {value.map((v, i) => {
        return (
          <SelectItemWithChildren<T>
            key={v.value}
            value={v}
            level={level}
            onChange={(evt) =>
              onChange({ ...evt, node: evt.node, options: [...value.slice(0, i), evt.node!, ...value.slice(i + 1)] })
            }
            onChildrenChange={(evt) => {
              const childChange = { ...v, children: evt.options }
              onChange({
                ...evt,
                node: childChange,
                options: [...value.slice(0, i), childChange, ...value.slice(i + 1)]
              })
            }}
            {...rest}
          />
        )
      })}
    </>
  )
}

interface SelectItemWithChildrenProps<T extends SelectionProtectType = string> {
  value: TreeSelectOption<T>
  onChange: OnStatusChange<T>
  onChildrenChange: (evt: {
    type: StatusChangeType
    options: TreeSelectOption<T>[]
    target: TreeSelectOption<T>
  }) => void
  level?: number
  renderSelectItem?: (options: SelectItemProps<T>) => React.ReactNode
  selectItemProps?: SelectItemWrapperProps
  loadData?: (id: T) => Promise<any>
  isArray?: boolean
}

const SelectItemWithChildren = <T extends SelectionProtectType = string>({
  value,
  level = 0,
  onChange,
  onChildrenChange,
  renderSelectItem,
  ...rest
}: SelectItemWithChildrenProps<T>) => {
  const someChildrenChecked = treeToFlatArray(value.children || []).some((c) => c.isChecked)
  const everyChildrenChecked = treeToFlatArray(value.children || []).every((c) => c.isChecked)
  return (
    <>
      <SelectItem<T>
        {...value}
        level={level}
        someChildrenChecked={someChildrenChecked}
        everyChildrenChecked={everyChildrenChecked}
        showChildren={value.showChildren}
        onShowChildrenChange={(v) => {
          const target = { ...value, showChildren: v }
          onChange({ type: 'showChildren', node: target, target })
        }}
        onCheckStatusChange={(v) => {
          const target = {
            ...value,
            isChecked: v,
            children: value.isLeaf ? value.children : checkAll(value.children!, v)
          }
          onChange({
            type: 'check',
            node: target,
            target
          })
        }}
        renderSelectItem={renderSelectItem}
        {...rest}
      />
      {value.children && value.showChildren && (
        <SelectItems<T>
          value={value.children}
          level={level + 1}
          onChange={onChildrenChange}
          renderSelectItem={renderSelectItem}
          {...rest}
        />
      )}
    </>
  )
}

interface SelectItemWrapperProps extends Omit<BoxProps, 'children'> {
  textProps?: TextProps
}

interface SelectItemProps<T extends SelectionProtectType = string> extends TreeSelectOption<T>, SelectItemWrapperProps {
  onCheckStatusChange: (v: boolean) => void
  onShowChildrenChange?: (v: boolean) => void
  indeterminate?: boolean
  level?: number
  showChildren?: boolean
  someChildrenChecked?: boolean
  everyChildrenChecked?: boolean
  multiple?: boolean
  loadData?: (id: T) => Promise<any>
  isArray?: boolean
}

const SelectItem = <T extends SelectionProtectType = string>({
  label,
  indeterminate,
  level = 0,
  isLeaf,
  someChildrenChecked,
  everyChildrenChecked,
  showChildren,
  onShowChildrenChange,
  onCheckStatusChange,
  isChecked,
  disabled,
  renderSelectItem,
  value,
  loadData,
  multiple,
  isArray,
  ...rest
}: SelectItemProps<T>) => {
  const { textProps, ...wrapperProps } = rest
  const [isLoading, setLoading] = useState(false)

  return (
    <Box pl={32 * level} {...wrapperProps}>
      <Group px="sm" gap={8} sx={{ userSelect: 'none' }}>
        {!isArray &&
          (!isLeaf ? (
            <ActionIcon
              size={24}
              loading={isLoading}
              onClick={async () => {
                if (!!loadData && !rest.children?.length) {
                  setLoading(true)
                  await loadData(value)
                  setLoading(false)
                }

                onShowChildrenChange?.(!showChildren)
              }}
            >
              {showChildren ? <IconChevronDown size={16} /> : <IconChevronRight size={16} />}
            </ActionIcon>
          ) : (
            <Box px={12} py={14}></Box>
          ))}
        <Box
          py={8}
          sx={{ cursor: 'pointer', flexGrow: 1 }}
          onClick={(e) => {
            e.stopPropagation()
            const checkStatus = isLeaf ? !isChecked : !everyChildrenChecked
            onCheckStatusChange(checkStatus)
          }}
        >
          <Group gap={8}>
            {multiple && (
              <Checkbox
                indeterminate={(!isLeaf && someChildrenChecked && !everyChildrenChecked) || indeterminate}
                checked={isLeaf ? isChecked : everyChildrenChecked}
                disabled={disabled}
                readOnly
              />
            )}
            {!!renderSelectItem ? (
              renderSelectItem({ label, value, disabled })
            ) : (
              <Text truncate maw="80%" {...textProps}>
                {label}
              </Text>
            )}
          </Group>
        </Box>
      </Group>
    </Box>
  )
}
