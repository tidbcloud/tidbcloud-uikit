import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloudSun03 = (props, ref) => {
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
        d="M2.10018 7.3335C2.03459 7.01039 2.00016 6.67596 2.00016 6.3335C2.00016 3.57207 4.23874 1.3335 7.00016 1.3335C9.53555 1.3335 11.6302 3.22059 11.9561 5.66683M4.00016 14.6668C2.5274 14.6668 1.3335 13.4729 1.3335 12.0002C1.3335 10.5274 2.5274 9.3335 4.00016 9.3335C4.07572 9.3335 4.15053 9.33664 4.2245 9.3428C4.77098 7.78435 6.25506 6.66683 8.00016 6.66683C9.48338 6.66683 10.7781 7.47411 11.4687 8.67327C11.5342 8.669 11.6003 8.66683 11.6668 8.66683C13.3237 8.66683 14.6668 10.01 14.6668 11.6668C14.6668 13.3237 13.3237 14.6668 11.6668 14.6668C9.1757 14.6668 6.70322 14.6668 4.00016 14.6668Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloudSun03)
const CloudSun03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'CloudSun03', props.className].join(' ')}
    />
  )
})
CloudSun03.displayName = 'IconCloudSun03'
export default CloudSun03
