import { useUncontrolled } from '@mantine/hooks'
import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'

import { IconSearchLg } from '../../icons/index.js'
import {
  Combobox,
  ComboboxItem,
  MultiSelectProps,
  ScrollArea,
  useCombobox,
  defaultOptionsFilter,
  getOptionsLockup,
  getParsedComboboxData,
  Group,
  InputBase,
  isOptionsGroup,
  Loader,
  Pill,
  useMantineTheme,
  useProps,
  Input,
  Checkbox,
  Box,
  OptionsData,
  Divider
} from '../../primitive/index.js'

import { isValueChecked } from './helper.js'

interface OptionProps {
  data: OptionsData[number]
  withCheckIcon?: boolean
  value?: string | string[] | null
  checkIconPosition?: 'left' | 'right'
  unstyled: boolean | undefined
  renderOption?: MultiSelectProps['renderOption']
}

const Option = ({ data, withCheckIcon, value, checkIconPosition, unstyled, renderOption }: OptionProps) => {
  if (!isOptionsGroup(data)) {
    const checked = isValueChecked(value, data.value)
    const check = withCheckIcon && <Checkbox size="xs" checked={checked} aria-checked={checked} readOnly />

    const defaultContent = (
      <Group>
        {checkIconPosition === 'left' && check}
        <Box sx={{ flex: 1 }}>{data.label}</Box>
        {checkIconPosition === 'right' && check}
      </Group>
    )

    return (
      <Combobox.Option
        value={data.value}
        disabled={data.disabled}
        data-reverse={checkIconPosition === 'right' || undefined}
        data-checked={checked || undefined}
        aria-selected={checked}
        active={checked}
        styles={(theme) => ({
          option: {
            '&:hover': {
              backgroundColor: theme.colors.carbon[3]
            }
          }
        })}
      >
        {typeof renderOption === 'function' ? renderOption({ option: data, checked }) : defaultContent}
      </Combobox.Option>
    )
  }

  const options = data.items.map((item) => (
    <Option
      data={item}
      value={value}
      key={item.value}
      unstyled={unstyled}
      withCheckIcon={withCheckIcon}
      checkIconPosition={checkIconPosition}
      renderOption={renderOption}
    />
  ))

  return <Combobox.Group label={data.group}>{options}</Combobox.Group>
}

const defaultProps: Partial<MultiSelectProps> = {
  maxValues: Infinity,
  withCheckIcon: true,
  checkIconPosition: 'left',
  hiddenInputValuesDivider: ','
}

export interface ProMultiSelectProps
  extends Pick<
    MultiSelectProps,
    | 'data'
    | 'value'
    | 'defaultValue'
    | 'limit'
    | 'searchable'
    | 'searchValue'
    | 'defaultSearchValue'
    | 'maxValues'
    | 'readOnly'
    | 'disabled'
    | 'size'
    | 'width'
    | 'selectFirstOptionOnChange'
    | 'placeholder'
    | 'clearable'
    | 'label'
    | 'nothingFoundMessage'
    | 'dropdownOpened'
    | 'defaultDropdownOpened'
    | 'maxDropdownHeight'
    | 'error'
    | 'onOptionSubmit'
    | 'renderOption'
    | 'filter'
    | 'onChange'
    | 'onSearchChange'
    | 'onRemove'
    | 'onClear'
  > {
  loading?: boolean
  allowSelectAll?: boolean
  selectAllText?: string
}

interface ValuesVisibleProps {
  moreCount: number
  values: string[]
  disabled?: boolean
  readOnly?: boolean
  optionsLockup: Record<string, ComboboxItem>
  onRemove: (item: string) => void
}

