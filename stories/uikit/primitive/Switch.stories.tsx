import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Group, MantineProvider, Stack, Switch } from '@tidbcloud/uikit'

import { COLOR_LIST, SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Switch>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Switch> = {
  title: 'Primitive/Inputs/Switch',
  component: Switch,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: (props) => <Switch {...props} />,
  args: {
    disabled: false,
    onLabel: '',
    offLabel: ''
  },
  argTypes: {
    color: {
      options: COLOR_LIST,
      control: { type: 'select' }
    },
    size: {
      options: SIZE_LIST,
      control: { type: 'select' }
    },
    radius: {
      options: SIZE_LIST,
      control: {
        type: 'select'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    onLabel: {
      control: {
        type: 'text'
      }
    },
    offLabel: {
      control: {
        type: 'text'
      }
    }
  }
}

export function WithLabels() {
  return (
    <Group m={4}>
      <Switch size="lg" onLabel={<span>1</span>} offLabel="0" />
      <Switch size="md" onLabel={<span>1</span>} offLabel="0" />
      <Switch size="sm" onLabel={<span>1</span>} offLabel="0" />
      <Switch size="xs" onLabel={<span>1</span>} offLabel="0" />
    </Group>
  )
}

export function SwitchGroup() {
  return (
    <>
      <Switch.Group defaultValue={['one', 'three']} m={4} label="Switch Group">
        <Switch value="one" size="md" />
        <Switch value="two" size="md" />
        <Switch value="three" size="md" />
        <Switch value="four" size="md" />
      </Switch.Group>
    </>
  )
}

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <Switch.Group label="With required asterisk" withAsterisk>
        <Switch value="1" />
      </Switch.Group>
      <Switch.Group label="Just required" required>
        <Switch value="1" />
      </Switch.Group>
      <Switch.Group label="Required asterisk off" required withAsterisk={false}>
        <Switch value="1" />
      </Switch.Group>
      <Switch.Group label="Required false asterisk on" required={false} withAsterisk>
        <Switch value="1" />
      </Switch.Group>
    </div>
  )
}

export function labelPosition() {
  return (
    <Stack sx={{ width: 300, padding: 20 }}>
      <Switch labelPosition="left" label="Hello from left" value="1" />
      <Switch labelPosition="right" label="Hello from right" value="1" />
    </Stack>
  )
}

export function WithDesciprtion() {
  return (
    <Stack sx={{ width: 300, padding: 20 }}>
      <Switch
        description="This is left Checkbox, pretty big descriptions, make it more big"
        labelPosition="left"
        label="Hello from left"
        value="1"
      />
      <Switch
        description="This is right Checkbox, pretty big description"
        labelPosition="right"
        label="Hello from right"
        value="1"
      />
    </Stack>
  )
}

export function WithError() {
  return (
    <Stack sx={{ width: 300, padding: 20 }}>
      <Switch label="Error without message" value="1" error />
      <Switch error="This is another error" labelPosition="right" label="This is invalid Switch" value="1" />
      <Switch error="Error on Switch without label" value="1" />
    </Stack>
  )
}

export function Alignment() {
  return <Switch />
}
