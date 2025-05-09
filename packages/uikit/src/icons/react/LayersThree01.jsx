import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLayersThree01 = (props, ref) => {
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
        d="M1.33331 7.99988L7.76147 11.214C7.84892 11.2577 7.89265 11.2795 7.93851 11.2882C7.97914 11.2958 8.02082 11.2958 8.06145 11.2882C8.10731 11.2795 8.15104 11.2577 8.23849 11.214L14.6666 7.99988M1.33331 11.3332L7.76147 14.5473C7.84892 14.591 7.89265 14.6129 7.93851 14.6215C7.97914 14.6291 8.02082 14.6291 8.06145 14.6215C8.10731 14.6129 8.15104 14.591 8.23849 14.5473L14.6666 11.3332M1.33331 4.66655L7.76147 1.45247C7.84892 1.40874 7.89265 1.38688 7.93851 1.37827C7.97914 1.37065 8.02082 1.37065 8.06145 1.37827C8.10731 1.38688 8.15104 1.40874 8.23849 1.45247L14.6666 4.66655L8.23849 7.88062C8.15104 7.92435 8.10731 7.94621 8.06145 7.95482C8.02082 7.96244 7.97914 7.96244 7.93851 7.95482C7.89265 7.94621 7.84892 7.92435 7.76147 7.88062L1.33331 4.66655Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLayersThree01)
const LayersThree01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LayersThree01', props.className].join(' ')}
    />
  )
})
LayersThree01.displayName = 'IconLayersThree01'
export default LayersThree01
