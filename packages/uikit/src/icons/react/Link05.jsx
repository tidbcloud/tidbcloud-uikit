import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLink05 = (props, ref) => {
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
        d="M6.00001 11.3334H4.66668C2.82573 11.3334 1.33334 9.84103 1.33334 8.00008C1.33334 6.15913 2.82573 4.66675 4.66668 4.66675H6.00001M5.33334 8.00008L12 8.00008M10.5185 11.3334H11.3333C13.1743 11.3334 14.6667 9.84103 14.6667 8.00008C14.6667 6.15913 13.1743 4.66675 11.3333 4.66675H10.5185C10.2322 4.66675 10 4.8989 10 5.18527V10.8149C10 11.1013 10.2322 11.3334 10.5185 11.3334Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLink05)
const Link05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Link05', props.className].join(' ')}
    />
  )
})
Link05.displayName = 'IconLink05'
export default Link05
