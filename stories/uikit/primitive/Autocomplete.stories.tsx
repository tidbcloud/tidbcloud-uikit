import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Autocomplete } from '@tidbcloud/uikit'

import { SIZE_LIST } from '../../constants'

type Story = StoryObj<typeof Autocomplete>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Autocomplete> = {
  title: 'Primitive/Autocomplete',
  component: Autocomplete,
  decorators: [decorator],
  parameters: {}
}

export default meta

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' }
]

function getDescriptionItem(description: string, type: string) {
  return {
    description,
    table: {
      type: {
        summary: type
      }
    }
  }
}

function Demo({ ...props }) {
  return <Autocomplete data={data} label="Your favorite frameworks/libraries" placeholder="Pick one" {...props} />
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...props }) => <Demo {...props} />,
  parameters: {
    controls: { expanded: true }
  },
  args: {},
  argTypes: {
    defaultValue: {
      control: { type: 'text' }
    },
    description: {
      control: { type: 'text' }
    },
    descriptionProps: {
      control: { type: 'text' },
      ...getDescriptionItem('Props spread to description element', 'Record<string, any>')
    },
    disabled: {
      control: 'boolean'
    },
    dropdownComponent: {
      control: { type: 'text' },
      ...getDescriptionItem('Change dropdown component, can be used to add native scrollbars', 'any')
    },
    dropdownPosition: {
      control: { type: 'select' },
      options: ['bottom', 'top', 'flip']
    },
    error: {
      control: { type: 'text' },
      ...getDescriptionItem('Displays error message after input', 'ReactNode')
    },
    errorProps: {
      control: { type: 'text' },
      ...getDescriptionItem('Props spread to error element', 'Record<string, any>')
    },
    filter: {
      control: { type: 'text' },
      ...getDescriptionItem(
        'Function based on which items in dropdown are filtered',
        '(value: string, item: AutocompleteItem) => boolean'
      )
    },
    hoverOnSearchChange: {
      description: 'Hovers the first result when input changes',
      control: { type: 'boolean' }
    },
    icon: {
      control: { type: 'text' },
      ...getDescriptionItem('Adds icon on the left side of input', 'ReactNode')
    },
    iconWidth: {
      control: { type: 'text' }
    },
    initiallyOpened: {
      control: 'boolean'
    },
    inputContainer: {
      control: { type: 'text' },
      ...getDescriptionItem(
        'Input container component, defaults to React.Fragment',
        '(children: ReactNode) => ReactNode'
      )
    },
    inputWrapperOrder: {
      control: { type: 'text' },
      ...getDescriptionItem(
        'Controls order of the Input.Wrapper elements',
        '("input" | "label" | "error" | "description")[]'
      )
    },
    itemComponent: {
      control: { type: 'text' },
      ...getDescriptionItem('Change item renderer', 'FC<any>')
    },
    label: {
      control: { type: 'text' },
      ...getDescriptionItem('Input label, displayed before input', 'ReactNode')
    },
    labelProps: {
      control: { type: 'text' },
      ...getDescriptionItem('Props spread to label element', 'Record<string, any>')
    },
    limit: {
      control: { type: 'number' },
      ...getDescriptionItem('Limit amount of items displayed at a time for searchable select', 'number')
    },
    maxDropdownHeight: {
      control: { type: 'text' },
      ...getDescriptionItem('Max dropdown height', 'string | number')
    },
    nothingFound: {
      control: { type: 'text' },
      ...getDescriptionItem('Nothing found label', 'ReactNode')
    },
    onChange: {
      control: { type: 'text' },
      ...getDescriptionItem('Controlled input onChange handler', '(value: string) => void')
    },
    onDropdownClose: {
      control: { type: 'text' },
      ...getDescriptionItem('Called when dropdown is closed', '() => void')
    },
    onDropdownOpen: {
      control: { type: 'text' },
      ...getDescriptionItem('Called when dropdown is opened', '() => void')
    },
    onItemSubmit: {
      control: { type: 'text' },
      ...getDescriptionItem('Called when item is selected', '(item: AutocompleteItem) => void')
    },
    positionDependencies: {
      control: { type: 'text' },
      ...getDescriptionItem('useEffect dependencies to force update dropdown position', 'any[]')
    },
    radius: {
      control: { type: 'select' },
      options: SIZE_LIST
    },
    required: {
      control: 'boolean'
    },
    rightSection: {
      control: { type: 'text' }
    },
    rightSectionProps: {
      control: { type: 'text' }
    },
    rightSectionWidth: {
      control: { type: 'number' },
      ...getDescriptionItem('Width of right section, is used to calculate input padding-right', 'Record<string, any>')
    },
    shadow: {
      control: { type: 'text' },
      ...getDescriptionItem('Dropdown shadow from theme or any value to set box-shadow', 'MantineShadow')
    },
    size: {
      control: { type: 'select' },
      options: SIZE_LIST
    },
    switchDirectionOnFlip: {
      control: { type: 'boolean' }
    },
    transitionProps: {
      control: { type: 'text' },
      ...getDescriptionItem(
        "Props added to Transition component that used to animate dropdown presence, use to configure duration and animation type, { duration: 0, transition: 'fade' } by default",
        'Partial<Omit<TransitionProps, "mounted">>'
      )
    },
    value: {
      control: { type: 'text' }
    },
    variant: {
      control: { type: 'select' },
      options: ['unstyled', 'default', 'filled']
    },
    withAsterisk: {
      control: { type: 'boolean' }
    },
    withinPortal: {
      control: { type: 'boolean' }
    },
    wrapperProps: {
      control: { type: 'text' },
      ...getDescriptionItem('Props spread to root element', 'Record<string, any>')
    },
    zIndex: {
      control: { type: 'number' }
    }
  }
}
