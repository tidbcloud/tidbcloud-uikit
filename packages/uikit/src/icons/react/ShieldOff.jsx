import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShieldOff = (props, ref) => {
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
        d="m8.809 3.197 2.63-.986c.207-.078.311-.117.418-.133a1 1 0 0 1 .286 0c.107.016.21.055.419.133l5.362 2.01c.748.28 1.123.421 1.398.664a2 2 0 0 1 .547.79c.131.343.131.743.131 1.542V12c0 .72-.115 1.412-.318 2.07m-2.06 3.555c-1.686 1.96-3.834 3.354-4.922 3.989-.223.13-.334.194-.49.228a1.1 1.1 0 0 1-.42 0c-.156-.034-.267-.098-.488-.227C9.354 20.478 4 16.908 4 12V5.776c0-.467.29-.885.727-1.049M3 3l18 18"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShieldOff)
const ShieldOff = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ShieldOff'].join(' ')}
    />
  )
})
ShieldOff.displayName = 'IconShieldOff'
export default ShieldOff
