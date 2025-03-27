import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Prism } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Prism>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Prism> = {
  title: 'Primitive/Prism',
  component: Prism,
  tags: ['autodocs'],
  decorators: [decorator],
  parameters: {}
}

export default meta

const code = `import { CodeBlock } from '@tidbcloud/uikit';

function Demo() {
  return <CodeBlock>Put some real code here</CodeBlock>
}`

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  args: {
    language: 'jsx',
    children: code
  },
  argTypes: {
    language: {
      control: 'text'
    },
    children: {
      control: 'text'
    },
    noCopy: {
      control: 'boolean'
    }
  }
}
