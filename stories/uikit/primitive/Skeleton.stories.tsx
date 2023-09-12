import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { Button, Group, Skeleton, Typography } from '@tidbcloud/uikit'
import { useState } from 'react'

type Story = StoryObj<typeof Skeleton>

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Skeleton> = {
  title: 'Primitive/Skeleton',
  component: Skeleton,
  decorators: [decorator],
  parameters: {}
}

export default meta

function Demo() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <Skeleton visible={loading}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolor nihil amet tempore magnam optio, numquam
          nostrum inventore tempora assumenda saepe, aut repellat. Temporibus aspernatur aperiam magnam debitis facere
          odio?
        </Typography>
        <Typography>
          Laborum fuga quam voluptas aut pariatur delectus repudiandae commodi tempora debitis dolores vero cumque magni
          cum, deserunt, ad tempore consectetur libero molestias similique nemo eum! Dolore maxime voluptate inventore
          atque.
        </Typography>
      </Skeleton>

      <Group position="center" mt="xs">
        <Button onClick={() => setLoading((l) => !l)}>Toggle Skeleton</Button>
      </Group>
    </>
  )
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const Primary: Story = {
  render: () => <Demo></Demo>,
  args: {}
}
