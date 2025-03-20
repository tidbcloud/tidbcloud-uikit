import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconFilm03 = (props, ref) => {
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
        d="M7 2v4m0 10v4M17 4v4m0 10v4M2 6h10M2 16h10m0-8h10M12 18h10m-10 2V3.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C11.24 2 10.96 2 10.4 2H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 4.28 2 5.12 2 6.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20zm0-16h5.2c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 6.28 22 7.12 22 8.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 22 18.88 22 17.2 22h-3.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C12 21.24 12 20.96 12 20.4z"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconFilm03)
const Film03 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Film03'].join(' ')}
    />
  )
})
Film03.displayName = 'IconFilm03'
export default Film03
