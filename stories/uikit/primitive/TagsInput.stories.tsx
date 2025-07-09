import type { Meta, StoryFn } from '@storybook/react'
import { Stack, TagsInput } from '@tidbcloud/uikit'
import { useState } from 'react'

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof TagsInput> = {
  title: 'Primitive/Combobox/TagsInput',
  component: TagsInput,
  decorators: [decorator],
  parameters: {}
}

export default meta

export function Primary() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" />
}

export function Controlled() {
  const [value, setValue] = useState<string[]>([])
  return <TagsInput data={[]} value={value} onChange={setValue} />
}

export function ControlledSearchValue() {
  const [searchValue, setSearchValue] = useState('')
  return <TagsInput searchValue={searchValue} onSearchChange={setSearchValue} data={[]} />
}

export function Clearable() {
  return <TagsInput label="Press Enter to submit a tag" placeholder="Enter tag" defaultValue={['React']} clearable />
}

export function MaxSelectedValues() {
  return (
    <TagsInput
      label="Press Enter to submit a tag"
      description="Add up to 3 tags"
      placeholder="Enter tag"
      maxTags={3}
      defaultValue={['first', 'second']}
    />
  )
}

export function Sizes() {
  return (
    <Stack>
      <TagsInput label="XS" placeholder="Enter tag" size="xs" />
      <TagsInput label="Small" placeholder="Enter tag" size="sm" />
      <TagsInput label="Medium" placeholder="Enter tag" size="md" />
      <TagsInput label="Large" placeholder="Enter tag" size="lg" />
      <TagsInput label="X-Large" placeholder="Enter tag" size="xl" />
    </Stack>
  )
}
