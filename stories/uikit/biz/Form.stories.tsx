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
  FormPhoneInput,
  FormPhoneInputV2,
  FormCopyText
} from '@tidbcloud/uikit/biz'
import { IconAtom01, IconLock01 } from '@tidbcloud/uikit/icons'

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
        {...args}
        w={'100%'}
        formMode="onChange"
        onSubmit={() => {
          throw new Error('Test error')
        }}
      >
        <Group grow>
          <FormTextInput
            name="first_name"
            rules={{ minLength: { value: 10, message: 'min length is 10' } }}
            required
            placeholder="Your first name"
            label="First name"
          />
          <FormTextInput name="last_name" required placeholder="Your last name" label="Last name" />
        </Group>
        <FormTextInput
          name="email"
          mt="md"
          required
          placeholder="Your email"
          label="Email"
          icon={<IconAtom01 size={16} stroke="1.5" />}
        />
        <FormTextInput name="url" mt="md" required placeholder="Your url" label="url" leftLabel="https://www.test." />
        <FormPasswordInput
          name="password"
          mt="md"
          required
          placeholder="Password"
          label="Password"
          icon={<IconLock01 size={16} stroke="1.5" />}
        />
        <FormPhoneInput
          name="phone"
          label="Phone Number"
          rules={{ required: 'Required' }}
          placeholder="Your phone number"
        />
        <FormPhoneInputV2
          countryKey="country"
          phoneKey="phone_number"
          rules={{ required: 'Required' }}
          placeholder="Your phone number"
          selectProps={{
            placeholder: 'Country/Region',
            maxDropdownHeight: 180,
            searchable: true,
            onChange: (val) => {},
            onFilter(data, index, array) {
              if (data.value === 'kp') {
                return false
              }
              return true
            },
            styles: (theme) => {
              return {
                dropdown: {
                  width: '256px !important',
                  transform: 'translateX(58px)'
                },
                item: {
                  wordBreak: 'keep-all',
                  whiteSpace: 'nowrap'
                },
                root: {
                  width: 220
                },
                input: {
                  paddingRight: 20
                }
              }
            }
          }}
        />
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
        <FormRatingInput name="rating" label="Rating" />
        <FormSwitch name="Checked" label="Checked" />
        <FormTextareaInput name="message" label="Messasge" placeholder="Your message" minRows={2} />
        <FormCopyText value={'This is an example'} />
      </Form>
    </Center>
  ),
  args: {}
}
