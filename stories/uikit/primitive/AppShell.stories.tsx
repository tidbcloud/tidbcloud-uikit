import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { AppShell, Navbar, Header } from '@tidbcloud/uikit'

type Story = StoryObj<typeof AppShell>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof AppShell> = {
  title: 'Primitive/AppShell',
  component: AppShell,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          Navbar content
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          Header content
        </Header>
      }
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }
      })}
    >
      {/* Your application here */}
    </AppShell>
  ),
  args: {}
}
