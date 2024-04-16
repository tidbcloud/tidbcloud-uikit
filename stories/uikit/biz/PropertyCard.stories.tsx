import type { Meta, StoryObj, StoryFn } from '@storybook/react'
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

<PropertyCard title="Cluster Properties">
  <PropertyCard.Item label="Name" labelProps={{}} value="Cluster0" valueProps={{}}/>
  <PropertyCard.Item label="Status" value="Available" />
  <PropertyCard.Item label="Tier Type" value="Dedicated Tier" />
  <PropertyCard.Item label="TiDB Version" value="v7.5.0" />
  <PropertyCard.Item label="Cloud Provider" value="AWS" />
  <PropertyCard.Item label="Region" value="Oregon (us-west-2)" />
  <PropertyCard.Divider />
  <PropertyCard.Item
    label="TiDB"
    align="flex-start"
    value={
      <Stack spacing={0}>
        <Typography>2 Nodes</Typography>
        <Typography>2 vCPU, 4GiB</Typography>
      </Stack>
    }
  />
  <PropertyCard.Item
    label="TiKV"
    align="flex-start"
    value={
      <Stack spacing={0}>
        <Typography>3 Nodes</Typography>
        <Typography>2 vCPU, 4GiB</Typography>
        <Typography>10 GiB Storage</Typography>
      </Stack>
    }
  />
</PropertyCard>
`
export const Primary: Story = {
  args: {
    title: 'Cluster Properties',
    children: (
      <>
        <PropertyCard.Item label="Name" value="Cluster0" />
        <PropertyCard.Item label="Status" value="Available" />
        <PropertyCard.Item label="Tier Type" value="Dedicated Tier" />
        <PropertyCard.Item label="TiDB Version" value="v7.5.0" />
        <PropertyCard.Item label="Cloud Provider" value="AWS" />
        <PropertyCard.Item label="Region" value="Oregon (us-west-2)" />
        <PropertyCard.Divider />
        <PropertyCard.Item
          label="TiDB"
          align="flex-start"
          value={
            <Stack spacing={0}>
              <Typography>2 Nodes</Typography>
              <Typography>2 vCPU, 4GiB</Typography>
            </Stack>
          }
        />
        <PropertyCard.Item
          label="TiKV"
          align="flex-start"
          value={
            <Stack spacing={0}>
              <Typography>3 Nodes</Typography>
              <Typography>2 vCPU, 4GiB</Typography>
              <Typography>10 GiB Storage</Typography>
            </Stack>
          }
        />
      </>
    ),
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
  }
}
