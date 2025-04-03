import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconGlobe02 = (props, ref) => {
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
        d="M1.77393 12.2259L4.8365 9.16331M12.1448 1.85498C14.6181 4.3283 14.6181 8.33835 12.1448 10.8117C9.6715 13.285 5.66146 13.285 3.18814 10.8117M11.3331 14.6667H4.66648M7.99982 14.6667V12.6667M11.6665 6.33332C11.6665 8.54246 9.87562 10.3333 7.66648 10.3333C5.45734 10.3333 3.66648 8.54246 3.66648 6.33332C3.66648 4.12418 5.45734 2.33332 7.66648 2.33332C9.87562 2.33332 11.6665 4.12418 11.6665 6.33332Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconGlobe02)
const Globe02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Globe02', props.className].join(' ')}
    />
  )
})
Globe02.displayName = 'IconGlobe02'
export default Globe02
