import type { Meta, StoryFn } from '@storybook/react'
import { Button, Modal, SegmentedControl, Stack } from '@tidbcloud/uikit'
import { useState } from 'react'

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof SegmentedControl> = {
  title: 'Primitive/Inputs/SegmentedControl',
  component: SegmentedControl,
  decorators: [decorator],
  parameters: {}
}

export default meta

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Very long label', value: 'svelte', disabled: true }
]

export function Usage() {
  return <SegmentedControl data={data} />
}

export function EmptyData() {
  return <SegmentedControl data={[]} />
}

export function ToggleEmptyData() {
  const [emptyData, setEmptyData] = useState(true)

  return (
    <>
      <Button onClick={() => setEmptyData((e) => !e)}>Toggle Data</Button>
      <br />
      <SegmentedControl data={emptyData ? [] : data} />
    </>
  )
}

export function EmptyStringValue() {
  const [value, onChange] = useState('')
  return <SegmentedControl data={[...data, { label: 'Empty string', value: '' }]} value={value} onChange={onChange} />
}

export function ColorsIndexReference() {
  return <SegmentedControl color="cyan.9" data={data} />
}

export function WithinModal() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal opened={open} onClose={() => setOpen(false)}>
        <Stack>
          <SegmentedControl data={data} />
        </Stack>
      </Modal>
    </div>
  )
}
