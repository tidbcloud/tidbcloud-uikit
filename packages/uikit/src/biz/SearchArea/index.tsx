import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { IconEraser, IconRefreshCw01 } from '../../icons'
import { Box, Button } from '../../primitive'
import { Form, FormProps, FormTextInput } from '../Form'

export interface IFormItem {
  type: 'text' | 'select' | 'date' | 'datetime' | 'daterange' | 'datetimerange' | 'number' | 'checkbox' | 'radio'
  name: string
  placeholder?: string
}

export interface SearchAreaProps<T extends FieldValues> extends FormProps<T> {
  data: IFormItem[]
}

const SX_Y_MID = { display: 'flex', alignItems: 'center' }

function FormItem(props: { data: IFormItem; onSubmit?: () => void }) {
  const {
    data: { name, placeholder, type },
    onSubmit
  } = props
  function onKeyDownHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      onSubmit && onSubmit()
    }
  }
  if (type === 'text') {
    return <FormTextInput name={name} placeholder={placeholder ?? ''} onKeyDown={onKeyDownHandler} />
  } else {
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
              <FormItem data={x} key={x.name} onSubmit={handleSubmit} />
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
