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
      ref={ref}
      {...props}
    >
      <path
        d="M6.00016 2.66659V1.33325M10.0002 13.3333V14.6666M2.66683 5.99992H1.3335M13.3335 9.99992H14.6668M3.27631 3.27606L2.3335 2.33325M12.724 12.7238L13.6668 13.6666M8.00016 11.7712L6.58595 13.1854C5.54455 14.2268 3.85611 14.2268 2.81471 13.1854C1.77331 12.144 1.77331 10.4555 2.81471 9.41413L4.22893 7.99992M11.7714 7.99992L13.1856 6.5857C14.227 5.54431 14.227 3.85587 13.1856 2.81447C12.1442 1.77307 10.4558 1.77307 9.41438 2.81447L8.00016 4.22868"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
