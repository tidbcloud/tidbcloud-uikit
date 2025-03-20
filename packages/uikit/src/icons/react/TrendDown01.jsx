import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTrendDown01 = (props, ref) => {
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
        d="M22 17L14.1314 9.13137C13.7354 8.73535 13.5373 8.53735 13.309 8.46316C13.1082 8.3979 12.8918 8.3979 12.691 8.46316C12.4627 8.53735 12.2646 8.73535 11.8686 9.13137L9.13137 11.8686C8.73535 12.2646 8.53735 12.4627 8.30902 12.5368C8.10817 12.6021 7.89183 12.6021 7.69098 12.5368C7.46265 12.4627 7.26465 12.2646 6.86863 11.8686L2 7M22 17H15M22 17V10"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTrendDown01)
const TrendDown01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'TrendDown01'].join(' ')}
    />
  )
})
TrendDown01.displayName = 'IconTrendDown01'
export default TrendDown01
