import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGraduationHat01 = (props, ref) => {
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
        d="M3.3335 6.66655V10.674C3.3335 10.9133 3.3335 11.0329 3.36993 11.1386C3.40215 11.232 3.45474 11.3171 3.52388 11.3877C3.60207 11.4675 3.7091 11.521 3.92314 11.628L7.52314 13.428C7.69804 13.5155 7.7855 13.5592 7.87723 13.5764C7.95848 13.5917 8.04185 13.5917 8.12309 13.5764C8.21482 13.5592 8.30229 13.5155 8.47719 13.428L12.0772 11.628C12.2912 11.521 12.3983 11.4675 12.4764 11.3877C12.5456 11.3171 12.5982 11.232 12.6304 11.1386C12.6668 11.0329 12.6668 10.9133 12.6668 10.674V6.66655M1.3335 5.66655L7.76165 2.45247C7.8491 2.40874 7.89283 2.38688 7.9387 2.37827C7.97932 2.37065 8.02101 2.37065 8.06163 2.37827C8.1075 2.38688 8.15122 2.40874 8.23868 2.45247L14.6668 5.66655L8.23868 8.88062C8.15122 8.92435 8.1075 8.94621 8.06163 8.95482C8.02101 8.96244 7.97932 8.96244 7.9387 8.95482C7.89283 8.94621 7.8491 8.92435 7.76165 8.88062L1.3335 5.66655Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGraduationHat01)
const GraduationHat01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'GraduationHat01', props.className].join(' ')}
    />
  )
})
GraduationHat01.displayName = 'IconGraduationHat01'
export default GraduationHat01
