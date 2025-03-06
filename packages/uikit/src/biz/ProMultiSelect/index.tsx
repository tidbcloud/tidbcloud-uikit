import { useUncontrolled } from '@mantine/hooks'
import React, { useLayoutEffect, useRef, useState } from 'react'

import { IconSearchLg } from '../../icons/index.js'
import {
  Combobox,
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
  OptionsData
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
    const check = withCheckIcon && <Checkbox size="xs" checked={checked} />

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

  const [targetIndex, setTargetIndex] = useState(0)

  const hideCount = _value.length - targetIndex - 1

  const values = _value.map((item, index) => {
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
        sx={{ position: 'relative' }}
      >
        {optionsLockup[item]?.label || item}
        {targetIndex === index && (
          <Pill
            styles={(theme) => ({
              root: { backgroundColor: theme.colors.carbon[3], borderRadius: theme.radius.sm, padding: '0 5px' }
            })}
            sx={{ position: 'absolute', right: 0, transform: 'translateX(calc(100% + 8px))' }}
          >
            +{hideCount}
          </Pill>
        )}
      </Pill>
    )
  })

  const inputRef = useRef<HTMLIFrameElement>(null)

  useLayoutEffect(() => {
    const child = inputRef.current?.children
    if (!child || child?.length === 0) return
    const index = Array.from(child).findIndex((child) => (child as HTMLDivElement).offsetTop > 20)
    setTargetIndex(index - 1)
  }, [values])

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

  const handleOptionSubmit = (val: string) => {
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
          <Pill.Group
            ref={inputRef}
            mah={22}
            sx={{
              flexWrap: 'wrap',
              overflowY: 'clip',
              maxWidth: `calc(100% - ${(hideCount.toString().length + 2) * 8}px)`
            }}
          >
            {values}
          </Pill.Group>
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
          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>{nothingFoundMessage || 'Nothing found'}</Combobox.Empty>}
          </Combobox.Options>
        </ScrollArea.Autosize>
      </Combobox.Dropdown>
    </Combobox>
  )
}
