import React, { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { useURLQueryState } from '../../hooks'
import { IconEraser, IconRefreshCw01, IconXClose } from '../../icons'
import { Box, Button, Sx } from '../../primitive'
import { Form, FormProps, FormSelect, FormTextInput } from '../Form'
import { FormDatePicker } from '../Form/DatePicker'

interface IFormItemBase {
  name: string
  placeholder?: string
  sx?: Sx
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

export type FormItem = IFormItemText | IFormItemSelect | IFormItemDatePicker

export interface SearchAreaProps<T extends FieldValues> extends FormProps<T> {
  data: FormItem[]
  recoverFromURLEnabled?: boolean
  debugEnabled?: boolean
}

const SX_Y_MID = { display: 'flex', alignItems: 'center' }
const FORM_ITEM_SX_BASE: Sx = { minWidth: '160px' }

function FormItemRender(props: { data: FormItem; onSubmit?: () => void; defaultValue: string; resetSeed: number }) {
  const {
    data: { name, placeholder, type, sx },
    onSubmit,
    defaultValue,
    resetSeed
  } = props

  const [keyword, setKeyword] = useState<string | Date>(defaultValue)

  useEffect(() => {
    if (resetSeed > 0) {
      setKeyword(defaultValue)
    }
  }, [resetSeed])

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
          onChange={(e) => setKeyword(e.target.value)}
          placeholder={placeholder ?? ''}
          onKeyDown={onKeyDownHandler}
          sx={{ ...FORM_ITEM_SX_BASE, ...(sx ?? {}) }}
          rightSection={
            !!keyword && (
              <IconXClose
                style={{ cursor: 'pointer' }}
                size={14}
                onClick={() => {
                  setKeyword('')
                }}
              />
            )
          }
        />
      )
    case 'select':
      return (
        <FormSelect
          data={(props.data as IFormItemSelect).data}
          name={name}
          value={keyword as string}
          placeholder={placeholder ?? ''}
          onChange={(val) => {
            setKeyword(val ?? '')
            triggerSubmit()
          }}
          sx={{ ...FORM_ITEM_SX_BASE, ...(sx ?? {}) }}
          clearable
          searchable
        />
      )
    case 'datepicker':
      return (
        <FormDatePicker
          name={name}
          value={keyword as Date}
          placeholder={placeholder ?? ''}
          onChange={(val) => {
            setKeyword(val as Date)
            triggerSubmit()
          }}
          sx={{ ...FORM_ITEM_SX_BASE, ...(sx ?? {}) }}
          clearable
        />
      )
    default:
      return null
  }
}

const FORM_STATE_KEY = '__fs__'

export function SearchArea<T extends object>(props: SearchAreaProps<T>) {
  const { data, onSubmit, recoverFromURLEnabled, defaultValues, ...rest } = props
  const form = useForm<T>()
  const [resetSeed, setResetSeed] = useState(0)
  const [formState, setFormState] = useURLQueryState(FORM_STATE_KEY, defaultValues)
  const state = recoverFromURLEnabled ? formState : defaultValues

  const handleSubmit = () => {
    const values = form.getValues()
    onSubmit(values)
    recoverFromURLEnabled && setFormState(values)
  }

  const handleReset = () => {
    setResetSeed(resetSeed + 1)
    form.reset(defaultValues)
    recoverFromURLEnabled && setFormState(defaultValues as any)
  }

  return (
    <Box>
      <Form<T>
        onSubmit={onSubmit}
        {...rest}
        defaultValues={state as any}
        form={form}
        errorMessageProps={{ mx: 16 }}
        withActions={false}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {data.map((x) => (
              <FormItemRender
                data={x}
                key={x.name}
                onSubmit={handleSubmit}
                defaultValue={(state as any)[x.name]}
                resetSeed={resetSeed}
              />
            ))}
            <Box sx={SX_Y_MID}>
              <Box sx={SX_Y_MID}>
                <Button variant="subtle" color="gray.7" onClick={handleReset}>
                  <IconEraser size={16} style={{ marginRight: 4 }} />
                  Clear Filters
                </Button>
              </Box>
              <Box ml={16} sx={SX_Y_MID}>
                <Button variant="subtle" color="gray.7" onClick={handleSubmit}>
                  <IconRefreshCw01 size={16} />
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {props.debugEnabled && <pre>result = {JSON.stringify(form.getValues(), null, 4)}</pre>}
      </Form>
    </Box>
  )
}
