import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { AppShell, Burger } from '@tidbcloud/uikit'
import { useDisclosure } from '@tidbcloud/uikit/hooks'

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof AppShell> = {
  title: 'Primitive/Layout/AppShell',
  component: AppShell,
  decorators: [decorator],
  parameters: {}
}

export default meta

export function Primary() {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened }
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  )
}
