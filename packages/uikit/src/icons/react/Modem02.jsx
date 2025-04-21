import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconModem02 = (props, ref) => {
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
        d="M4.13656 7.03861C3.81727 5.84643 4.05814 4.53546 4.85918 3.52252M11.8636 7.03857C12.1829 5.8464 11.942 4.53542 11.1409 3.52249M1.5613 7.73312C1.00266 5.64995 1.47037 3.34887 2.96442 1.63062M14.4365 7.73314C14.9952 5.64998 14.5274 3.34889 13.0334 1.63064M8.00007 10V6.00003M3.66673 12.3334H6.3334M3.46673 14.6667H12.5334C13.2801 14.6667 13.6535 14.6667 13.9387 14.5214C14.1896 14.3935 14.3936 14.1896 14.5214 13.9387C14.6667 13.6535 14.6667 13.2801 14.6667 12.5334V12.1334C14.6667 11.3866 14.6667 11.0133 14.5214 10.728C14.3936 10.4772 14.1896 10.2732 13.9387 10.1454C13.6535 10 13.2801 10 12.5334 10H3.46673C2.72 10 2.34663 10 2.06141 10.1454C1.81053 10.2732 1.60656 10.4772 1.47872 10.728C1.3334 11.0133 1.3334 11.3866 1.3334 12.1334V12.5334C1.3334 13.2801 1.3334 13.6535 1.47872 13.9387C1.60656 14.1896 1.81053 14.3935 2.06141 14.5214C2.34663 14.6667 2.72 14.6667 3.46673 14.6667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconModem02)
const Modem02 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Modem02', props.className].join(' ')}
    />
  )
})
Modem02.displayName = 'IconModem02'
export default Modem02
