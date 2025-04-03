import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLinkExternal01 = (props, ref) => {
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
        d="M14 6L14 2M14 2H10M14 2L8.66667 7.33333M6.66667 3.33333H5.2C4.0799 3.33333 3.51984 3.33333 3.09202 3.55132C2.71569 3.74307 2.40973 4.04903 2.21799 4.42535C2 4.85318 2 5.41323 2 6.53333V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14H9.46667C10.5868 14 11.1468 14 11.5746 13.782C11.951 13.5903 12.2569 13.2843 12.4487 12.908C12.6667 12.4802 12.6667 11.9201 12.6667 10.8V9.33333"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLinkExternal01)
const LinkExternal01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LinkExternal01', props.className].join(' ')}
    />
  )
})
LinkExternal01.displayName = 'IconLinkExternal01'
export default LinkExternal01
