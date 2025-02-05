import { Select as MantineSelect, MultiSelect as MantineMultiSelect, getParsedComboboxData } from '@mantine/core'
import type {
  SelectProps as MantineSelectProps,
  MultiSelectProps as MantineMultiSelectProps,
  ComboboxItem
} from '@mantine/core'
import { useUncontrolled } from '@mantine/hooks'
import { useMemo } from 'react'

export interface SelectProps extends MantineSelectProps {
  creatable?: boolean
  getCreateLabel?: (query: string) => string
  onCreate?: (query: string) => ComboboxItem | null | undefined
}

const defaultGetCreateLabel = (query: string) => `+ Create ${query}`
const CREATE_VALUE_PREFIX = '$create:'
const defaultGetCreateValue = (query: string) => `${CREATE_VALUE_PREFIX}${query}`

function useCreateableSelect<
  T extends Pick<
    SelectProps,
    'creatable' | 'getCreateLabel' | 'onCreate' | 'data' | 'searchValue' | 'searchable' | 'onSearchChange'
  > & {
    onChange?: (value: SelectProps['value'] | MultiSelectProps['value'], option: ComboboxItem) => void
    value?: SelectProps['value'] | MultiSelectProps['value']
    defaultValue?: SelectProps['defaultValue'] | MultiSelectProps['defaultValue']
  }
>(props: T): T {
  const { creatable = false, getCreateLabel = defaultGetCreateLabel, onCreate, searchable, ...rest } = props

  if (creatable && typeof onCreate !== 'function') {
    throw new Error('`onCreate` is required when `creatable` is true')
  }

  const [value, setValue] = useUncontrolled<string | string[] | null>({
    value: props.value || null, // use null value to clear input
    onChange: props.onChange,
    defaultValue: props.defaultValue
  })
  const [searchValue, setSearchValue] = useUncontrolled<string | undefined>({
    value: props.searchValue,
    onChange: props.onSearchChange,
    defaultValue: ''
  })

  const parsedData = useMemo(() => {
    const parsedData = getParsedComboboxData(props.data)
    if (!creatable || !searchValue) {
      return parsedData
    }
    const placeholder = {
      label: getCreateLabel(searchValue),
      value: defaultGetCreateValue(searchValue)
    }
    if (
      parsedData.findIndex((item) => {
        if ('value' in item) {
          return item.value === placeholder.value.slice(CREATE_VALUE_PREFIX.length)
        }
        return false
      }) === -1
    ) {
      parsedData.push(placeholder)
    }
    return parsedData
  }, [props.data, searchValue])

  const handleChange = (value: SelectProps['value'] | MultiSelectProps['value'], option: ComboboxItem) => {
    const isMultiSelect = Array.isArray(value)
    if (creatable) {
      const values = Array.isArray(value) ? value : [value]
      const clickedCreateItem = values.some((i) => typeof i === 'string' && i.startsWith(CREATE_VALUE_PREFIX))

      if (clickedCreateItem) {
        const newItemValue = isMultiSelect
          ? values.find((i) => typeof i === 'string' && i.startsWith(CREATE_VALUE_PREFIX))
          : value
        if (newItemValue) {
          const createdItem = onCreate!(newItemValue?.slice(CREATE_VALUE_PREFIX.length))
          if (createdItem) {
            const nextValue = isMultiSelect
              ? ([...values.filter((i) => !i?.startsWith(CREATE_VALUE_PREFIX)), createdItem.value] as string[])
              : createdItem.value
            setValue(nextValue, isMultiSelect ? undefined : option)
            setSearchValue('')
            return
          }
        }
      }
    }

    setValue(value as any, isMultiSelect ? undefined : option)
  }

  return {
    ...rest,
    data: parsedData,
    value,
    onChange: handleChange,
    searchable: searchable || creatable,
    searchValue,
    onSearchChange: setSearchValue
  } as T
}

export function Select(props: SelectProps) {
  const allProps = useCreateableSelect(props)
  return <MantineSelect {...allProps} />
}

export interface MultiSelectProps extends MantineMultiSelectProps {
  creatable?: boolean
  getCreateLabel?: (query: string) => string
  onCreate?: (query: string) => ComboboxItem | null | undefined
}

export function MultiSelect(props: MultiSelectProps) {
  const allProps = useCreateableSelect(props)
  return <MantineMultiSelect {...allProps} />
}
