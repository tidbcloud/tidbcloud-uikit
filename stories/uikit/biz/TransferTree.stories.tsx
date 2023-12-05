import type { Meta, StoryObj } from '@storybook/react'
import { TransferTree, type TreeDataNode } from '@tidbcloud/uikit/biz'
import { IconDatabase02, IconTable } from '@tidbcloud/uikit/icons'
import { range } from 'lodash-es'
import { useMemo, useRef, useState } from 'react'

type Story = StoryObj<typeof TransferTree>

const meta: Meta<typeof TransferTree> = {
  title: 'Biz/TransferTree',
  component: TransferTree,
  tags: ['autodocs'],
  parameters: {}
}

export default meta

function getTreeData() {
  return {
    schemas: range(1, 5).map((i) => ({
      schema_name: `test${i}`,
      tables: range(1, 5).map((j) => ({ table_name: `table${j}`, schema_name: `test${i}` }))
    }))
  }
}

function flatTree2Keys(nodes: TreeDataNode[]): string[] {
  return nodes.map((n) => [n.key, ...(n.children ? flatTree2Keys(n.children) : [])]).flat() as string[]
}

interface CommonTable {
  schema?: string
  table?: string
}

interface DmBlockAllowRules {
  do_dbs?: string[]
  ignore_dbs?: string[]
  do_tables?: CommonTable[]
  ignore_tables?: CommonTable[]
}

function Demo() {
  const [selectedObjectKeys, setSelectedObjectKeys] = useState<string[]>([])
  const [rules, setRules] = useState<DmBlockAllowRules>({})
  console.log('rules: ', rules)

  const selectedSourceTables = useRef<string[]>([])
  const selectedTargetTables = useRef<string[]>([])
  const targetTables = useRef<string[]>([])

  const dataSource = useMemo(() => {
    const data = getTreeData()
    return (
      data.schemas?.map((i) => ({
        title: i.schema_name,
        key: i.schema_name!,
        icon: <IconDatabase02 size={14} />,
        isLeaf: false,
        children:
          i.tables?.map((j) => ({
            title: j.table_name,
            key: j.schema_name + ',' + j.table_name!,
            icon: <IconTable size={14} />,
            isLeaf: true
          })) ?? []
      })) ?? ([] as TreeDataNode[])
    )
  }, [])

  return (
    <TransferTree
      dataSource={dataSource}
      onChange={(tree) => setSelectedObjectKeys(flatTree2Keys(tree))}
      treeProps={{ showIcon: true, virtual: true }}
      onCheckLeft={(selected, info) => {
        console.log('selected: ', selected)
        selectedSourceTables.current = selected as string[]
      }}
      onCheckRight={(selected, info) => {
        console.log('selected: ', selected)
        selectedTargetTables.current = selected as string[]
      }}
      onMoveRight={() => {
        targetTables.current = [...new Set([...targetTables.current, ...selectedSourceTables.current])]
        console.log('targetTables: ', targetTables)
        selectedSourceTables.current = []
      }}
      onMoveLeft={() => {
        targetTables.current = [
          ...new Set([...targetTables.current].filter((i) => !selectedTargetTables.current.includes(i)))
        ]
        console.log('targetTables: ', targetTables)
        selectedTargetTables.current = []
      }}
    />
  )
}

const code = `

`

export const Primary: Story = {
  parameters: {
    controls: { expanded: true },
    docs: {
      source: {
        language: 'jsx',
        code
      }
    }
  },
  render: () => <Demo />
}
