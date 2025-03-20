import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconScale02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 21h.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8V8m8.5 4.5L17 7m0 0h-5m5 0v5M6.2 21h2.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C12 19.48 12 18.92 12 17.8v-2.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C10.48 12 9.92 12 8.8 12H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 13.52 3 14.08 3 15.2v2.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconScale02)
const Scale02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Scale02'].join(' ')}
    />
  )
})
Scale02.displayName = 'IconScale02'
export default Scale02
