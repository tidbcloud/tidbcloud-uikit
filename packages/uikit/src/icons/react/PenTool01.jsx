import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPenTool01 = (props, ref) => {
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
        d="m18 13-1.3-6.498c-.072-.363-.108-.545-.197-.692a1 1 0 0 0-.312-.325c-.144-.094-.324-.138-.684-.225L2 2m0 0 3.26 13.507c.087.36.13.54.225.684a1 1 0 0 0 .325.312c.147.088.329.125.692.197L13 18M2 2l7.586 7.586m6.545 11.283 4.738-4.738c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.228-.272-.426-.668-.822l-.738-.738c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668L13.13 17.87c-.396.396-.594.594-.668.822a1 1 0 0 0 0 .618c.074.228.272.426.668.822l.738.738c.396.396.594.594.822.668a1 1 0 0 0 .618 0c.228-.074.426-.272.822-.668M13 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPenTool01)
const PenTool01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'PenTool01'].join(' ')}
    />
  )
})
PenTool01.displayName = 'IconPenTool01'
export default PenTool01
