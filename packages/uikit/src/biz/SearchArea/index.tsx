import React, { useEffect, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

import { IconEraser, IconRefreshCw01 } from '../../icons'
import { Button } from '../../primitive'
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

function FormItem(props: { data: IFormItem }) {
  const { name, placeholder, type } = props.data
  if (type === 'text') {
    return (
      <FormTextInput name={name} placeholder={placeholder ?? ''} />
    )
  } else {
    return null
  }
}

export function SearchArea<T extends object>(props: SearchAreaProps<T>) {
  const { data, onSubmit, ...rest } = props
  const form = useForm<T>()
  const values = form.watch()
  const [seed, setSeed] = useState(Date.now())


  // useEffect(() => {
  //   onSubmit(values)
  // }, [values, onSubmit])

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
            {data.map(x => (<FormItem data={x} key={x.name} />))}
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
