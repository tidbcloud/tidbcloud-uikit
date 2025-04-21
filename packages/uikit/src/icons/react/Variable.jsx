import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconVariable = (props, ref) => {
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
        d="M13.2707 14C14.1642 12.1926 14.6666 10.1553 14.6666 8C14.6666 5.84474 14.1642 3.80744 13.2707 2M2.72927 2C1.83573 3.80744 1.33331 5.84474 1.33331 8C1.33331 10.1553 1.83574 12.1926 2.72927 14M11.0324 5.75H10.9726C10.537 5.75 10.1232 5.94134 9.83968 6.27381L6.25645 10.4762C5.97297 10.8087 5.55912 11 5.12352 11H5.06373M5.80987 5.75H6.73926C7.07237 5.75 7.36513 5.97198 7.45664 6.29396L8.6396 10.456C8.73111 10.778 9.02386 11 9.35697 11H10.2864"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconVariable)
const Variable = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Variable', props.className].join(' ')}
    />
  )
})
Variable.displayName = 'IconVariable'
export default Variable
