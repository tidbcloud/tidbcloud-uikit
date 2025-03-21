import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconContrast01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M12 2C12.5917 2 13.1713 2.05139 13.7348 2.14994M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22M12 2V22M17.738 3.809C18.6922 4.47869 19.5241 5.31089 20.1934 6.26541M21.8501 10.2656C21.9486 10.8289 22 11.4085 22 12C22 12.5915 21.9486 13.1711 21.8501 13.7344M20.1892 17.7406C19.5203 18.693 18.6896 19.5233 17.7369 20.1917M13.7328 21.8504C13.17 21.9487 12.591 22 12 22"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconContrast01)
const Contrast01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Contrast01'].join(' ')}
    />
  )
})
Contrast01.displayName = 'IconContrast01'
export default Contrast01
