import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Group, Radio, Stack } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Radio>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Radio> = {
  title: 'Primitive/Radio',
  component: Radio,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...props }) => <Radio {...props}></Radio>,
  args: {
    disabled: false,
    checked: false
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    checked: {
      control: {
        type: 'boolean'
      }
    }
  }
}

export const CustomColor: Story = {
  render: ({ ...props }) => (
    <Group>
      <Radio {...props} checked label="default checked" />
      <Radio {...props} color="peacock" checked label="peacock checked" />
      <Radio {...props} color="peacock" label="peacock unchecked" />
      <Radio {...props} color="red" checked label="red checked" />
      <Radio {...props} color="red" label="red unchecked" />
      <Radio {...props} color="green" checked label="green checked" />
      <Radio {...props} color="green" label="green unchecked" />
      <Radio {...props} color="blue" checked label="blue checked" />
      <Radio {...props} color="blue" label="blue unchecked" />
    </Group>
  )
}

export const Grouped: Story = {
  render: () => (
    <Radio.Group
      name="favoriteFramework"
      label="Select your favorite framework/library"
      description="This is anonymous"
      withAsterisk
      error="This is an error"
    >
      <Radio value="react" label="React" />
      <Radio value="svelte" label="Svelte" />
      <Radio value="ng" label="Angular" />
      <Radio value="vue" label="Vue" />
    </Radio.Group>
  )
}

export const Disabled: Story = {
  render: () => (
    <Group>
      <Radio value="react" label="unchecked" />
      <Radio value="react" label="unchecked disabled" disabled />
      <Radio value="react" label="checked" checked />
      <Radio value="svelte" label="checked disabled" checked disabled />
    </Group>
  )
}

export const AllSizes: Story = {
  render: () => (
    <Stack>
      <Radio value="react" label="xs" size="xs" />
      <Radio value="react" label="sm" size="sm" />

      <Radio.Group
        name="favoriteFramework"
        label="This is size xs"
        description="This is anonymous"
        withAsterisk
        size="xs"
      >
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Radio.Group>

      <Radio.Group
        name="favoriteFramework"
        label="This is size sm"
        description="This is anonymous"
        withAsterisk
        size="sm"
      >
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Radio.Group>
    </Stack>
  )
}
