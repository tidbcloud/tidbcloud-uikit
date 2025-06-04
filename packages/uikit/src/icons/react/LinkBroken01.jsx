import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLinkBroken01 = (props, ref) => {
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
        d="M6.00001 2.66659V1.33325M10 13.3333V14.6666M2.66668 5.99992H1.33334M13.3333 9.99992H14.6667M3.27615 3.27606L2.33334 2.33325M12.7239 12.7238L13.6667 13.6666M8.00001 11.7712L6.5858 13.1854C5.5444 14.2268 3.85596 14.2268 2.81456 13.1854C1.77316 12.144 1.77316 10.4555 2.81456 9.41413L4.22877 7.99992M11.7712 7.99992L13.1855 6.5857C14.2269 5.54431 14.2269 3.85587 13.1855 2.81447C12.1441 1.77307 10.4556 1.77307 9.41422 2.81447L8.00001 4.22868"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLinkBroken01)
const LinkBroken01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LinkBroken01', props.className].join(' ')}
    />
  )
})
LinkBroken01.displayName = 'IconLinkBroken01'
export default LinkBroken01
