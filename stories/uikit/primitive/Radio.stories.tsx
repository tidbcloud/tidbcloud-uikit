import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Card, Group, Radio, Stack, Typography } from '@tidbcloud/uikit'
import { useState } from 'react'

type Story = StoryObj<typeof Radio>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Radio> = {
  title: 'Primitive/Inputs/Radio',
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
      <Stack gap="xs" mt="xs">
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Stack>
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
      <Radio value="react" label="md" size="md" />
      <Radio value="react" label="lg" size="lg" />
      <Radio value="react" label="xl" size="xl" />

      <Radio.Group
        name="favoriteFramework"
        label="This is size sm"
        description="This is anonymous"
        withAsterisk
        size="sm"
      >
        <Stack gap="xs" mt="xs">
          <Radio value="react" label="React" />
          <Radio value="svelte" label="Svelte" />
          <Radio value="ng" label="Angular" />
          <Radio value="vue" label="Vue" />
        </Stack>
      </Radio.Group>

      <Radio.Group
        name="favoriteFramework"
        label="This is size md"
        description="This is anonymous"
        withAsterisk
        size="md"
      >
        <Stack gap="xs" mt="xs">
          <Radio value="react" label="React" />
          <Radio value="svelte" label="Svelte" />
          <Radio value="ng" label="Angular" />
          <Radio value="vue" label="Vue" />
        </Stack>
      </Radio.Group>
    </Stack>
  )
}

export function RadioCard() {
  const data = [{ name: 'TiDB Serverless' }, { name: 'TiDB Dedicated' }, { name: 'TiDB On-Premises', disabled: true }]
  const [value, setValue] = useState<string | null>(null)

  const cards = data.map((item) => (
    <Radio.Card radius="md" p="md" value={item.name} key={item.name}>
      <Group>
        <Radio.Indicator disabled={item.disabled} />
        <Typography>{item.name}</Typography>
      </Group>
    </Radio.Card>
  ))

  return (
    <>
      <Radio.Group
        value={value}
        onChange={setValue}
        label="Choose a TiDB deployment type"
        description="Choose a TiDB deployment type that you will need"
      >
        <Group pt="md" gap="xs" wrap="nowrap">
          {cards}
        </Group>
      </Radio.Group>

      <Radio value="react" label="unchecked disabled" disabled />
      <Radio value="react" label="checked" checked disabled />

      <Typography fz="xs" mt="md">
        CurrentValue: {value || '–'}
      </Typography>
    </>
  )
}
