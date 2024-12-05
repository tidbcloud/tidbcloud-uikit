import { Select as MantineSelect, MultiSelect as MantineMultiSelect } from '@mantine/core'
import type {
  SelectProps as MantineSelectProps,
  MultiSelectProps as MantineMultiSelectProps,
  ComboboxItem,
  OptionsFilter
} from '@mantine/core'
import { useUncontrolled } from '@mantine/hooks'
import { useCallback } from 'react'

export interface SelectProps extends MantineSelectProps {
  creatable?: boolean
  getCreateLabel?: (query: string) => string
  onCreate?: (query: string) => ComboboxItem | null | undefined
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
    defaultValue: false,
    onChange: (value) => {
      if (value) {
        props.onDropdownOpen?.()
      } else {
        props.onDropdownClose?.()
      }
    }
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
      if (createdItem) {
        setValue(createdItem.value, createdItem)
        setSearchValue('')
        close()
        props.onOptionSubmit?.(createdItem.value)
      }
    } else {
      props.onOptionSubmit?.(value)
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

export interface MultiSelectProps extends MantineMultiSelectProps {
  creatable?: boolean
  getCreateLabel?: (query: string) => string
  onCreate?: (query: string) => ComboboxItem | null | undefined
}

export function MultiSelect(props: MultiSelectProps) {
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
    onChange: (value) => {
      if (value) {
        props.onDropdownOpen?.()
      } else {
        props.onDropdownClose?.()
      }
    },
    defaultValue: false
  })
  const close = useCallback(() => setDropdownOpened(false), [])
  const open = useCallback(() => setDropdownOpened(true), [])

  const [value, setValue] = useUncontrolled<string[]>({
    value: props.value,
    onChange: props.onChange,
    defaultValue: []
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

  const handleOptionSubmit = useCallback(
    (val: string) => {
      if (creatable && val.startsWith(CREATE_VALUE_PREFIX) && typeof onCreate === 'function') {
        const createdItem = onCreate(val.slice(CREATE_VALUE_PREFIX.length))
        if (createdItem) {
          setValue([...value, createdItem.value])
          setSearchValue('')
          close()
          props.onOptionSubmit?.(createdItem.value)
        }
      } else {
        props.onOptionSubmit?.(val)
      }
    },
    [value]
  )

  return (
    <MantineMultiSelect
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
