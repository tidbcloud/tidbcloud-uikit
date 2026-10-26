import type { Meta, StoryObj } from '@storybook/react'
import { Button, Code, Group, Stack } from '@tidbcloud/uikit'
import { Form, FormDateTimePicker, FormDateTimePickerProps } from '@tidbcloud/uikit/biz'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const initialTime = '2026-10-25T08:15:30.000Z'

function DateTimePickerForm({
  initialValue = initialTime,
  ...props
}: FormDateTimePickerProps & { initialValue?: string }) {
  const form = useForm({ defaultValues: { startTime: initialValue }, mode: 'onBlur' })
  const [submitted, setSubmitted] = useState<string>()
  const [changed, setChanged] = useState<string>()

  return (
    <Stack w={480} m={48}>
      <Form
        form={form}
        onSubmit={({ startTime }) => setSubmitted(startTime)}
        actionsProps={{ confirmText: 'Submit', cancelText: '' }}
      >
        <FormDateTimePicker
          {...props}
          onChange={(value) => {
            setChanged(value.toISOString())
            props.onChange?.(value)
          }}
        />
      </Form>
      <Group>
        <Button variant="default" onClick={() => form.reset({ startTime: initialValue })}>
          Reset
        </Button>
        <Button variant="default" onClick={() => form.setValue('startTime', '2026-10-26T04:05:06.000Z')}>
          Set value
        </Button>
      </Group>
      <Code block>
        {JSON.stringify(
          {
            value: form.watch('startTime'),
            dirty: form.formState.isDirty,
            touched: !!form.formState.touchedFields.startTime,
            changed,
            submitted
          },
          null,
          2
        )}
      </Code>
    </Stack>
  )
}

const meta: Meta<typeof FormDateTimePicker> = {
  title: 'Biz/FormDateTimePicker',
  component: FormDateTimePicker,
  render: (args) => <DateTimePickerForm {...args} />,
  args: {
    name: 'startTime',
    label: 'Start time',
    utcOffset: '+08:00',
    format: 'YYYY-MM-DD HH:mm:ss Z',
    startDate: new Date('2026-10-01T00:00:00.000Z'),
    endDate: new Date('2026-10-31T23:59:59.000Z'),
    today: new Date(initialTime),
    highlightToday: true,
    rules: { required: 'Start time is required' }
  }
}

export default meta
type Story = StoryObj<typeof FormDateTimePicker>

export const WithTimezone: Story = {}

export const NegativeTimezone: Story = {
  args: { utcOffset: -300 }
}

export const DefaultFormat: Story = {
  args: { format: undefined }
}

export const Required: Story = {
  render: (args) => <DateTimePickerForm {...args} initialValue="" />
}

export const Disabled: Story = {
  args: { disabled: true }
}
