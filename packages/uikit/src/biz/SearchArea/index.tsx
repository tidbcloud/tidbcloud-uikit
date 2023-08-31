import { Box, Button } from '@tidb-cloud-uikit/components'
import { Form, FormProps } from '@tidb-cloud-uikit/components/hook-form'
import { Icon } from '@tidb-cloud-uikit/icons'
import { useDebounce } from 'ahooks'
import React, { useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form'

export interface SearchAreaProps<T extends FieldValues> extends FormProps<T> {
  children: React.ReactNode
}

const SX_Y_MID = { display: 'flex', alignItems: 'center' }

export function SearchArea<T extends object>(props: SearchAreaProps<T>) {
  const { children, onSubmit, ...rest } = props
  const form = useForm<T>()
  const values = form.watch()
  const debouncedValues = useDebounce(values, { wait: 500 })

  useEffect(() => {
    onSubmit(debouncedValues)
  }, [debouncedValues, onSubmit])

  const handleSubmit = () => {
    onSubmit(form.getValues())
  }

  const handleReset = () => {
    console.log('reset', rest.defaultValues)
    form.reset(rest.defaultValues)
  }

  ;(window as any)._d_ = form

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
            {children}
          </Box>
          <Box sx={SX_Y_MID}>
            <Box sx={SX_Y_MID}>
              <Button variant="subtle" color="gray.7" onClick={handleReset}>
                <Icon name="Eraser" size={16} style={{ marginRight: 4 }} />
                Clear Filters
              </Button>
            </Box>
            <Box ml={16} sx={SX_Y_MID}>
              <Button variant="subtle" color="gray.7" onClick={handleSubmit}>
                <Icon name="RefreshCw01" size={16} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Form>
    </Box>
  )
}
