import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLightning01 = (props, ref) => {
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
        d="M8.66674 1.3335L2.72904 8.45873C2.4965 8.73778 2.38023 8.8773 2.37846 8.99514C2.37691 9.09757 2.42256 9.19503 2.50224 9.25943C2.5939 9.3335 2.77552 9.3335 3.13876 9.3335H8.00007L7.3334 14.6668L13.2711 7.54159C13.5036 7.26255 13.6199 7.12302 13.6217 7.00519C13.6232 6.90275 13.5776 6.80529 13.4979 6.7409C13.4062 6.66683 13.2246 6.66683 12.8614 6.66683H8.00007L8.66674 1.3335Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLightning01)
const Lightning01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Lightning01', props.className].join(' ')}
    />
  )
})
Lightning01.displayName = 'IconLightning01'
export default Lightning01
