import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCodepen = (props, ref) => {
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
        d="m12 9-7.936 5.158c-.688.447-1.032.671-1.151.955a1 1 0 0 0 0 .774M12 9l7.936 5.158c.688.447 1.032.671 1.151.955a1 1 0 0 1 0 .774M12 9V2.5M12 15 4.064 9.84c-.688-.447-1.032-.67-1.151-.954a1 1 0 0 1 0-.774M12 15l7.936-5.159c.688-.447 1.032-.67 1.151-.954a1 1 0 0 0 0-.774M12 15v6.5m9.272-5.527-8.4 5.46c-.316.205-.473.308-.643.348a1 1 0 0 1-.457 0c-.17-.04-.328-.143-.644-.348l-8.4-5.46c-.266-.173-.399-.26-.495-.375a1 1 0 0 1-.189-.347C2 15.108 2 14.95 2 14.631V9.369c0-.317 0-.476.044-.62a1 1 0 0 1 .189-.347c.096-.115.229-.201.495-.374l8.4-5.46c.316-.205.473-.308.643-.348a1 1 0 0 1 .457 0c.17.04.328.143.644.348l8.4 5.46c.266.173.399.26.495.374a1 1 0 0 1 .189.348c.044.143.044.302.044.62v5.263c0 .317 0 .476-.044.62a1 1 0 0 1-.189.346c-.096.116-.229.202-.495.375"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCodepen)
const Codepen = forwardRef((props, ref) => {
  if (typeof props.size === 'number') {
    const { size, ...rest } = props
    props = {
      ...rest,
      w: size,
      h: size
    }
  }
  return <MantineBox ref={ref} {...props} component={ForwardRef} />
})
Codepen.displayName = 'IconCodepen'
export default Codepen
