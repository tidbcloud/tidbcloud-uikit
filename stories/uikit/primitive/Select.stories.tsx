import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Select, Stack, Group } from '@tidbcloud/uikit'
import { useTimeout } from '@tidbcloud/uikit/hooks'
import { useState } from 'react'

import { SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Select>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Select> = {
  title: 'Primitive/Combobox/Select',
  component: Select,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: (props) => (
    <Select
      {...props}
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' }
      ]}
    />
  ),
  args: {
    label: 'Your favorite framework/library',
    placeholder: 'Pick one',
    description: 'This is a description',
    error: '',
    disabled: false
  },
  argTypes: {
    variant: {
      options: ['default', 'unstyled', 'filled'],
      control: {
        type: 'select'
      }
    },
    error: {
      control: {
        type: 'text'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    label: {
      control: {
        type: 'text'
      }
    },
    placeholder: {
      control: {
        type: 'text'
      }
    }
  }
}

const data = ['React', 'Angular', 'Vue', 'Svelte']

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <Select data={data} clearable defaultValue="React" readOnly searchable />
    </div>
  )
}

export function OverrideDropdownPadding() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={Array(100)
          .fill(0)
          .map((_, index) => `Item ${index}`)}
      />
    </div>
  )
}

export function Scroll() {
  const content = Array(20)
    .fill(0)
    .map((_, index) => <p key={index}>Item ${index}</p>)

  return (
    <div>
      {content}
      <Select data={['react']} />
      {content}
    </div>
  )
}

export function AllSizes() {
  return (
    <Stack style={{ padding: 40 }}>
      {SIZE_LIST.map((size) => (
        <Group>
          {size}:
          <Select
            data={data}
            placeholder={`Select ${size}`}
            size={size}
            clearable
            defaultValue={data[0]}
            key={size}
            mt="md"
          />
        </Group>
      ))}
    </Stack>
  )
}

const CustomRenderOptionWithDataMapCode = `const data: Record<string, { label: string; url: string }> = {
  react: {
    label: 'React',
    url: 'https://react.dev/'
  },
  angular: {
    label: 'Angular',
    url: 'https://angular.io/'
  },
  vue: {
    label: 'Vue',
    url: 'https://vuejs.org/'
  },
  svelte: {
    label: 'Svelte',
    url: 'https://svelte.dev/'
  }
}

return (
  <Select
    data={Object.entries(data).map(([k, v]) => ({ value: k, label: v.label }))}
    placeholder="Select a framework"
    renderOption={(item) => data[item.option.value].url}
  />
)`

export const CustomRenderOptionWithDataMap: Story = {
  render: () => {
    const data: Record<string, { label: string; url: string }> = {
      react: {
        label: 'React',
        url: 'https://react.dev/'
      },
      angular: {
        label: 'Angular',
        url: 'https://angular.io/'
      },
      vue: {
        label: 'Vue',
        url: 'https://vuejs.org/'
      },
      svelte: {
        label: 'Svelte',
        url: 'https://svelte.dev/'
      }
    }

    return (
      <Select
        data={Object.entries(data).map(([k, v]) => ({ value: k, label: v.label }))}
        placeholder="Select a framework"
        renderOption={(item) => data[item.option.value].url}
      />
    )
  },
  parameters: {
    docs: {
      source: {
        code: CustomRenderOptionWithDataMapCode,
        language: 'tsx'
      }
    }
  }
}

const CustomRenderOptionWithDataArrayCode = `const data = [
  { value: 'react', label: 'React', url: 'https://react.dev/' },
  { value: 'angular', label: 'Angular', url: 'https://angular.io/' },
  { value: 'vue', label: 'Vue', url: 'https://vuejs.org/' },
  { value: 'svelte', label: 'Svelte', url: 'https://svelte.dev/' }
]

type DataItem = (typeof data)[number]

return <Select data={data} renderOption={(item: { option: DataItem }) => item.option.url} />`

export const CustomRenderOptionWithDataArray: Story = {
  render: () => {
    const data = [
      { value: 'react', label: 'React', url: 'https://react.dev/' },
      { value: 'angular', label: 'Angular', url: 'https://angular.io/' },
      { value: 'vue', label: 'Vue', url: 'https://vuejs.org/' },
      { value: 'svelte', label: 'Svelte', url: 'https://svelte.dev/' }
    ]

    type DataItem = (typeof data)[number]

    return <Select data={data} renderOption={(item: { option: DataItem }) => item.option.url} />
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: CustomRenderOptionWithDataArrayCode
      }
    }
  }
}

export const Creatable: Story = {
  render: () => {
    const [data, setData] = useState(['react', 'angular', 'vue', 'svelte'])
    return (
      <Select
        creatable
        data={data}
        onCreate={(value) => {
          setData([...data, value])
          return { value, label: value }
        }}
      />
    )
  }
}

export function Closure() {
  const [innerValue, setInnerValue] = useState('')

  useTimeout(
    () => {
      setInnerValue('react')
      console.log('setInnerValue')
    },
    5000,
    {
      autoInvoke: true
    }
  )

  return (
    <Select
      data={data}
      onChange={(value) => {
        console.log('onChange', value, 'innerValue', innerValue)
      }}
    />
  )
}
