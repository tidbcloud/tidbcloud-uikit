import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShuffle01 = (props, ref) => {
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
        d="M12 10L14 12M14 12L12 14M14 12H12.3793C11.7531 12 11.44 12 11.1559 11.9137C10.9043 11.8373 10.6702 11.712 10.4671 11.5451C10.2377 11.3565 10.064 11.096 9.71669 10.575L9.55556 10.3333M12 2L14 4M14 4L12 6M14 4H12.3793C11.7531 4 11.44 4 11.1559 4.0863C10.9043 4.1627 10.6702 4.28796 10.4671 4.45491C10.2377 4.64349 10.064 4.90398 9.71669 5.42496L6.28331 10.575C5.93599 11.096 5.76232 11.3565 5.53288 11.5451C5.32976 11.712 5.09572 11.8373 4.84414 11.9137C4.55996 12 4.24689 12 3.62075 12H2M2 4H3.62075C4.24689 4 4.55996 4 4.84414 4.0863C5.09572 4.1627 5.32976 4.28796 5.53288 4.45491C5.76232 4.64349 5.93599 4.90398 6.28331 5.42496L6.44444 5.66667"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShuffle01)
const Shuffle01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Shuffle01', props.className].join(' ')}
    />
  )
})
Shuffle01.displayName = 'IconShuffle01'
export default Shuffle01
