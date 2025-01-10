import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { DatePicker, Stack, Text } from '@tidbcloud/uikit'
import { useState } from 'react'

type Story = StoryObj<typeof DatePicker>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof DatePicker> = {
  title: 'Primitive/Dates/DatePicker',
  component: DatePicker,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <DatePicker></DatePicker>,
  args: {}
}

export function MultipleDates() {
  const [value, setValue] = useState<Date[]>([])
  return <DatePicker type="multiple" value={value} onChange={setValue} />
}

export function DateRange() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null])
  return <DatePicker type="range" value={value} onChange={setValue} size="sm" />
}

export function WithCellSpacing() {
  return <DatePicker type="range" withCellSpacing />
}

export function WithAllSizes() {
  return (
    <Stack>
      <Text>size=xs</Text>
      <DatePicker size="xs" />
      <Text>size=sm</Text>
      <DatePicker size="sm" />
      <Text>size=md</Text>
      <DatePicker size="md" />
      <Text>size=lg</Text>
      <DatePicker size="lg" />
      <Text>size=xl</Text>
      <DatePicker size="xl" />
    </Stack>
  )
}
