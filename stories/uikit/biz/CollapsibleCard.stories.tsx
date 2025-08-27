import { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Button, Group, Stack, Typography } from '@tidbcloud/uikit'
import { CollapsibleCard } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof CollapsibleCard>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof CollapsibleCard> = {
  title: 'Biz/CollapsibleCard',
  component: CollapsibleCard,
  decorators: [decorator],
  parameters: {}
}

const code = `
function Demo() {
  return (
    <Stack>
      <CollapsibleCard title="click title to toggle card">
        <Box p={16}>
          <Typography>This is the content of the collapsible card.</Typography>
        </Box>
      </CollapsibleCard>
    </Stack>
  )
}`

export const Primary: Story = {
  parameters: {
    docs: {
      source: {
        language: 'jsx',
        code
      }
    }
  },
  render: (props) => {
    return (
      <Stack>
        <CollapsibleCard
          onTransitionEnd={(opened) => console.log('Transition ended with opened', opened)}
          title={
            <Group>
              <Typography>click title to toggle card</Typography>
              <Button>hello</Button>
            </Group>
          }
        >
          <Typography>This is the content of the collapsible card.</Typography>
        </CollapsibleCard>
      </Stack>
    )
  }
}

export default meta
