import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudSnowing02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 18h.01M8 21h.01M12 18.5h.01m-.01 3h.01M16 18h.01M16 21h.01M7 15a5 5 0 1 1 .1-9.999 5.502 5.502 0 0 1 10.195 1.004Q17.395 6 17.5 6a4.5 4.5 0 1 1 0 9z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudSnowing02)
const CloudSnowing02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CloudSnowing02'].join(' ')}
    />
  )
})
CloudSnowing02.displayName = 'IconCloudSnowing02'
export default CloudSnowing02
