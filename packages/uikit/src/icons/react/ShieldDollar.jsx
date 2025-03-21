import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconShieldDollar = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.213 14.5c.312.595.936 1 1.654 1H13a2 2 0 1 0 0-4h-2a2 2 0 1 1 0-4h2.133c.718 0 1.342.406 1.654 1M12 6v1.5m0 8V17m8-5c0 4.909-5.354 8.479-7.302 9.615-.221.13-.332.194-.488.227a1.1 1.1 0 0 1-.42 0c-.156-.033-.267-.098-.488-.227C9.354 20.479 4 16.909 4 12V7.218c0-.8 0-1.2.13-1.543a2 2 0 0 1 .548-.79c.276-.242.65-.383 1.398-.664l5.362-2.01c.208-.078.312-.117.419-.133a1 1 0 0 1 .286 0c.107.016.21.055.419.133l5.362 2.01c.748.281 1.123.422 1.398.665a2 2 0 0 1 .547.789c.131.343.131.743.131 1.543z"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconShieldDollar)
const ShieldDollar = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'ShieldDollar'].join(' ')}
    />
  )
})
ShieldDollar.displayName = 'IconShieldDollar'
export default ShieldDollar
