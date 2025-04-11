import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRee = (props, ref) => {
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
        d="M3.33301 5.96232V14L7.99967 11.3333L12.6663 14V5.96232M3.33301 5.96232V5.2C3.33301 4.0799 3.33301 3.51984 3.55099 3.09202C3.74274 2.71569 4.0487 2.40973 4.42503 2.21799C4.85285 2 5.4129 2 6.53301 2H9.46634C10.5864 2 11.1465 2 11.5743 2.21799C11.9506 2.40973 12.2566 2.71569 12.4484 3.09202C12.6663 3.51984 12.6663 4.0799 12.6663 5.2V5.96232M3.33301 5.96232H12.6663"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRee)
const Ree = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Ree', props.className].join(' ')}
    />
  )
})
Ree.displayName = 'IconRee'
export default Ree
