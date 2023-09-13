import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Group, Center } from '@tidbcloud/uikit'
import {
  Form,
  FormTextInput,
  FormPasswordInput,
  FormMultiSelect,
  FormSelect,
  FormNumberInput,
  FormRatingInput,
  FormSwitch,
  FormTextareaInput,
  FormPhoneInput
} from '@tidbcloud/uikit/biz'
import { Icon } from '@tidbcloud/uikit/icons'

type Story = StoryObj<typeof Form>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Form> = {
  title: 'Biz/Form',
  component: Form,
  decorators: [decorator],
  tags: ['autodocs'],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...args }) => (
    <Center w={500} m="0 auto">
      <Form
        onSubmit={() => {
          throw new Error('Test error')
        }}
        w={'100%'}
      >
        <Group grow>
          <FormTextInput name="first_name" required placeholder="Your first name" label="First name" />
          <FormTextInput name="last_name" required placeholder="Your last name" label="Last name" />
        </Group>
        <FormTextInput
          name="email"
          mt="md"
          required
          placeholder="Your email"
          label="Email"
          icon={<Icon name="Atom01" size={16} stroke="1.5" />}
        />
        <FormTextInput name="url" mt="md" required placeholder="Your url" label="url" leftLabel="https://www.test." />
        <FormPasswordInput
          name="password"
          mt="md"
          required
          placeholder="Password"
          label="Password"
          icon={<Icon name="Lock01" size={16} stroke="1.5" />}
        />
        <FormPhoneInput name="phone" label="Phone Number" />
        <FormSelect
          name="framework"
          data={[
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' }
          ]}
          label="Framework"
        ></FormSelect>
        <FormMultiSelect
          name="framework"
          placeholder="Framework"
          data={[
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' }
          ]}
          label="Multi Frameworks"
        />
        <FormNumberInput name="amount" label="Amount" placeholder="Your amount" />
        <FormRatingInput name="rating" label="Rating" placeholder="Your rating" />
        <FormSwitch name="Checked" label="Checked" />
        <FormTextareaInput name="message" label="Messasge" placeholder="Your message" minRows={2} />
      </Form>
    </Center>
  ),
  args: {}
}
