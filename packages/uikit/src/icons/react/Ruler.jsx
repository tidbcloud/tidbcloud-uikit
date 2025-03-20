import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconRuler = (props, ref) => {
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
        d="M14.5 5.5 16 7m-4.5 1.5L13 10m-4.5 1.5L10 13m-4.5 1.5L7 16m-4.434 1.566 3.868 3.868c.198.198.297.297.411.334.1.033.209.033.31 0 .114-.037.213-.136.41-.334l13.87-13.868c.197-.198.296-.297.333-.412a.5.5 0 0 0 0-.309c-.037-.114-.136-.213-.334-.41l-3.868-3.87c-.198-.197-.297-.296-.412-.333a.5.5 0 0 0-.309 0c-.114.037-.213.136-.41.334L2.564 16.434c-.197.198-.296.297-.333.411a.5.5 0 0 0 0 .31c.037.114.136.213.334.41"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconRuler)
const Ruler = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Ruler'].join(' ')}
    />
  )
})
Ruler.displayName = 'IconRuler'
export default Ruler
