import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Form, FormTextInput } from './Form'

const meta: Meta<typeof Form> = {
  title: 'Biz/Form',
  component: Form,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof Form>

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const ControlledForm: Story = {
  args: {
    w: 800,
    children: (
      <div>
        <FormTextInput label="name" name="name" />
      </div>
    )
  }
}