const ValuesVisible = ({ moreCount, readOnly, values, disabled, onRemove, optionsLockup }: ValuesVisibleProps) => {
  // Pill.Group ref
  const containerRef = useRef<HTMLDivElement>(null)
  // the visible values after adjustment
  const [valsVisible, setValsVisible] = useState(values)
  // the visible moreCount number after adjustment
  const [moreVisible, setMoreVisible] = useState(moreCount)
  // if the first item is too long, it always keeps overflow, so we will handle this case particularly
  const [isLongFirstOverflow, setIsLongFirstOverflow] = useState(false)
  // if the overflow check is done
  const isCheckOverflowEnd = useRef(false)

  // sync props to state
  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) {
      return
    }

    // Respond to the external container size
    const resizeObserver = new ResizeObserver(() => {
      isCheckOverflowEnd.current = false
      setValsVisible(values)
      setMoreVisible(moreCount)
    })

    resizeObserver.observe(container)

    return () => resizeObserver.unobserve(container)
  }, [values, moreCount])

  useLayoutEffect(() => {
    const container = containerRef.current
    // if the container is not ready or the overflow check is done, we don't need to check again
    if (!container || isCheckOverflowEnd.current) {
      return
    }
    const isOverflow = container.scrollWidth > container.clientWidth
    if (isOverflow) {
      // if isOverflow is still true and valsVisible.length === 1, that means the first item is too long
      if (valsVisible.length === 1) {
        isCheckOverflowEnd.current = true
        setIsLongFirstOverflow(true)
        return
      }

      const newValsVisible = valsVisible.slice(0, -1)
      const newMoreVisible = moreVisible + 1

      setValsVisible(newValsVisible)
      setMoreVisible(newMoreVisible)
    } else if (!isOverflow && isLongFirstOverflow) {
      // if the overflow is false but isLongFirstOverflow is true, we need to reset isLongFirstOverflow to re-check
      setIsLongFirstOverflow(false)
    } else {
      // end the overflow check
      isCheckOverflowEnd.current = true
    }
  }, [valsVisible, moreVisible, isLongFirstOverflow])

  return (
    <Pill.Group
      mah={22}
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        overflow: 'hidden'
      }}
      ref={containerRef}
    >
      {valsVisible.map((item, index) => (
        <Pill
          key={`${item}-${index}`}
          withRemoveButton={!readOnly && !optionsLockup[item]?.disabled}
          onRemove={() => {
            onRemove(item)
          }}
          disabled={disabled}
          styles={(theme) => ({
            root: {
              backgroundColor: theme.colors.carbon[3],
              borderRadius: theme.radius.sm,
              // if the first item is too long, we need to set flex: 1 and minWidth: 0 to make it shrink
              flex: isLongFirstOverflow ? '1' : undefined,
              minWidth: isLongFirstOverflow ? 0 : undefined
            }
          })}
        >
          {optionsLockup[item]?.label || item}
        </Pill>
      ))}
      <Pill
        styles={(theme) => ({
          root: {
            backgroundColor: theme.colors.carbon[3],
            borderRadius: theme.radius.sm,
            display: moreCount > 0 ? 'block' : 'none',
            opacity: moreVisible > 0 ? 1 : 0,
            flexShrink: 0
          }
        })}
      >
        +{moreVisible}
      </Pill>
    </Pill.Group>
  )
}

