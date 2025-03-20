import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudRaining04 = (props, ref) => {
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
        d="M16 18.5V21M8 18.5V21M12 19.5V22M7 15C4.23858 15 2 12.7614 2 10C2 7.23858 4.23858 5 7 5C7.03315 5 7.06622 5.00032 7.09922 5.00097C8.0094 3.2196 9.86227 2 12 2C14.5192 2 16.6429 3.69375 17.2943 6.00462C17.3625 6.00155 17.4311 6 17.5 6C19.9853 6 22 8.01472 22 10.5C22 12.9853 19.9853 15 17.5 15C13.7434 15 11.2352 15 7 15Z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudRaining04)
const CloudRaining04 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'CloudRaining04'].join(' ')}
    />
  )
})
CloudRaining04.displayName = 'IconCloudRaining04'
export default CloudRaining04
