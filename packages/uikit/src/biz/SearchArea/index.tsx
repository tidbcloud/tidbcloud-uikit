import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { IconEraser, IconRefreshCw01 } from '../../icons'
import { Box, Button, Sx } from '../../primitive'
import { Form, FormProps, FormSelect, FormTextInput } from '../Form'

interface IFormItemBase {
  name: string
  placeholder?: string
  sx?: Sx
}

interface IFormItemText extends IFormItemBase {
  type: 'text'
}

interface IFormItemSelect extends IFormItemBase {
  type: 'select'
  data: Array<{ label: string; value: string }>
}

export type FormItem = IFormItemText | IFormItemSelect
export interface SearchAreaProps<T extends FieldValues> extends FormProps<T> {
  data: FormItem[]
}

const SX_Y_MID = { display: 'flex', alignItems: 'center' }
const FORM_ITEM_SX_BASE: Sx = { minWidth: '160px' }

function FormItemRender(props: { data: FormItem; onSubmit?: () => void }) {
  const {
    data: { name, placeholder, type, sx },
    onSubmit
  } = props

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
          placeholder={placeholder ?? ''}
          onKeyDown={onKeyDownHandler}
          sx={{ ...FORM_ITEM_SX_BASE, ...(sx ?? {}) }}
        />
      )
    case 'select':
      return (
        <FormSelect
          data={(props.data as IFormItemSelect).data}
          name={name}
          placeholder={placeholder ?? ''}
          onChange={triggerSubmit}
          sx={{ ...FORM_ITEM_SX_BASE, ...(sx ?? {}) }}
          clearable
          searchable
        />
      )
    default:
      return null
  }
}

export function SearchArea<T extends object>(props: SearchAreaProps<T>) {
  const { data, onSubmit, ...rest } = props
  const form = useForm<T>()

  const handleSubmit = () => {
    onSubmit(form.getValues())
  }

  const handleReset = () => {
    form.reset(rest.defaultValues)
  }

  return (
    <Box>
      <Form<T>
        onSubmit={onSubmit}
        {...rest}
        form={form}
        errorMessageProps={{
          mx: 16
        }}
        withActions={false}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 16
            }}
          >
            {data.map((x) => (
              <FormItemRender data={x} key={x.name} onSubmit={handleSubmit} />
            ))}
          </Box>
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
      </Form>
    </Box>
  )
}
