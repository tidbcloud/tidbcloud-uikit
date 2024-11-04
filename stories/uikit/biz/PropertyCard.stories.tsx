import type { Meta, StoryObj } from '@storybook/react'
import { Stack, Typography } from '@tidbcloud/uikit'
import { PropertyCard } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof PropertyCard>

const meta: Meta<typeof PropertyCard> = {
  title: 'Biz/PropertyCard',
  component: PropertyCard,
  tags: ['autodocs'],
  decorators: [],
  parameters: {}
}

export default meta

const code = `
import { PropertyCard } from '@tidbcloud/uikit/biz'

<PropertyCard title="Cluster Properties" w={420}>
  <PropertyCard.Item label="Name">Cluster0</PropertyCard.Item>
  <PropertyCard.Item label="Status">Available</PropertyCard.Item>
  <PropertyCard.Item label="Tier Type">Dedicated Tier</PropertyCard.Item>
  <PropertyCard.Item label="TiDB Version">v7.5.0</PropertyCard.Item>
  <PropertyCard.Item label="Cloud Provider">AWS</PropertyCard.Item>
  <PropertyCard.Item label="Region">Oregon (us-west-2)</PropertyCard.Item>

  <PropertyCard.Divider />

  <PropertyCard.Item label="TiDB" align="flex-start">
    <Stack spacing={0}>
      <Typography>2 Nodes</Typography>
      <Typography>2 vCPU, 4GiB</Typography>
    </Stack>
  </PropertyCard.Item>
  <PropertyCard.Item label="TiKV" align="flex-start">
    <Stack spacing={0}>
      <Typography>3 Nodes</Typography>
      <Typography>2 vCPU, 4GiB</Typography>
      <Typography>10 GiB Storage</Typography>
    </Stack>
  </PropertyCard.Item>
</PropertyCard>
`
export const Primary: Story = {
  args: {
    title: 'Cluster Properties',
    w: 420
  },
  argTypes: {
    title: {
      control: {
        type: 'text'
      }
    }
  },
  parameters: {
    controls: { expanded: true },
    docs: {
      source: {
        language: 'jsx',
        code
      }
    }
  },
  render: (props) => {
    return (
      <PropertyCard {...props}>
        <PropertyCard.Item label="Name">Cluster0</PropertyCard.Item>
        <PropertyCard.Item label="Status">Available</PropertyCard.Item>
        <PropertyCard.Item label="Tier Type">Dedicated Tier</PropertyCard.Item>
        <PropertyCard.Item label="TiDB Version">v7.5.0</PropertyCard.Item>
        <PropertyCard.Item label="Cloud Provider">AWS</PropertyCard.Item>
        <PropertyCard.Item label="Region">Oregon (us-west-2)</PropertyCard.Item>

        <PropertyCard.Divider />

        <PropertyCard.Item label="TiDB" align="flex-start">
          <Stack gap={0}>
            <Typography>2 Nodes</Typography>
            <Typography>2 vCPU, 4GiB</Typography>
          </Stack>
        </PropertyCard.Item>
        <PropertyCard.Item label="TiKV" align="flex-start">
          <Stack gap={0}>
            <Typography>3 Nodes</Typography>
            <Typography>2 vCPU, 4GiB</Typography>
            <Typography>10 GiB Storage</Typography>
          </Stack>
        </PropertyCard.Item>
      </PropertyCard>
    )
  }
}

export const WithGlobalProps: Story = {
  parameters: {
    docs: {
      source: {
        language: 'jsx',
        code: `<PropertyCard labelProps={{ miw: 200 }} valueProps={{ color: 'red' }}></PropertyCard>`
      }
    }
  },
  render: () => {
    return (
      <PropertyCard title="Global labelProps and valueProps" labelProps={{ miw: 200 }} valueProps={{ color: 'red' }}>
        <PropertyCard.Item label="Name">Cluster0</PropertyCard.Item>
        <PropertyCard.Item label="Status">Available</PropertyCard.Item>
        <PropertyCard.Item label="Tier Type">Dedicated Tier</PropertyCard.Item>
        <PropertyCard.Item label="TiDB Version">v7.5.0</PropertyCard.Item>
        <PropertyCard.Item label="Cloud Provider">AWS</PropertyCard.Item>
        <PropertyCard.Item label="Region">Oregon (us-west-2)</PropertyCard.Item>
      </PropertyCard>
    )
  }
}
