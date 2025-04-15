import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLogOut03 = (props, ref) => {
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
        d="M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6M8 11.3333C8 11.5304 8 11.6289 7.99268 11.7143C7.91655 12.6013 7.26324 13.3312 6.39002 13.5049C6.30602 13.5216 6.20801 13.5324 6.01223 13.5542L5.3313 13.6299C4.30832 13.7435 3.7968 13.8004 3.39044 13.6703C2.84862 13.4969 2.40628 13.101 2.17412 12.5817C2 12.1921 2 11.6775 2 10.6482V5.3518C2 4.32251 2 3.80787 2.17412 3.41835C2.40628 2.89899 2.84862 2.50307 3.39044 2.32969C3.79681 2.19965 4.3083 2.25648 5.33129 2.37015L6.01223 2.44581C6.20808 2.46757 6.306 2.47845 6.39002 2.49515C7.26324 2.66877 7.91655 3.39869 7.99268 4.28574C8 4.37109 8 4.46962 8 4.66667"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLogOut03)
const LogOut03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LogOut03', props.className].join(' ')}
    />
  )
})
LogOut03.displayName = 'IconLogOut03'
export default LogOut03
