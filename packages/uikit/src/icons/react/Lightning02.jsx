import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLightning02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.25 2H8.494c-.18 0-.27 0-.348.027a.5.5 0 0 0-.187.116c-.06.058-.1.139-.18.3l-4.2 8.4c-.192.383-.288.574-.265.73a.5.5 0 0 0 .208.337c.129.09.343.09.772.09H10.5l-3 10L19.693 9.355c.411-.426.617-.64.629-.822a.5.5 0 0 0-.177-.415C20.005 8 19.71 8 19.117 8h-7.118z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLightning02)
const Lightning02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Lightning02'].join(' ')}
    />
  )
})
Lightning02.displayName = 'IconLightning02'
export default Lightning02
