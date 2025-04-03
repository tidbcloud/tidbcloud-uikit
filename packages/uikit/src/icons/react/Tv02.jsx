import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTv02 = (props, ref) => {
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
        d="M11.333 14L7.99967 11.3333L4.66634 14M4.53301 11.3333H11.4663C12.5864 11.3333 13.1465 11.3333 13.5743 11.1153C13.9506 10.9236 14.2566 10.6176 14.4484 10.2413C14.6663 9.81349 14.6663 9.25344 14.6663 8.13333V5.2C14.6663 4.0799 14.6663 3.51984 14.4484 3.09202C14.2566 2.71569 13.9506 2.40973 13.5743 2.21799C13.1465 2 12.5864 2 11.4663 2H4.53301C3.4129 2 2.85285 2 2.42503 2.21799C2.0487 2.40973 1.74274 2.71569 1.55099 3.09202C1.33301 3.51984 1.33301 4.0799 1.33301 5.2V8.13333C1.33301 9.25344 1.33301 9.81349 1.55099 10.2413C1.74274 10.6176 2.0487 10.9236 2.42503 11.1153C2.85285 11.3333 3.4129 11.3333 4.53301 11.3333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTv02)
const Tv02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Tv02', props.className].join(' ')}
    />
  )
})
Tv02.displayName = 'IconTv02'
export default Tv02
