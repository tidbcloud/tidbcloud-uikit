import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconTranslate01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M8.60868 11.3333H13.3913M8.60868 11.3333L7.33331 14M8.60868 11.3333L10.5188 7.33935C10.6728 7.01751 10.7497 6.8566 10.855 6.80575C10.9466 6.76152 11.0534 6.76152 11.1449 6.80575C11.2502 6.8566 11.3272 7.01751 11.4811 7.33935L13.3913 11.3333M13.3913 11.3333L14.6666 14M1.33331 3.33333H5.33331M5.33331 3.33333H7.66665M5.33331 3.33333V2M7.66665 3.33333H9.33331M7.66665 3.33333C7.33589 5.30486 6.56837 7.09079 5.44368 8.58962M6.66665 9.33333C6.2583 9.14987 5.84175 8.89472 5.44368 8.58962M5.44368 8.58962C4.54199 7.89851 3.73515 6.95109 3.33331 6M5.44368 8.58962C4.37389 10.0153 2.98094 11.1812 1.33331 12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconTranslate01)
const Translate01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Translate01', props.className].join(' ')}
    />
  )
})
Translate01.displayName = 'IconTranslate01'
export default Translate01
