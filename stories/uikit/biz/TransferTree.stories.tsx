import type { Meta, StoryObj } from '@storybook/react'
import { TransferTree, type TreeDataNode } from '@tidbcloud/uikit/biz'
import { IconDatabase02, IconTable } from '@tidbcloud/uikit/icons'
import { range, uniq, uniqBy } from 'lodash-es'
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
  const checkedSourceOps = useRef<Array<TreeDataNode & { checked: boolean }>>([])
  const checkedTargetOps = useRef<Array<TreeDataNode & { checked: boolean }>>([])

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
        checkedSourceOps.current.push({
          ...info.node,
          checked: !info.node.checked
        })
      }}
      onCheckRight={(selected, info) => {
        checkedTargetOps.current.push({
          ...info.node,
          checked: !info.node.checked
        })
      }}
      onMoveRight={() => {
        setRules(() => {
          let do_dbs: string[] = []
          let do_tables: Array<CommonTable & { key: string }> = []
          let ignore_dbs: string[] = []
          let ignore_tables: Array<CommonTable & { key: string }> = []

          checkedSourceOps.current.forEach((i) => {
            if (i.isLeaf) return
            if (i.checked) {
              do_dbs.push(i.key as string)
            } else {
              do_dbs = do_dbs.filter((j) => j !== i.key)
            }
          })

          checkedSourceOps.current.forEach((i) => {
            if (!i.isLeaf) return
            const [schema, table] = (i.key as string).split(',')
            const inSelectedDB = do_dbs.includes(schema)
            if (i.checked) {
              if (inSelectedDB) {
                ignore_tables = ignore_tables.filter((t) => t.key !== i.key)
              } else {
                do_tables.push({ schema, table, key: i.key as string })
              }
            } else {
              if (inSelectedDB) {
                ignore_tables.push({ schema, table, key: i.key as string })
              } else {
                do_tables = do_tables.filter((t) => t.key !== i.key)
              }
            }
          })

          checkedSourceOps.current = []

          return {
            do_dbs: uniq(do_dbs),
            do_tables: uniqBy(do_tables, 'key'),
            ignore_dbs: uniq(ignore_dbs),
            ignore_tables: uniqBy(ignore_tables, 'key')
          }
        })
      }}
      onMoveLeft={() => {
        setRules((prev) => {
          let do_dbs: string[] = prev.do_dbs ?? []
          let do_tables: Array<CommonTable & { key: string }> =
            prev.do_tables?.map((i) => ({ ...i, key: i.schema + ',' + i.table })) ?? []
          let ignore_dbs: string[] = prev.ignore_dbs ?? []
          let ignore_tables: Array<CommonTable & { key: string }> =
            prev.ignore_tables?.map((i) => ({ ...i, key: i.schema + ',' + i.table })) ?? []

          checkedTargetOps.current.forEach((i) => {
            if (i.isLeaf) return
            if (i.checked) {
              do_dbs = do_dbs.filter((j) => j !== i.key)
              ignore_tables = ignore_tables.filter((t) => t.schema !== i.key)
            } else {
              do_dbs.push(i.key as string)
            }
          })

          checkedTargetOps.current.forEach((i) => {
            if (!i.isLeaf) return
            const [schema, table] = (i.key as string).split(',')
            const inSelectedDB = do_dbs.includes(schema)
            if (i.checked) {
              if (inSelectedDB) {
                ignore_tables.push({ schema, table, key: i.key as string })
              } else {
                do_tables = do_tables.filter((t) => t.key !== i.key)
              }
            } else {
              if (inSelectedDB) {
                ignore_tables = ignore_tables.filter((t) => t.key !== i.key)
              } else {
                do_tables.push({ schema, table, key: i.key as string })
              }
            }
          })

          checkedTargetOps.current = []

          return {
            do_dbs: uniq(do_dbs),
            do_tables: uniqBy(do_tables, 'key'),
            ignore_dbs: uniq(ignore_dbs),
            ignore_tables: uniqBy(ignore_tables, 'key')
          }
        })
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
