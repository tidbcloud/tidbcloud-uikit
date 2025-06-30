import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import { Box, Tabs, TabsProps } from '@tidbcloud/uikit'

type Story = StoryObj<typeof Tabs>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Tabs> = {
  title: 'Primitive/Navigation/Tabs',
  component: Tabs,
  decorators: [decorator],
  parameters: {},
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: 'inline-radio'
    },
    variant: {
      options: ['default', 'outline', 'pills'],
      control: 'inline-radio'
    }
  },
  args: {
    orientation: 'horizontal',
    variant: 'default'
  }
}

export default meta

const base = (
  <>
    <Tabs.List>
      <Tabs.Tab value="react">React</Tabs.Tab>
      <Tabs.Tab value="sv">Svelte</Tabs.Tab>
      <Tabs.Tab value="ng">Wrapped tab</Tabs.Tab>
      <Tabs.Tab value="ds" disabled>
        Disabled
      </Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="react" pt="sm">
      React Panel
    </Tabs.Panel>
    <Tabs.Panel value="sv" pt="sm">
      Svelte Panel
    </Tabs.Panel>
    <Tabs.Panel value="ng" pt="sm">
      Angular Panel
    </Tabs.Panel>
  </>
)

const verticalBase = (
  <>
    <Tabs.List>
      <Tabs.Tab value="react">React</Tabs.Tab>
      <Tabs.Tab value="sv">Svelte</Tabs.Tab>
      <Tabs.Tab value="ng">Wrapped tab</Tabs.Tab>
      <Tabs.Tab value="ds" disabled>
        Disabled
      </Tabs.Tab>
    </Tabs.List>

    <Tabs.Panel value="react" pl="sm">
      React Panel
    </Tabs.Panel>
    <Tabs.Panel value="sv" pl="sm">
      Svelte Panel
    </Tabs.Panel>
    <Tabs.Panel value="ng" pl="sm">
      Angular Panel
    </Tabs.Panel>
  </>
)

const Wrapper = (props: TabsProps) => <Tabs sx={{ maxWidth: 500 }} mx="auto" mt={40} {...props} />

const PrimaryDemo = (props: TabsProps) => (
  <Box mx="auto" mt={40}>
    <Wrapper defaultValue="react" variant="default" mt={10} mb={50} radius="md" {...props}>
      {props.orientation === 'horizontal' ? base : verticalBase}
    </Wrapper>
  </Box>
)

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: PrimaryDemo
}
