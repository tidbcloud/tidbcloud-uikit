import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { MultiSelect } from '@tidbcloud/uikit'

type Story = StoryObj<typeof MultiSelect>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof MultiSelect> = {
  title: 'Primitive/MultiSelect',
  component: MultiSelect,
  decorators: [decorator],
  parameters: {}
}

export default meta

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' }
]

function Demo() {
  return <MultiSelect data={data} label="Your favorite frameworks/libraries" placeholder="Pick all that you like" />
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Demo />,
  args: {}
}
