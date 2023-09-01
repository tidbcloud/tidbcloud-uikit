import type { Meta, StoryFn } from '@storybook/react'
import { Box, Rating, Stack } from '@tidbcloud/uikit'
import { useState } from 'react'

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof Rating> = {
  title: 'Primitive/Rating',
  component: Rating,
  decorators: [decorator],
  parameters: {}
}

export default meta

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export function ReadOnlyWithDefaultValue() {
  return <Rating defaultValue={2} readOnly />
}

export function Sizes() {
  return (
    <Stack p="md">
      <Rating size="xs" defaultValue={1} />
      <Rating defaultValue={2} size="sm" />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={4} />
      <Rating size="xl" defaultValue={5} />
    </Stack>
  )
}

export function Fractions() {
  return (
    <Stack p="md">
      <Rating size="xl" defaultValue={3} fractions={2} />
      <Rating size="xl" defaultValue={3} fractions={3} />
      <Rating size="xl" defaultValue={3} fractions={4} />
    </Stack>
  )
}

export function WithCustomSymbol() {
  const size = 18
  return (
    <Stack p="md">
      <Rating
        fractions={2}
        defaultValue={3}
        emptySymbol={<Box sx={{ width: size, height: size, backgroundColor: 'gray', borderRadius: 999 }} />}
        fullSymbol={<Box sx={{ width: size, height: size, backgroundColor: 'red', borderRadius: 999 }} />}
      />

      <Rating
        defaultValue={3}
        count={6}
        highlightSelectedOnly
        emptySymbol={
          <Box
            sx={{
              width: size,
              height: size,
              backgroundColor: 'gray',
              borderRadius: 999
            }}
          />
        }
        fullSymbol={(value) => (
          <Box
            sx={{
              width: size,
              height: size,
              backgroundColor: value < 4 ? 'red' : 'green',
              borderRadius: 999
            }}
          />
        )}
      />
    </Stack>
  )
}

export function Readonly() {
  return (
    <Stack p="md">
      <Rating size="lg" fractions={2} readOnly defaultValue={3.5} />
    </Stack>
  )
}

export function Controlled() {
  const [value, setValue] = useState(0)

  return (
    <Stack p="md">
      <Rating size="lg" value={value} onChange={setValue} />
      <div>Value: {value}</div>
    </Stack>
  )
}
