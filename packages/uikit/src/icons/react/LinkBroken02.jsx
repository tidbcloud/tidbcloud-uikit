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
      ref={ref}
      {...props}
    >
      <path
        d="M5.66683 10.3333L10.3335 5.66663M6.00016 2.66665V1.33331M10.0002 13.3333V14.6666M2.66683 5.99998H1.3335M13.3335 9.99998H14.6668M3.27631 3.27612L2.3335 2.33331M12.724 12.7238L13.6668 13.6666M8.00019 11.7712L6.58597 13.1854C5.54457 14.2268 3.85613 14.2268 2.81474 13.1854C1.77334 12.144 1.77334 10.4555 2.81474 9.41414L4.22895 7.99992M11.7714 7.99992L13.1856 6.58571C14.227 5.54431 14.227 3.85587 13.1856 2.81447C12.1442 1.77307 10.4558 1.77307 9.4144 2.81447L8.00019 4.22869"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
