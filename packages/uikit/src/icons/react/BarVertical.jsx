import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBarVertical = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="2"
      ref={ref}
      {...props}
    >
      <path
        d="M9.5 7L12.9 7C13.4601 7 13.7401 7 13.954 7.10899C14.1422 7.20487 14.2951 7.35785 14.391 7.54601C14.5 7.75992 14.5 8.03995 14.5 8.6L14.5 21M14.5 11L17.9 11C18.4601 11 18.7401 11 18.954 11.109C19.1422 11.2049 19.2951 11.3578 19.391 11.546C19.5 11.7599 19.5 12.0399 19.5 12.6L19.5 21M2 21L22 21M9.5 21L9.5 4.6C9.5 4.03995 9.5 3.75992 9.39101 3.54601C9.29513 3.35785 9.14215 3.20487 8.95399 3.10899C8.74008 3 8.46005 3 7.9 3L6.1 3C5.53995 3 5.25992 3 5.04601 3.10899C4.85785 3.20487 4.70487 3.35785 4.60899 3.54601C4.5 3.75992 4.5 4.03995 4.5 4.6L4.5 21L9.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBarVertical)
const BarVertical = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'BarVertical', props.className].join(' ')}
    />
  )
})
BarVertical.displayName = 'IconBarVertical'
export default BarVertical
