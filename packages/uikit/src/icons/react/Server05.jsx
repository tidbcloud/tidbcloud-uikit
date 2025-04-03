import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconServer05 = (props, ref) => {
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
        d="M12.6667 6.00016C12.6667 8.57749 10.5773 10.6668 8 10.6668M12.6667 6.00016C12.6667 3.42283 10.5773 1.3335 8 1.3335M12.6667 6.00016H3.33333M8 10.6668C5.42267 10.6668 3.33333 8.57749 3.33333 6.00016M8 10.6668C9.16726 9.38893 9.83123 7.73055 9.86727 6.00016C9.83123 4.26978 9.16726 2.61139 8 1.3335M8 10.6668C6.83274 9.38893 6.16999 7.73055 6.13394 6.00016C6.16999 4.26978 6.83274 2.61139 8 1.3335M8 10.6668V12.0002M3.33333 6.00016C3.33333 3.42283 5.42267 1.3335 8 1.3335M9.33333 13.3335C9.33333 14.0699 8.73638 14.6668 8 14.6668C7.26362 14.6668 6.66667 14.0699 6.66667 13.3335M9.33333 13.3335C9.33333 12.5971 8.73638 12.0002 8 12.0002M9.33333 13.3335H14M6.66667 13.3335C6.66667 12.5971 7.26362 12.0002 8 12.0002M6.66667 13.3335H2"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconServer05)
const Server05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Server05', props.className].join(' ')}
    />
  )
})
Server05.displayName = 'IconServer05'
export default Server05
