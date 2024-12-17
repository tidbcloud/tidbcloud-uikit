import type { Meta, StoryObj } from '@storybook/react'
import { Button, ComboboxStore, Stack, Text } from '@tidbcloud/uikit'
import { TreeSelect, TreeSelectOption } from '@tidbcloud/uikit/biz'
import { useRef, useState } from 'react'

type Story = StoryObj<typeof TreeSelect>

const meta: Meta<typeof TreeSelect> = {
  title: 'Biz/TreeSelect',
  component: TreeSelect,
  tags: ['autodocs'],
  parameters: {}
}

export default meta

function getTreeData(): TreeSelectOption[] {
  return [
    {
      label: 'TiDB Serverless',
      value: 'TiDB Serverless',
      isLeaf: false,
      children: [
        {
          label: 'Row-based Storage',
          value: 'TiDB Serverless - Row-based Storage',
          isLeaf: true
        },
        {
          label: 'Columnar Storage',
          value: 'TiDB Serverless - Columnar Storage',
          isLeaf: true
        },
        {
          label: 'Request Units',
          value: 'TiDB Serverless - Request Units',
          isLeaf: true
        }
      ]
    },
    {
      label: 'TiDB Dedicated',
      value: 'TiDB Dedicated',
      isLeaf: false,
      children: [
        {
          label: 'Node Compute',
          value: 'Node Compute',
          isLeaf: false,
          children: [
            {
              label: 'TiDB',
              value: 'TiDB Dedicated - Node Compute - TiDB',
              isLeaf: true
            },
            {
              label: 'TiKV',
              value: 'TiDB Dedicated - Node Compute - TiKV',
              isLeaf: true
            },
            {
              label: 'TiFlash',
              value: 'TiDB Dedicated - Node Compute - TiFlash',
              isLeaf: true
            }
          ]
        },
        {
          label: 'Node Storage',
          value: 'Node Storage',
          isLeaf: false,
          children: [
            {
              label: 'TiKV',
              value: 'TiDB Dedicated - Node Storage - TiKV',
              isLeaf: true
            },
            {
              label: 'TiFlash',
              value: 'TiDB Dedicated - Node Storage - TiFlash',
              isLeaf: true
            }
          ]
        },
        {
          label: 'Backup',
          value: 'Backup',
          isLeaf: false,
          children: [
            {
              label: 'Single Region Storage',
              value: 'TiDB Dedicated - Backup - Single Region Storage',
              isLeaf: true
            },
            {
              label: 'Dual Region Storage',
              value: 'TiDB Dedicated - Backup - Dual Region Storage',
              isLeaf: true
            },
            {
              label: 'Replication',
              value: 'TiDB Dedicated - Backup - Replication',
              isLeaf: true
            }
          ]
        },
        {
          label: 'Data Migration',
          value: 'Data Migration',
          isLeaf: false,
          children: [
            {
              label: 'Replication Capacity Units (RCU)',
              value: 'TiDB Dedicated - Data Migration - Replication Capacity Units (RCU)',
              isLeaf: true
            }
          ]
        },
        {
          label: 'Changefeed',
          value: 'Changefeed',
          isLeaf: false,
          children: [
            {
              label: 'Replication Capacity Units',
              value: 'TiDB Dedicated - Changefeed - Replication Capacity Units',
              isLeaf: true
            }
          ]
        },
        {
          label: 'Data Transfer',
          value: 'Data Transfer',
          isLeaf: false,
          children: [
            {
              label: 'Internet',
              value: 'TiDB Dedicated - Data Transfer - Internet',
              isLeaf: true
            },
            {
              label: 'Cross Region',
              value: 'TiDB Dedicated - Data Transfer - Cross Region',
              isLeaf: true
            },
            {
              label: 'Same Region',
              value: 'TiDB Dedicated - Data Transfer - Same Region',
              isLeaf: true
            },
            {
              label: 'Load Balancing',
              value: 'TiDB Dedicated - Data Transfer - Load Balancing',
              isLeaf: true
            },
            {
              label: 'DM NAT Gateway',
              value: 'TiDB Dedicated - Data Transfer - DM NAT Gateway',
              isLeaf: true
            },
            {
              label: 'Private Data Link',
              value: 'TiDB Dedicated - Data Transfer - Private Data Link',
              isLeaf: true
            }
          ]
        },
        {
          label: 'Recovery Group',
          value: 'Recovery Group',
          isLeaf: false,
          children: [
            {
              label: 'Recovery Group Service',
              value: 'TiDB Dedicated - Recovery Group - Recovery Group Service',
              isLeaf: true
            },
            {
              label: 'Same Region Data Processing',
              value: 'TiDB Dedicated - Recovery Group - Same Region Data Processing',
              isLeaf: true
            },
            {
              label: 'Cross Region Data Processing',
              value: 'TiDB Dedicated - Recovery Group - Cross Region Data Processing',
              isLeaf: true
            }
          ]
        }
      ]
    },
    {
      label: 'Support Plan',
      value: 'Support Plan',
      isLeaf: true
    }
  ]
}

function MultipleDemo() {
  const [value, setValue] = useState<string[]>([])
  return (
    <TreeSelect
      comboboxProps={{ width: 'target' }}
      value={value}
      options={getTreeData()}
      onChange={(v) => {
        console.log(`checked:`, v)
        setValue(v)
      }}
      multiple
      loadData={() => new Promise((resolve) => setTimeout(() => resolve([]), 1000))}
    />
  )
}

