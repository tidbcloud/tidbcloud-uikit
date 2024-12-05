import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconAward05 = (props, ref) => {
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
        d="M7.135 11.189 3.33 4.381c-.437-.783-.656-1.175-.619-1.495a1 1 0 0 1 .41-.697C3.38 2 3.83 2 4.726 2h2.235c.333 0 .5 0 .65.048a1 1 0 0 1 .357.205c.118.104.202.248.372.535L12 9l3.659-6.212c.169-.287.254-.43.37-.535a1 1 0 0 1 .359-.205c.15-.048.316-.048.65-.048h2.234c.897 0 1.345 0 1.607.189a1 1 0 0 1 .41.697c.036.32-.183.712-.62 1.495l-3.805 6.808M10.5 14l1.5-1v5m-1.25 0h2.5m3.346-7.096a6.5 6.5 0 1 1-9.192 9.192 6.5 6.5 0 0 1 9.192-9.192"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconAward05)
const Award05 = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
Award05.displayName = 'IconAward05'
export default Award05
