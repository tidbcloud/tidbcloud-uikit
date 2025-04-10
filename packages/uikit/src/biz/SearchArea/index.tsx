import React, { useEffect, useState } from 'react'
import { FieldValues, useForm, UseFormReturn } from 'react-hook-form'

import { useDebouncedValue, useURLQueryState } from '../../hooks/index.js'
import { IconEraser, IconRefreshCw01, IconXClose } from '../../icons/index.js'
import { Box, BoxProps, Button } from '../../primitive/index.js'
import { mergeSxList } from '../../utils/styles.js'
import { FormDatePicker } from '../Form/DatePicker.js'
import { FormTimeRangePicker } from '../Form/FormTimeRangePicker.js'
import { Form, FormMultiSelect, FormProps, FormSelect, FormTextInput } from '../Form/index.js'
import { TimeRange } from '../TimeRangePicker/helpers.js'

export type TSearchAreaValue = string | string[] | Date | TimeRange | undefined

interface IFormItemBase {
  name: string
  placeholder?: string
  sx?: BoxProps['sx']
}

interface IFormItemText extends IFormItemBase {
  type: 'text'
}

interface IFormItemDatePicker extends IFormItemBase {
  type: 'datepicker'
}

interface IFormItemSelect extends IFormItemBase {
  type: 'select'
  data: Array<{ label: string; value: string }>
}

interface IFormItemMultiSelect extends IFormItemBase {
  type: 'multiselect'
  data: Array<{ label: string; value: string }>
}

interface IFormItemTimeRangePicker extends IFormItemBase {
  type: 'timerangepicker'
}

export type FormItem =
  | IFormItemText
  | IFormItemSelect
  | IFormItemDatePicker
  | IFormItemTimeRangePicker
  | IFormItemMultiSelect

export interface SearchAreaProps<T extends FieldValues> extends FormProps<T> {
  data: FormItem[]
  recoverFromURLEnabled?: boolean
  debugEnabled?: boolean
  /**
   * The key saving the form state in URL query
   * it would be `__fs__` by default, you can change it by setting this prop
   * CAUTIONS: must be set to different keys when using multiple SearchArea in the same page!!!
   */
  formStateQueryKey?: string
  clearFiltersText?: string
}

const SX_Y_MID = { display: 'flex', alignItems: 'center' }
const FORM_ITEM_SX_BASE: BoxProps['sx'] = { minWidth: '160px' }

function FormItemRender(props: {
  data: FormItem
  form: any
  onSubmit: () => void
  onRefresh?: () => void
  defaultValue: string | Date | TimeRange
  resetSeed: number
}) {
  const {
    data: { name, placeholder, type, sx },
    onSubmit,
    defaultValue,
    resetSeed
  } = props

  const [keyword, setKeyword] = useState<TSearchAreaValue>(defaultValue)
  const [debouncedKeyword] = useDebouncedValue(keyword, 800)

  useEffect(() => {
    if (resetSeed > 0) {
      setKeyword(defaultValue)
    }
  }, [resetSeed])

  useEffect(() => {
    if (type === 'text') {
      triggerSubmit()
    }
  }, [debouncedKeyword])

  const triggerSubmit = () => onSubmit && onSubmit()
  function onKeyDownHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      triggerSubmit()
    }
  }
  switch (type) {
    case 'text':
      return (
        <FormTextInput
          name={name}
          value={keyword as string}
          onChange={(e) => {
            setKeyword(e.target.value)
          }}
          placeholder={placeholder ?? ''}
          onKeyDown={onKeyDownHandler}
          rightSection={
            !!keyword && (
              <IconXClose
                style={{ cursor: 'pointer' }}
                size={14}
                onClick={() => {
                  setKeyword('')
                  props.form.setValue(name, '')
                  triggerSubmit()
                }}
              />
            )
          }
          sx={mergeSxList([FORM_ITEM_SX_BASE, sx])}
        />
      )
    case 'select':
      return (
        <FormSelect
          data={(props.data as IFormItemSelect).data}
          name={name}
          value={(keyword as string) || null}
          placeholder={placeholder ?? ''}
          onChange={(val) => {
            setKeyword(val ?? '')
            triggerSubmit()
          }}
          clearable
          searchable
          sx={mergeSxList([FORM_ITEM_SX_BASE, sx])}
        />
      )
    case 'multiselect':
      return (
        <FormMultiSelect
          data={(props.data as IFormItemSelect).data}
          name={name}
          value={keyword as string[]}
          placeholder={placeholder ?? ''}
          onChange={(val) => {
            setKeyword(val ?? [])
            triggerSubmit()
          }}
          clearable
          searchable
          sx={mergeSxList([FORM_ITEM_SX_BASE, sx])}
        />
      )
    case 'datepicker':
      return (
        <FormDatePicker
          name={name}
          value={typeof keyword === 'string' ? new Date(keyword) : (keyword as Date)}
          placeholder={placeholder ?? ''}
          onChange={(val) => {
            setKeyword(val as Date)
            triggerSubmit()
          }}
          clearable
          sx={mergeSxList([FORM_ITEM_SX_BASE, sx])}
        />
      )
    case 'timerangepicker':
      return (
        <FormTimeRangePicker
          name={name}
          value={keyword as TimeRange}
          clearable
          placeholder={placeholder ?? ''}
          onChange={(val) => {
            setKeyword(val)
            triggerSubmit()
          }}
          sx={mergeSxList([FORM_ITEM_SX_BASE, sx])}
        />
      )
    default:
      return null
  }
}

/**
 * Please use `formStateQueryKey` instead if you have multiple <SearchArea /> components in the same page
 */
export const DEFAULT_FORM_STATE_KEY = '__fs'

export function SearchArea<T extends object>(props: SearchAreaProps<T>) {
  const { data, onSubmit, onRefresh, recoverFromURLEnabled, defaultValues, formStateQueryKey, ...rest } = props
  const [resetSeed, setResetSeed] = useState(0)
  const [formState, setFormState] = useURLQueryState(formStateQueryKey ?? DEFAULT_FORM_STATE_KEY, defaultValues)
  const state = recoverFromURLEnabled ? formState : defaultValues
  const form = useForm<T>({ defaultValues: state as any })

  const handleSubmit = () => {
    const values = form.getValues()
    onSubmit(values)
    recoverFromURLEnabled && setFormState(values)
  }

  const handleReset = () => {
    setResetSeed(resetSeed + 1)
    form.reset(defaultValues)
    onSubmit(form.getValues())
    recoverFromURLEnabled && setFormState(defaultValues as any)
  }

  const handleRefresh = () => {
    onRefresh && onRefresh()
  }

  useEffect(() => {
    if (recoverFromURLEnabled) {
      // trigger submit when recover from URL
      handleSubmit()
    }
  }, [])

  return (
    <Box>
      <Form<T> onSubmit={onSubmit} {...rest} form={form} errorMessageProps={{ mx: 16 }} withActions={false}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {data.map((x) => (
              <FormItemRender
                form={form}
                data={x}
                key={x.name}
                onSubmit={handleSubmit}
                defaultValue={(state as any)[x.name]}
                resetSeed={resetSeed}
              />
            ))}
            <Box sx={SX_Y_MID}>
              <Box sx={SX_Y_MID}>
                <Button variant="subtle" onClick={handleReset}>
                  {props.clearFiltersText ?? 'Clear Filters'}
                </Button>
              </Box>
              {onRefresh && (
                <Box ml={16} sx={SX_Y_MID}>
                  <Button variant="subtle" onClick={handleRefresh}>
                    <IconRefreshCw01 size={16} />
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Form>
    </Box>
  )
}
