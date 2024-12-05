import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDoubleCheck = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 16 16"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.214 9.782A.722.722 0 1 1 2.23 8.756c1.012 1.009 1.998 2.013 3.023 3.014l-.428.507-.04.043a.72.72 0 0 1-1.02 0zm3.205-.416a.721.721 0 1 1 1.005-1.033l2.849 2.778 5.448-6.446c.612-.724 1.71.21 1.101.932l-5.951 7.036-.034.037a.72.72 0 0 1-1.02.014zm3.277-.48-.035.038-1.034-1.008 2.54-3.009c.612-.723 1.71.209 1.102.933L7.694 8.886z"
        clipRule="evenodd"
        strokeWidth="inherit"
        stroke="currentColor"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDoubleCheck)
const DoubleCheck = forwardRef((props, ref) => {
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
DoubleCheck.displayName = 'IconDoubleCheck'
export default DoubleCheck
