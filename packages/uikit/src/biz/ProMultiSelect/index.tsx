import { OptionsGroup } from '@mantine/core/lib/components/Combobox/OptionsDropdown/OptionsDropdown.js'
import { useUncontrolled } from '@mantine/hooks'
import React from 'react'

import { IconCheck, IconSearchSm } from '../../icons/index.js'
import {
  Combobox,
  MultiSelectProps,
  ScrollArea,
  useCombobox,
  ComboboxItem,
  defaultOptionsFilter,
  getOptionsLockup,
  getParsedComboboxData,
  Group,
  InputBase,
  isOptionsGroup,
  Loader,
  Pill,
  useMantineTheme,
  useProps
} from '../../primitive/index.js'

import { isValueChecked } from './helper.js'

interface OptionProps {
  data: ComboboxItem | OptionsGroup
  withCheckIcon?: boolean
  value?: string | string[] | null
  checkIconPosition?: 'left' | 'right'
  unstyled: boolean | undefined
  renderOption?: MultiSelectProps['renderOption']
}

const Option = ({ data, withCheckIcon, value, checkIconPosition, unstyled, renderOption }: OptionProps) => {
  if (!isOptionsGroup(data)) {
    const checked = isValueChecked(value, data.value)
    const check = withCheckIcon && checked && <IconCheck size={16} strokeWidth={2} />

    const defaultContent = (
      <Group justify="space-between">
        {checkIconPosition === 'left' && check}
        <span>{data.label}</span>
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

export interface ProMultiSelectProps extends MultiSelectProps {
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
    selectFirstOptionOnChange,
    placeholder,
    clearable,
    label,
    nothingFoundMessage,
    dropdownOpened,
    defaultDropdownOpened,
    loading,
    maxDropdownHeight,
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

  const values = _value.map((item, index) => (
    <Pill
      key={`${item}-${index}`}
      withRemoveButton={!readOnly && !optionsLockup[item]?.disabled}
      onRemove={() => {
        setValue(_value.filter((i) => item !== i))
        onRemove?.(item)
      }}
      disabled={disabled}
    >
      {optionsLockup[item]?.label || item}
    </Pill>
  ))

  const options = filteredData?.map((item) => {
    return (
      <Option
        data={item}
        value={_value}
        key={isOptionsGroup(item) ? item.group : item.value}
        unstyled={false}
        withCheckIcon={true}
        checkIconPosition="right"
        renderOption={renderOption}
      />
    )
  })

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
          // border: 'none',
          borderRadius: theme.radius.md
          // borderBottom: `1px solid ${theme.colors.carbon[3]}`,
          // '&:hover': {
          //   borderBottom: `1px solid ${theme.colors.carbon[3]}`
          // },
          // '&:focus': {
          //   borderBottom: `1px solid ${theme.colors.carbon[3]}`
          // }
        }
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          disabled={disabled || loading}
          rightSection={loading ? <Loader size="sm" /> : _clearable ? clearButton : <Combobox.Chevron />}
          label={label}
          styles={{
            label: { color: theme.colors.carbon[8], marginBottom: 6, fontSize: 14, lineHeight: '20px' },
            description: { color: theme.colors.carbon[6] }
          }}
          rightSectionPointerEvents={value === null ? 'none' : 'all'}
          onClick={() => combobox.toggleDropdown()}
        >
          <Pill.Group>{values}</Pill.Group>
        </InputBase>
        {/* <InputBase
          w={width}
          pointer
          }
          error={error ? <Box sx={(t) => ({ color: t.colors.red[7] })}>{error}</Box> : undefined}
        ></InputBase> */}
      </Combobox.Target>

      <Combobox.Dropdown>
        {searchable && (
          <Combobox.Search
            leftSection={<IconSearchSm size={16} />}
            value={_searchValue}
            onChange={(event) => {
              setSearchValue(event.currentTarget.value)
              searchable && combobox.openDropdown()
              selectFirstOptionOnChange && combobox.selectFirstOption()
            }}
            placeholder={placeholder}
            // styles={{
            //   input: {
            //     border: 'none'
            //   }
            // }}
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
