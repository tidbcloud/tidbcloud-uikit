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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M4.00004 12.6665C2.52728 12.6665 1.33337 11.4726 1.33337 9.99984C1.33337 8.75701 2.18359 7.71277 3.33411 7.41699C3.33362 7.38911 3.33337 7.36117 3.33337 7.33317C3.33337 4.75584 5.42271 2.6665 8.00004 2.6665C10.4066 2.6665 12.3877 4.48817 12.6397 6.8278C13.819 7.2319 14.6667 8.3502 14.6667 9.6665C14.6667 11.3234 13.3236 12.6665 11.6667 12.6665C9.17397 12.6665 6.7918 12.6665 4.00004 12.6665Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
