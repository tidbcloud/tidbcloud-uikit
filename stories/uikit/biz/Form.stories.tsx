import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Group, Center, Divider } from '@tidbcloud/uikit'
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
  FormCopyText,
  FormRadioGroup,
  FormSegmentedControl,
  FormCheckboxGroup,
  FormCheckbox
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
  tags: ['autodocs']
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: ({ ...args }) => (
    <Center w={500} m="0 auto" p="sm">
      <Form
        {...args}
        w={'100%'}
        formMode="onChange"
        layoutProps={{ gap: 'xs' }}
        onSubmit={() => {
          throw new Error('Test error')
        }}
      >
        <p>
          Form component base on{' '}
          <a href="https://react-hook-form.com/docs" target="_blank">
            react-hook-form
          </a>
          .
        </p>
        <Group grow align="flex-start">
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
          leftSection={<IconAtom01 size={16} stroke="1.5" />}
        />
        <FormTextInput
          name="url"
          mt="md"
          required
          placeholder="Your url"
          label="url"
          leftLabel="https://www.test.com"
          rules={{ required: 'Required' }}
        />
        <FormTextInput
          name="speed"
          mt="md"
          required
          placeholder=""
          label="Speed"
          rightLabel="MiB/s"
          rules={{ required: 'Required' }}
        />
        <FormTextInput
          name="domain"
          mt="md"
          required
          placeholder="Your domain"
          label="url"
          leftLabel="https://www."
          rightLabel=".com"
          rules={{ required: 'Required' }}
        />
        <FormPasswordInput
          name="password"
          mt="md"
          required
          placeholder="Password"
          label="Password"
          rules={{ minLength: { value: 8, message: 'min length is 8' } }}
          leftSection={<IconLock01 size={16} stroke="1.5" />}
        />
        <FormSegmentedControl
          name="option"
          mt="md"
          data={[
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' }
          ]}
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
            filterData(data, index, array) {
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
        <FormRadioGroup
          name="radio"
          data={[
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' },
            { label: 'Angular', value: 'angular' },
            {
              label: 'Svelte',
              value: 'svelte',
              disabled: true,
              tooltip: 'Svelte is a JavaScript framework for building user interfaces.',
              tooltipProps: {
                useTooltip: true
              }
            }
          ]}
          label="Your favorite framework"
        />
        <FormCheckboxGroup
          name="checkboxGroup1"
          data={[
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' },
            { label: 'Angular', value: 'angular' },
            { label: 'Svelte', value: 'svelte' }
          ]}
          label="Your favorite framework"
          direction="column"
        />

        <FormCheckboxGroup
          name="checkboxGroup2"
          data={[
            { label: 'React', value: 'react' },
            { label: 'Vue', value: 'vue' },
            { label: 'Angular', value: 'angular' },
            { label: 'Svelte', value: 'svelte' }
          ]}
          label="Your favorite framework"
          direction="row"
        />

        <Divider />

        <FormCheckbox name="checkbox" label="I agree to the terms and conditions" />
      </Form>
    </Center>
  ),
  args: {
    withActions: true,
    layout: 'vertical',
    layoutProps: {},
    actionsProps: {
      loading: false,
      disabled: false,
      onCancel: () => {},
      onConfirm: () => {},
      cancelText: 'Cancel',
      confirmText: 'Confirm',
      cancelProps: {},
      confirmProps: {}
    },
    errorMessageProps: {
      onDismiss: () => {},
      autoScroll: false,
      closable: true
    },
    stopPropagation: false,
    preventDefault: false,
    defaultValues: {},
    formMode: 'all',
    reValidateMode: 'onChange',
    onSubmit: (data, event) => {}
  },
  argTypes: {
    withActions: {
      description: 'Hide or show action buttons'
    },
    actionsProps: {
      description: 'Props for actions buttons'
    },
    layout: {
      type: 'string',
      description: 'Layout for form, can be `vertical`, `vertical` or `none`'
    },
    layoutProps: {
      description: 'Layout props, same as `FlexProps`'
    },
    errorMessageProps: {
      description: 'Props for error message, extends from `AlertProps`'
    },
    stopPropagation: {
      description: 'Prevents further propagation of the current submit event'
    },
    preventDefault: {
      description: 'Prevent default form event behaviors'
    },
    form: {
      description: 'Form instance for `useForm`, with this props to have full control of form'
    },
    defaultValues: {
      description:
        'Default values for the form, note: if `form` is provided, this props will not work and you should set it in `form`'
    },
    formMode: {
      description: 'Same as `react-hook-form` -> `Mode`'
    },
    reValidateMode: {
      description: 'Same as `react-hook-form` -> `reValidateMode`'
    },
    onSubmit: {
      description: 'Submit Event handler'
    }
  },
  parameters: {}
}
