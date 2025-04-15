import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconChevronLeft1 = (props, ref) => {
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
        d="M10.4003 3.44976C10.6596 3.64834 10.6669 4.09774 10.6669 4.34857L10.6669 7.93762L10.667 11.4585C10.667 11.7581 10.6668 12.1881 10.5199 12.4379C10.391 12.6571 10.1845 12.6797 10.0383 12.662C9.92201 12.6479 9.82338 12.578 9.73816 12.4977L5.61294 8.60725C5.60452 8.5993 5.59626 8.59126 5.58854 8.58264C5.53698 8.52506 5.33366 8.27654 5.33366 7.93759C5.33366 7.61347 5.51957 7.37205 5.58092 7.30119C5.59358 7.28658 5.60526 7.27539 5.61964 7.26246C5.92256 6.98984 9.68735 3.60182 9.86698 3.44976C10.0542 3.29132 10.2022 3.29798 10.4003 3.44976Z"
        fill="#383E40"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconChevronLeft1)
const ChevronLeft1 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'ChevronLeft1', props.className].join(' ')}
    />
  )
})
ChevronLeft1.displayName = 'IconChevronLeft1'
export default ChevronLeft1