function SingleDemo() {
  const [value, setValue] = useState<string[]>([])
  const treeSelectRef = useRef<ComboboxStore>(null)

  return (
    <Stack>
      <Text>Selected: {value.join(', ')}</Text>
      <TreeSelect
        comboboxRef={treeSelectRef}
        comboboxProps={{ width: 'target' }}
        value={value}
        options={getTreeData()}
        onChange={(v, target) => {
          console.log(`checked:`, v, target)
          setValue(v)
        }}
        loadData={() => new Promise((resolve) => setTimeout(() => resolve([]), 1000))}
        showCheckAll={false}
        target={<Button onClick={() => treeSelectRef.current?.toggleDropdown()}>Single Select</Button>}
      />
    </Stack>
  )
}

const code = `
import { TreeSelect, TreeSelectOption } from '@tidbcloud/uikit/biz'

function getTreeData(): TreeSelectOption[] {
  return [
    {
      label: 'TiDB Serverless',
      value: 'TiDB Serverless',
      isLeaf: false,
      children: [
        {
          label: 'Row-based Storage',
          value: 'TiDB Serverless - Row-based Storage',
          isLeaf: true
        },
        {
          label: 'Columnar Storage',
          value: 'TiDB Serverless - Columnar Storage',
          isLeaf: true
        },
        {
          label: 'Request Units',
          value: 'TiDB Serverless - Request Units',
          isLeaf: true
        }
      ]
    },
    {
      label: 'TiDB Dedicated',
      value: 'TiDB Dedicated',
      isLeaf: false,
      children: [
        {
          label: 'Node Compute',
          value: 'Node Compute',
          isLeaf: false,
          children: [
            {
              label: 'TiDB',
              value: 'TiDB Dedicated - Node Compute - TiDB',
              isLeaf: true
            },
            {
              label: 'TiKV',
              value: 'TiDB Dedicated - Node Compute - TiKV',
              isLeaf: true
            },
            {
              label: 'TiFlash',
              value: 'TiDB Dedicated - Node Compute - TiFlash',
              isLeaf: true
            }
          ]
        },
        {
          label: 'Node Storage',
          value: 'Node Storage',
          isLeaf: false,
          children: [
            {
              label: 'TiKV',
              value: 'TiDB Dedicated - Node Storage - TiKV',
              isLeaf: true
            },
            {
              label: 'TiFlash',
              value: 'TiDB Dedicated - Node Storage - TiFlash',
              isLeaf: true
            }
          ]
        },
        {
          label: 'Backup',
          value: 'Backup',
          isLeaf: false,
          children: [
            {
              label: 'Single Region Storage',
              value: 'TiDB Dedicated - Backup - Single Region Storage',
              isLeaf: true
            },
            {
              label: 'Dual Region Storage',
              value: 'TiDB Dedicated - Backup - Dual Region Storage',
              isLeaf: true
            },
            {
              label: 'Replication',
              value: 'TiDB Dedicated - Backup - Replication',
              isLeaf: true
            }
          ]
        },
        {
          label: 'Data Migration',
          value: 'Data Migration',
          isLeaf: false,
          children: [
            {
              label: 'Replication Capacity Units (RCU)',
              value: 'TiDB Dedicated - Data Migration - Replication Capacity Units (RCU)',
              isLeaf: true
            }
          ]
        },
        {
          label: 'Changefeed',
          value: 'Changefeed',
          isLeaf: false,
          children: [
            {
              label: 'Replication Capacity Units',
              value: 'TiDB Dedicated - Changefeed - Replication Capacity Units',
              isLeaf: true
            }
          ]
        },
        {
          label: 'Data Transfer',
          value: 'Data Transfer',
          isLeaf: false,
          children: [
            {
              label: 'Internet',
              value: 'TiDB Dedicated - Data Transfer - Internet',
              isLeaf: true
            },
            {
              label: 'Cross Region',
              value: 'TiDB Dedicated - Data Transfer - Cross Region',
              isLeaf: true
            },
            {
              label: 'Same Region',
              value: 'TiDB Dedicated - Data Transfer - Same Region',
              isLeaf: true
            },
            {
              label: 'Load Balancing',
              value: 'TiDB Dedicated - Data Transfer - Load Balancing',
              isLeaf: true
            },
            {
              label: 'DM NAT Gateway',
              value: 'TiDB Dedicated - Data Transfer - DM NAT Gateway',
              isLeaf: true
            },
            {
              label: 'Private Data Link',
              value: 'TiDB Dedicated - Data Transfer - Private Data Link',
              isLeaf: true
            }
          ]
        },
        {
          label: 'Recovery Group',
          value: 'Recovery Group',
          isLeaf: false,
          children: [
            {
              label: 'Recovery Group Service',
              value: 'TiDB Dedicated - Recovery Group - Recovery Group Service',
              isLeaf: true
            },
            {
              label: 'Same Region Data Processing',
              value: 'TiDB Dedicated - Recovery Group - Same Region Data Processing',
              isLeaf: true
            },
            {
              label: 'Cross Region Data Processing',
              value: 'TiDB Dedicated - Recovery Group - Cross Region Data Processing',
              isLeaf: true
            }
          ]
        }
      ]
    },
    {
      label: 'Support Plan',
      value: 'Support Plan',
      isLeaf: true
    }
  ]
}

function Demo() {
  return
    <TreeSelect
      comboboxProps={{ width: 'target' }}
      value={[]}
      options={getTreeData()}
      multiple
      loadData={() => new Promise((resolve) => setTimeout(() => resolve([]), 1000))}
    />
}
`

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Multiple: Story = {
  parameters: {
    controls: { expanded: true },
    docs: {
      source: {
        language: 'jsx',
        code
      }
    }
  },
  render: () => <MultipleDemo />,
  args: {}
}

export const Single: Story = {
  parameters: {
    controls: { expanded: true },
    docs: {
      source: {
        language: 'jsx',
        code
      }
    }
  },
  render: () => <SingleDemo />,
  args: {}
}
