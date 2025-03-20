import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconSpeaker02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12h.01M18 6h.01M6 6h.01M18 18h.01M6 18h.01m.79 4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 19.72 22 18.88 22 17.2V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 2 18.88 2 17.2 2H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 4.28 2 5.12 2 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22m5.7-10a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m4.5 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconSpeaker02)
const Speaker02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Speaker02'].join(' ')}
    />
  )
})
Speaker02.displayName = 'IconSpeaker02'
export default Speaker02
