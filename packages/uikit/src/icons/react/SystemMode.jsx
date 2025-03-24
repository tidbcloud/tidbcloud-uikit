import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSystemMode = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M16.3803 20.9921C15.0575 21.6377 13.5711 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.5711 2 15.0575 2.36229 16.3803 3.00789M16.3803 20.9921C16.2542 20.9974 16.1274 21 16 21C11.0294 21 7 16.9706 7 12C7 7.02944 11.0294 3 16 3C16.1274 3 16.2542 3.00265 16.3803 3.00789M16.3803 20.9921C17.8846 20.4378 19.4203 18.7678 20 18.0021C22.6661 14.4578 22.6667 9.54505 20.0017 6.00022C19.4214 5.23373 18 3.79836 16.3803 3.00789"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSystemMode)
const SystemMode = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'SystemMode', props.className].join(' ')}
    />
  )
})
SystemMode.displayName = 'IconSystemMode'
export default SystemMode
