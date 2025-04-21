import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLinkBroken02 = (props, ref) => {
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
        d="M5.66665 10.3333L10.3333 5.66666M5.99998 2.66668V1.33334M9.99998 13.3333V14.6667M2.66665 6.00001H1.33331M13.3333 10H14.6666M3.27612 3.27615L2.33331 2.33334M12.7239 12.7238L13.6667 13.6666M8 11.7712L6.58579 13.1854C5.54439 14.2268 3.85595 14.2268 2.81455 13.1854C1.77315 12.144 1.77315 10.4556 2.81455 9.41417L4.22877 7.99995M11.7712 7.99995L13.1855 6.58574C14.2269 5.54434 14.2269 3.8559 13.1855 2.8145C12.1441 1.7731 10.4556 1.7731 9.41422 2.8145L8 4.22872"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLinkBroken02)
const LinkBroken02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LinkBroken02', props.className].join(' ')}
    />
  )
})
LinkBroken02.displayName = 'IconLinkBroken02'
export default LinkBroken02
