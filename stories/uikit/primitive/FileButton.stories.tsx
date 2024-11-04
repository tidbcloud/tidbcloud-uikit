import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Button, FileButton, Group } from '@tidbcloud/uikit'

type Story = StoryObj<typeof FileButton>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof FileButton> = {
  title: 'Primitive/Buttons/FileButton',
  component: FileButton,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...rest }) => (
    <Group justify="center">
      <FileButton accept="image/png,image/jpeg" {...rest}>
        {(props) => <Button {...props}>Upload image</Button>}
      </FileButton>
    </Group>
  ),
  parameters: {
    controls: {
      expanded: true
    }
  },
  args: {},
  argTypes: {
    accept: {
      control: 'text',
      description: 'File input accept attribute, for example, "image/png,image/jpeg"',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    capture: {
      options: ['user', 'environment'],
      control: { type: 'select' },
      description:
        'Specifies that, optionally, a new file should be captured, and which device should be used to capture that new media of a type defined by the accept attribute.',
      table: {
        type: {
          summary: 'boolean | "user" | "environment"'
        }
      }
    },
    children: {
      control: 'text',
      description: 'Function that receives button props and returns react node that should be rendered',
      table: {
        type: {
          summary: '(props: { onClick(): void; }) => ReactNode'
        }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables file picker',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    form: {
      control: 'text',
      description: 'Input form attribute',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    inputProps: {
      control: 'object',
      description: 'Spreads props to input element used to capture files',
      table: {
        type: {
          summary:
            'Pick<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof InputHTMLAttributes<...>>'
        }
      }
    },
    multiple: {
      control: 'boolean'
    },
    name: {
      control: 'text'
    },
    onChange: {
      control: 'text',
      description: 'Called when files are picked',
      table: {
        type: {
          summary: '(payload: Multiple extends true ? File[] : File) => void'
        }
      }
    },
    resetRef: {
      control: 'text',
      description: '<div>Function that should be called when value changes to null or empty array</div>',
      table: {
        type: {
          summary: 'ForwardedRef<() => void>'
        }
      }
    }
  }
}
