import { Select as MantineSelect } from '@mantine/core'
import type { SelectProps as MantineSelectProps, ComboboxItem, OptionsFilter } from '@mantine/core'
import { useDisclosure, useUncontrolled } from '@mantine/hooks'
import { useCallback, useState } from 'react'

export interface SelectProps extends MantineSelectProps {
  creatable?: boolean
  getCreateLabel?: (query: string) => string
  onCreate?: (query: string) => ComboboxItem
}

const defaultGetCreateLabel = (query: string) => `+ Create ${query}`
const CREATE_VALUE_PREFIX = '$create:'
const defaultGetCreateValue = (query: string) => `${CREATE_VALUE_PREFIX}${query}`

export function Select(props: SelectProps) {
  const {
    creatable = false,
    getCreateLabel = defaultGetCreateLabel,
    searchable,
    onCreate,
    filter,
    onChange,
    ...rest
  } = props

  if (creatable && typeof onCreate !== 'function') {
    throw new Error('`onCreate` is required when `creatable` is true')
  }

  const [dropdownOpened, setDropdownOpened] = useUncontrolled({
    value: props.dropdownOpened,
    onChange: (value) => setDropdownOpened(value),
    defaultValue: false
  })
  const close = useCallback(() => setDropdownOpened(false), [])
  const open = useCallback(() => setDropdownOpened(true), [])

  const [value, setValue] = useUncontrolled<string | null | undefined>({
    value: props.value,
    onChange: props.onChange,
    defaultValue: ''
  })
  const [searchValue, setSearchValue] = useUncontrolled<string | undefined>({
    value: props.searchValue,
    onChange: props.onSearchChange,
    defaultValue: ''
  })

  const defaultOptionsFilter: OptionsFilter = useCallback(({ options, search }) => {
    const splittedSearch = search.toLowerCase().trim().split(' ')
    const nextItems = (options as ComboboxItem[]).filter((option) => {
      const words = option.label.toLowerCase().trim().split(' ')
      return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)))
    })

    if (nextItems.length === 0) {
      return [
        {
          label: getCreateLabel(search),
          value: defaultGetCreateValue(search)
        }
      ]
    }
    return nextItems
  }, [])

  const handleOptionSubmit = useCallback((value: string) => {
    if (creatable && value.startsWith(CREATE_VALUE_PREFIX) && typeof onCreate === 'function') {
      const createdItem = onCreate(value.slice(CREATE_VALUE_PREFIX.length))
      setValue(createdItem.value, createdItem)

      setSearchValue('')
      close()
    }
  }, [])

  return (
    <MantineSelect
      {...rest}
      value={value}
      onChange={setValue}
      searchable={searchable || creatable}
      searchValue={searchValue}
      onSearchChange={setSearchValue}
      filter={creatable ? defaultOptionsFilter : filter}
      onOptionSubmit={handleOptionSubmit}
      dropdownOpened={dropdownOpened}
      onDropdownClose={close}
      onDropdownOpen={open}
    />
  )
}
