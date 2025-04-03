import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBuilding08 = (props, ref) => {
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
        d="M2 14H14M4 12V6.66665M6.66667 12V6.66665M9.33333 12V6.66665M12 12V6.66665M13.3333 4.66665L8.28267 1.50998C8.18012 1.44589 8.12885 1.41385 8.07386 1.40135C8.02524 1.3903 7.97476 1.3903 7.92614 1.40135C7.87115 1.41385 7.81988 1.44589 7.71733 1.50998L2.66667 4.66665H13.3333Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBuilding08)
const Building08 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Building08', props.className].join(' ')}
    />
  )
})
Building08.displayName = 'IconBuilding08'
export default Building08
