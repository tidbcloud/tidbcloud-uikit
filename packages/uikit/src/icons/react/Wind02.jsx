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
      ref={ref}
      {...props}
    >
      <path
        d="M6.33969 3.11095C6.58383 2.83817 6.93862 2.6665 7.33351 2.6665C8.06989 2.6665 8.66684 3.26346 8.66684 3.99984C8.66684 4.73622 8.06989 5.33317 7.33351 5.33317H1.33351M8.33969 12.8887C8.58383 13.1615 8.93862 13.3332 9.33351 13.3332C10.0699 13.3332 10.6668 12.7362 10.6668 11.9998C10.6668 11.2635 10.0699 10.6665 9.33351 10.6665H1.33351M11.1761 4.6665C11.5423 4.25734 12.0745 3.99984 12.6668 3.99984C13.7714 3.99984 14.6668 4.89527 14.6668 5.99984C14.6668 7.10441 13.7714 7.99984 12.6668 7.99984H1.3335"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
