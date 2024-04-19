import type { Meta, StoryObj } from '@storybook/react'
import { Button, Stack, Typography } from '@tidbcloud/uikit'
import { PageShell } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof PageShell>

const meta: Meta<typeof PageShell> = {
  title: 'Biz/PageShell',
  component: PageShell,
  tags: ['autodocs'],
  decorators: [],
  parameters: {}
}

export default meta

export const Primary: Story = {
  args: {
    title: 'Cluster Overview'
  },
  parameters: {
    docs: {
      source: {
        language: 'jsx',
        code: `<PageShell title="Overview">Content</PageShell>`
      }
    }
  },
  render: (props) => {
    return <PageShell {...props}>This is a page, you can have whatever content here</PageShell>
  }
}

export const WithGoBack: Story = {
  args: {
    title: 'Cluster Overview'
  },
  parameters: {
    docs: {
      source: {
        language: 'jsx',
        code: `<PageShell headerProps={{ withBack: true}}>Content</PageShell>`
      }
    }
  },
  render: (props) => {
    return (
      <PageShell {...props} headerProps={{ withBack: true }}>
        Content
      </PageShell>
    )
  }
}

export const WithRightSection: Story = {
  parameters: {
    docs: {
      source: {
        language: 'jsx',
        code: `<PageShell headerProps={{ rightSection: <Button>Connect</Button>}}>Content</PageShell>`
      }
    }
  },
  render: (props) => {
    return (
      <PageShell
        title="Overview"
        {...props}
        headerProps={{
          withBack: true,
          rightSection: <Button h={32}>Connect</Button>
        }}
      >
        Content
      </PageShell>
    )
  }
}
