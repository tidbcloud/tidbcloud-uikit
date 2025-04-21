import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlobe05 = (props, ref) => {
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
        d="M10 1.6387C9.36865 1.4404 8.69681 1.3335 8.00001 1.3335C4.31811 1.3335 1.33334 4.31826 1.33334 8.00016C1.33334 11.6821 4.31811 14.6668 8.00001 14.6668C11.6819 14.6668 14.6667 11.6821 14.6667 8.00016C14.6667 6.85661 14.3788 5.78031 13.8714 4.83979M11.3333 3.8335H11.3367M7.00005 14.5923L7.00012 13.1234C7.00012 13.0439 7.02858 12.9669 7.08036 12.9065L8.73755 10.9731C8.87374 10.8142 8.83154 10.5706 8.64985 10.4668L6.7457 9.37865C6.69396 9.34909 6.6511 9.3062 6.62157 9.25445L5.38032 7.07925C5.31572 6.96604 5.19106 6.90087 5.06123 6.91244L1.37613 7.24066M14 4.00016C14 5.47292 12.6667 6.66683 11.3333 8.00016C10 6.66683 8.66668 5.47292 8.66668 4.00016C8.66668 2.5274 9.86058 1.3335 11.3333 1.3335C12.8061 1.3335 14 2.5274 14 4.00016ZM11.5 3.8335C11.5 3.92554 11.4254 4.00016 11.3333 4.00016C11.2413 4.00016 11.1667 3.92554 11.1667 3.8335C11.1667 3.74145 11.2413 3.66683 11.3333 3.66683C11.4254 3.66683 11.5 3.74145 11.5 3.8335Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGlobe05)
const Globe05 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Globe05', props.className].join(' ')}
    />
  )
})
Globe05.displayName = 'IconGlobe05'
export default Globe05
