import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Input, SegmentedControl } from '@tidbcloud/uikit'
import { useState } from 'react'

import { SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Input>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Input> = {
  title: 'Primitive/Inputs/Input',
  component: Input,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...props }) => <Input {...props}></Input>,
  args: {
    placeholder: 'this is a placeholder',
    disabled: false
  },
  argTypes: {
    placeholder: {
      control: {
        type: 'text'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  }
}

export const AllVariants: Story = {
  render: () => {
    const variants = ['default', 'filled', 'unstyled']
    const [variant, setVariant] = useState('default')

    return (
      <div>
        <Input variant={variant} placeholder="this is a placeholder" />
        <br />

        <SegmentedControl value={variant} onChange={setVariant} data={variants} />
      </div>
    )
  }
}

export const AllSizes: Story = {
  render: () => {
    return (
      <div>
        {SIZE_LIST.map((size) => (
          <Input key={size} size={size} placeholder="this is a placeholder" mb="md" />
        ))}
      </div>
    )
  }
}
