import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCoinsStacked04 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M13.3332 3.3335C13.3332 4.43807 10.9454 5.3335 7.99984 5.3335C5.05432 5.3335 2.6665 4.43807 2.6665 3.3335M13.3332 3.3335C13.3332 2.22893 10.9454 1.3335 7.99984 1.3335C5.05432 1.3335 2.6665 2.22893 2.6665 3.3335M13.3332 3.3335V12.6668C13.3332 13.7714 10.9454 14.6668 7.99984 14.6668C5.05432 14.6668 2.6665 13.7714 2.6665 12.6668V3.3335M13.3332 6.44456C13.3332 7.54913 10.9454 8.44456 7.99984 8.44456C5.05432 8.44456 2.6665 7.54913 2.6665 6.44456M13.3332 9.5535C13.3332 10.6581 10.9454 11.5535 7.99984 11.5535C5.05432 11.5535 2.6665 10.6581 2.6665 9.5535"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCoinsStacked04)
const CoinsStacked04 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return (
    <MantineBox
      ref={ref}
      {...props}
      component={ForwardRef}
      className={['tiui-icon', 'CoinsStacked04', props.className].join(' ')}
    />
  )
})
CoinsStacked04.displayName = 'IconCoinsStacked04'
export default CoinsStacked04
