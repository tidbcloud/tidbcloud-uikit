import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE, Group, Text, rem } from '@tidbcloud/uikit'
import { IconUpload01, IconImage01, IconX } from '@tidbcloud/uikit/icons'

type Story = StoryObj<typeof Dropzone>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Dropzone> = {
  title: 'Primitive/Dropzone/Dropzone',
  component: Dropzone,
  decorators: [decorator],
  parameters: {}
}

export default meta

export function BaseDemo(props: Partial<DropzoneProps>) {
  return (
    <Dropzone
      onDrop={(files) => console.log('accepted files', files)}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={5 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
      {...props}
    >
      <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload01
            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
            stroke="1.5"
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }} stroke="1.5" />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconImage01 style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }} stroke="1.5" />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" c="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Dropzone onDrop={() => {}}></Dropzone>,
  args: {}
}
