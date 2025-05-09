import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconWind02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M6.33944 3.11095C6.58359 2.83817 6.93838 2.6665 7.33327 2.6665C8.06965 2.6665 8.6666 3.26346 8.6666 3.99984C8.6666 4.73622 8.06965 5.33317 7.33327 5.33317H1.33327M8.33944 12.8887C8.58359 13.1615 8.93838 13.3332 9.33327 13.3332C10.0696 13.3332 10.6666 12.7362 10.6666 11.9998C10.6666 11.2635 10.0696 10.6665 9.33327 10.6665H1.33327M11.1759 4.6665C11.5421 4.25734 12.0743 3.99984 12.6666 3.99984C13.7712 3.99984 14.6666 4.89527 14.6666 5.99984C14.6666 7.10441 13.7712 7.99984 12.6666 7.99984H1.33325"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconWind02)
const Wind02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Wind02', props.className].join(' ')}
    />
  )
})
Wind02.displayName = 'IconWind02'
export default Wind02
