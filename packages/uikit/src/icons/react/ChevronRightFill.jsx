import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconChevronRightFill = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M8.4 18.8255C8.01113 18.5276 8.00017 17.8535 8.0002 17.4773V12.0937L8 6.81244C8 6.36303 8.0003 5.71802 8.22065 5.34329C8.44147 4.96776 8.81418 4.97696 9.03055 5.02149C9.14528 5.0451 9.24361 5.11253 9.32883 5.1929L15.5874 11.0952C15.5958 11.1032 15.6039 11.111 15.6117 11.1196C15.6777 11.1917 16 11.571 16 12.0937C16 12.5982 15.6997 12.9691 15.6195 13.0592C15.6067 13.0737 15.594 13.0858 15.5796 13.0987C15.1943 13.4455 9.4713 18.5958 9.20001 18.8255C8.91926 19.0631 8.69722 19.0531 8.4 18.8255Z"
        fill="currentColor"
        strokeWidth="inherit"
        stroke="currentColor"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconChevronRightFill)
const ChevronRightFill = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ChevronRightFill', props.className].join(' ')}
    />
  )
})
ChevronRightFill.displayName = 'IconChevronRightFill'
export default ChevronRightFill
