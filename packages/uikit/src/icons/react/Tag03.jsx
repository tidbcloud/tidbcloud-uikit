import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTag03 = (props, ref) => {
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
        d="m21 11-7.594-7.594c-.519-.519-.778-.778-1.081-.964a3 3 0 0 0-.867-.36C11.112 2 10.745 2 10.012 2H6M3 8.7v1.975c0 .489 0 .733.055.963.05.204.13.4.24.579.123.201.296.374.642.72l7.8 7.8c.792.792 1.188 1.188 1.645 1.337a2 2 0 0 0 1.236 0c.457-.149.853-.545 1.645-1.337l2.474-2.474c.792-.792 1.188-1.188 1.337-1.645a2 2 0 0 0 0-1.236c-.149-.457-.545-.853-1.337-1.645l-7.3-7.3c-.346-.346-.519-.519-.72-.642a2 2 0 0 0-.578-.24c-.23-.055-.475-.055-.964-.055H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 7.02 3 7.58 3 8.7"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTag03)
const Tag03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Tag03'].join(' ')}
    />
  )
})
Tag03.displayName = 'IconTag03'
export default Tag03
