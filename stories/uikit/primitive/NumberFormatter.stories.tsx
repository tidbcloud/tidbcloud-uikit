import type { Meta, StoryFn } from '@storybook/react'
import { NumberFormatter } from '@tidbcloud/uikit'

const decorator = (Story: StoryFn) => {
  return (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
}

const meta: Meta<typeof NumberFormatter> = {
  title: 'Primitive/Data display/NumberFormatter',
  component: NumberFormatter,
  decorators: [decorator],
  parameters: {}
}

export default meta

export function Basic() {
  return <NumberFormatter prefix="$ " value={1000000} thousandSeparator />
}

export function PrefixAndSuffix() {
  return (
    <>
      <div>
        With prefix: <NumberFormatter prefix="$ " value={100} />
      </div>
      <div>
        With suffix: <NumberFormatter value={100} suffix=" RUB" />
      </div>
    </>
  )
}

export function ThousandSeparator() {
  return (
    <>
      <div>
        With default separator: <NumberFormatter thousandSeparator value={1000000} />
      </div>
      <div>
        With custom separator: <NumberFormatter thousandSeparator="." decimalSeparator="," value={1000000} />
      </div>
    </>
  )
}

export function DecimalScale() {
  return <NumberFormatter value={5 / 3} decimalScale={2} />
}