export const ProMultiSelect: React.FC<ProMultiSelectProps> = (_props) => {
  const props = useProps('MultiSelect', defaultProps, _props)

  const {
    data,
    value,
    defaultValue,
    limit,
    searchable,
    searchValue,
    defaultSearchValue,
    maxValues,
    readOnly,
    disabled,
    size,
    width,
    selectFirstOptionOnChange,
    placeholder,
    clearable,
    label,
    nothingFoundMessage,
    dropdownOpened,
    defaultDropdownOpened,
    loading,
    maxDropdownHeight,
    error,
    allowSelectAll,
    selectAllText,
    onOptionSubmit,
    renderOption,
    filter,
    onChange,
    onSearchChange,
    onRemove,
    onClear
  } = props

  const theme = useMantineTheme()

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownClose: () => {
      combobox.resetSelectedOption()
      setSearchValue('')
    },

    onDropdownOpen: () => {
      combobox.focusSearchInput()
    }
  })

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange
  })

  const [_searchValue, setSearchValue] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: '',
    onChange: onSearchChange
  })

  const parsedData = getParsedComboboxData(data)

  const optionsLockup = getOptionsLockup(parsedData)

  const shouldFilter = typeof _searchValue === 'string'

  const filteredData = shouldFilter
    ? (filter || defaultOptionsFilter)({
        options: parsedData,
        search: searchable ? _searchValue : '',
        limit: limit ?? Infinity
      })
    : parsedData

  // targetIndex for the first item appears in second line
  const [targetIndex, setTargetIndex] = useState(-1)

  const valuesForCompute = _value.map((item, index) => {
    return (
      <Pill
        key={`${item}-${index}`}
        withRemoveButton={!readOnly && !optionsLockup[item]?.disabled}
        onRemove={() => {
          setValue(_value.filter((i) => item !== i))
          onRemove?.(item)
        }}
        disabled={disabled}
        styles={(theme) => ({ root: { backgroundColor: theme.colors.carbon[3], borderRadius: theme.radius.sm } })}
      >
        {optionsLockup[item]?.label || item}
      </Pill>
    )
  })

  const inputRef = useRef<HTMLIFrameElement>(null)

  useLayoutEffect(() => {
    const child = inputRef.current?.children
    if (!child || child?.length <= 1) {
      return
    }
    const firstOffsetLeft = (child[0] as HTMLDivElement).offsetLeft
    // find the first item appears in second line without magic number
    const index = Array.from(child).findIndex(
      (child, idx) => (child as HTMLDivElement).offsetLeft === firstOffsetLeft && idx > 0
    )
    setTargetIndex(index)
  }, [_value])

  const options = filteredData?.map((item) => (
    <Option
      data={item}
      value={_value}
      key={isOptionsGroup(item) ? item.group : item.value}
      unstyled={false}
      withCheckIcon={true}
      checkIconPosition="left"
      renderOption={renderOption}
    />
  ))

  const allChecked = useMemo(() => {
    return parsedData.every((value) => {
      if (isOptionsGroup(value)) {
        return value.items.every((item) => _value.includes(item.value))
      } else {
        return _value.includes(value.value)
      }
    })
  }, [parsedData, _value])

  const indeterminate = _value.length > 0 && !allChecked

  const selectAll = (
    <>
      <Combobox.Option
        value={'_select_all'}
        data-checked={allChecked}
        aria-selected={allChecked}
        active={allChecked}
        styles={(theme) => ({
          option: {
            '&:hover': {
              backgroundColor: theme.colors.carbon[3]
            }
          }
        })}
      >
        <Group>
          <Checkbox size="xs" checked={allChecked} indeterminate={indeterminate} aria-checked={allChecked} readOnly />
          <Box sx={{ flex: 1 }}>{selectAllText || 'All'}</Box>
        </Group>
      </Combobox.Option>
      <Divider color="carbon.3" />
    </>
  )

  const handleOptionSubmit = (val: string) => {
    if (val === '_select_all') {
      if (allChecked) {
        setValue([])
      } else {
        const allValues = parsedData.reduce<string[]>((acc, value) => {
          if (isOptionsGroup(value)) {
            return [...acc, ...value.items.map((item) => item.value)]
          } else {
            return [...acc, value.value]
          }
        }, [])
        setValue(allValues)
      }
    } else {
      onOptionSubmit?.(val)
      setSearchValue('')
      combobox.updateSelectedOptionIndex('selected')
      if (_value.includes(optionsLockup[val].value)) {
        setValue(_value.filter((v) => v !== optionsLockup[val].value))
        onRemove?.(optionsLockup[val].value)
      } else if (_value.length < maxValues!) {
        setValue([..._value, optionsLockup[val].value])
      }
    }
  }

  const clearButton = (
    <Combobox.ClearButton
      onClear={() => {
        onClear?.()
        setValue([])
        setSearchValue('')
      }}
    />
  )

  const _clearable = clearable && _value.length > 0 && !disabled && !readOnly

  // if we find the targetIndex, that means we have more items
  const moreCount = targetIndex > 0 ? _value.length - targetIndex : 0

  return (
    <Combobox
      store={combobox}
      withinPortal={true}
      size={size}
      readOnly={readOnly}
      onOptionSubmit={handleOptionSubmit}
      shadow="sm"
      styles={{
        search: {
          borderRadius: theme.radius.md
        }
      }}
    >
      <Combobox.Target>
        <InputBase
          error={error}
          w={width}
          component="button"
          type="button"
          pointer
          disabled={disabled || loading}
          rightSection={loading ? <Loader size="sm" /> : _clearable ? clearButton : <Combobox.Chevron />}
          label={label}
          styles={{
            label: { color: theme.colors.carbon[8], marginBottom: 6, fontSize: 14, lineHeight: '20px' },
            description: { color: theme.colors.carbon[6] },
            error: { color: theme.colors.red[7] }
          }}
          rightSectionPointerEvents={value === null ? 'none' : 'all'}
          onClick={() => combobox.toggleDropdown()}
        >
          {_value.length === 0 && !!placeholder && <Input.Placeholder>{placeholder}</Input.Placeholder>}

          {/*This Pill.Group is only for computed*/}
          <Pill.Group
            ref={inputRef}
            mah={22}
            sx={{
              flexWrap: 'wrap',
              overflowY: 'clip',
              maxWidth: '100%',
              opacity: 0,
              pointerEvents: 'none',
              height: 0
            }}
          >
            {valuesForCompute}
          </Pill.Group>

          {
            // _value.length > 0 is required. Because this component need a render cycle to synchronize props to state. So if we remove '_value.length > 0', when we uncheck the last item, the placeholder will show, but at that moment, the state in this ValuesVisible component keeps previous values
            _value.length > 0 && (
              <ValuesVisible
                disabled={disabled}
                readOnly={readOnly}
                optionsLockup={optionsLockup}
                moreCount={moreCount}
                values={_value.slice(0, targetIndex > 0 ? targetIndex : _value.length)}
                onRemove={(item) => {
                  setValue(_value.filter((i) => item !== i))
                  onRemove?.(item)
                }}
              />
            )
          }
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        {searchable && (
          <Combobox.Search
            leftSection={<IconSearchLg size={16} c="gray.9" strokeWidth={2} />}
            value={_searchValue}
            onChange={(event) => {
              setSearchValue(event.currentTarget.value)
              searchable && combobox.openDropdown()
              selectFirstOptionOnChange && combobox.selectFirstOption()
            }}
            placeholder="Find"
          />
        )}
        <ScrollArea.Autosize type="scroll" mah={maxDropdownHeight ?? 200}>
          {allowSelectAll && selectAll}
          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>{nothingFoundMessage || 'Nothing found'}</Combobox.Empty>}
          </Combobox.Options>
        </ScrollArea.Autosize>
      </Combobox.Dropdown>
    </Combobox>
  )
}
