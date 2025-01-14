import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { CodeBlock } from '@tidbcloud/uikit/biz'

type Story = StoryObj<typeof CodeBlock>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof CodeBlock> = {
  title: 'Biz/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
  decorators: [decorator],
  parameters: {}
}

export default meta

const code = `import { CodeBlock } from '@tidbcloud/uikit';

function Demo() {
  return <CodeBlock>Put some real code here</CodeBlock>
}`

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  args: {
    language: 'jsx',
    children: code
  },
  argTypes: {
    language: {
      control: 'text'
    },
    children: {
      control: 'text'
    }
  }
}

export const Fold: Story = {
  args: {
    language: 'jsx',
    children: code,
    foldProps: {
      defaultHeight: 100,
      iconVisible: true
    }
  }
}

export const CustomRender: Story = {
  args: {
    language: 'jsx',
    children: `	id                   	task     	estRows	operator info                                         	actRows	execution info                                                                                                                                                                             	memory   	disk
	Sort_5               	root     	10     	mysql.user.user                                       	1      	time:1.15ms, loops:2                                                                                                                                                                       	2.49 KB  	0 Bytes
	└─TableReader_10     	root     	10     	data:Selection_9                                      	1      	time:1.13ms, loops:2, cop_task: {num: 1, max: 1.01ms, proc_keys: 105, rpc_num: 1, rpc_time: 978.4µs, copr_cache_hit_ratio: 0.00, build_task_duration: 9.51µs, max_distsql_concurrency: 1}	387 Bytes	N/A
	  └─Selection_9      	cop[tikv]	10     	eq(mysql.user.user, "VX9mVDBzijeLcGn.suhaih_42iouWR1")	1      	tikv_task:{time:0s, loops:3}, scan_detail: {total_process_keys: 105, total_process_keys_size: 32531, total_keys: 106, get_snapshot_time: 17.7µs, rocksdb: {block: {}}}                    	N/A      	N/A
	    └─TableFullScan_8	cop[tikv]	10000  	table:user, keep order:false, stats:pseudo            	105    	tikv_task:{time:0s, loops:3}                                                                                                                                                               	N/A      	N/A`,
    foldProps: {
      defaultHeight: 100,
      iconVisible: true
    },
    codeRender: (content) => <pre>{content}</pre>
  }
}
