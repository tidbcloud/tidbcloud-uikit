import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconPieChart01 = (props, ref) => {
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
        d="M21.2104 15.8899C20.5742 17.3944 19.5792 18.7202 18.3123 19.7512C17.0454 20.7823 15.5452 21.4874 13.9428 21.8047C12.3405 22.1221 10.6848 22.0421 9.12055 21.5717C7.55627 21.1014 6.13103 20.255 4.96942 19.1066C3.80782 17.9582 2.94522 16.5427 2.45704 14.9839C1.96886 13.4251 1.86996 11.7704 2.169 10.1646C2.46804 8.55873 3.1559 7.05058 4.17245 5.77198C5.189 4.49338 6.50329 3.48327 8.0004 2.82995M21.2392 8.17311C21.6395 9.13958 21.8851 10.1613 21.9684 11.2008C21.989 11.4576 21.9993 11.586 21.9483 11.7017C21.9057 11.7983 21.8213 11.8897 21.7284 11.9399C21.6172 11.9999 21.4783 11.9999 21.2004 11.9999H12.8004C12.5204 11.9999 12.3804 11.9999 12.2734 11.9455C12.1793 11.8975 12.1028 11.821 12.0549 11.7269C12.0004 11.62 12.0004 11.48 12.0004 11.1999V2.79995C12.0004 2.52208 12.0004 2.38315 12.0605 2.27193C12.1107 2.17903 12.2021 2.09464 12.2987 2.05204C12.4144 2.00105 12.5428 2.01134 12.7996 2.03193C13.839 2.11527 14.8608 2.36083 15.8272 2.76115C17.0405 3.2637 18.1429 4.00029 19.0715 4.92888C20.0001 5.85747 20.7367 6.95986 21.2392 8.17311Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconPieChart01)
const PieChart01 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'PieChart01'].join(' ')}
    />
  )
})
PieChart01.displayName = 'IconPieChart01'
export default PieChart01
