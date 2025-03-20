import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLinkBroken01 = (props, ref) => {
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
        d="M9 4V2m6 18v2M4 9H2m18 6h2M4.914 4.914 3.5 3.5m15.586 15.586L20.5 20.5M12 17.657l-2.121 2.121a4 4 0 1 1-5.657-5.657L6.343 12m11.314 0 2.121-2.121a4 4 0 1 0-5.657-5.657L12 6.343"
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
      className={[props.className, 'tiui-icon', 'LinkBroken01'].join(' ')}
    />
  )
})
LinkBroken01.displayName = 'IconLinkBroken01'
export default LinkBroken01
