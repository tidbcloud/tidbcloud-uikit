import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconUmbrella02 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M7 19.4C7 20.8359 8.11929 22 9.5 22C10.8807 22 12 20.8359 12 19.4V11M12 11C10.3898 11 8 12 8 12C8 12 6.61017 11 5 11C3.38983 11 2 12 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12 20.6102 11 19 11C17.3898 11 16 12 16 12C16 12 13.6102 11 12 11Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconUmbrella02)
const Umbrella02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Umbrella02', props.className].join(' ')}
    />
  )
})
Umbrella02.displayName = 'IconUmbrella02'
export default Umbrella02
