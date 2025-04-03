import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCloud02 = (props, ref) => {
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
        d="M4.00016 12.6665C2.5274 12.6665 1.3335 11.4726 1.3335 9.99984C1.3335 8.75701 2.18371 7.71277 3.33423 7.41699C3.33374 7.38911 3.3335 7.36117 3.3335 7.33317C3.3335 4.75584 5.42283 2.6665 8.00016 2.6665C10.4067 2.6665 12.3878 4.48817 12.6398 6.8278C13.8191 7.2319 14.6668 8.3502 14.6668 9.6665C14.6668 11.3234 13.3237 12.6665 11.6668 12.6665C9.1741 12.6665 6.79192 12.6665 4.00016 12.6665Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCloud02)
const Cloud02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Cloud02', props.className].join(' ')}
    />
  )
})
Cloud02.displayName = 'IconCloud02'
export default Cloud02
