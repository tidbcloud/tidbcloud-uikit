import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Button, CopyButton } from '@tidbcloud/uikit'

type Story = StoryObj<typeof CopyButton>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof CopyButton> = {
  title: 'Primitive/CopyButton',
  component: CopyButton,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => (
    <CopyButton {...rest}>
      {({ copied, copy }) => (
        <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
          {copied ? 'Copied url' : 'Copy url'}
        </Button>
      )}
    </CopyButton>
  ),
  parameters: {
    controls: {
      expanded: true
    }
  },
  args: {},
  argTypes: {
    timeout: {
      control: {
        type: 'number',
        min: 1
      },
      description: 'Copied status timeout in ms',
      table: {
        type: {
          summary: 'number'
        }
      }
    },
    value: {
      control: 'text',
      description: 'Value that should be copied to the clipboard',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    children: {
      control: 'function',
      description: 'Function called with current status',
      table: {
        type: {
          summary: '(payload: { copied: boolean; copy(): void; }) => ReactNode'
        }
      }
    }
  }
}
