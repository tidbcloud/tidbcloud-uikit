import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRedeploy = (props, ref) => {
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
        d="M10.6668 1.66669L10.6668 10.6667C10.6668 12.3235 9.32368 13.6667 7.66683 13.6667C6.00998 13.6667 4.66683 12.3235 4.66683 10.6667L4.66683 8.91752M10.6668 1.66669L13.3335 4.33335M10.6668 1.66669L8.00016 4.33335M6.00016 5.50493C6.78121 6.28597 6.78121 7.55231 6.00016 8.33335C5.21911 9.1144 3.95278 9.1144 3.17174 8.33335C2.39069 7.55231 2.39069 6.28597 3.17174 5.50493C3.95278 4.72388 5.21911 4.72388 6.00016 5.50493Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRedeploy)
const Redeploy = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Redeploy', props.className].join(' ')}
    />
  )
})
Redeploy.displayName = 'IconRedeploy'
export default Redeploy
