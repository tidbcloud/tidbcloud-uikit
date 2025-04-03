import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconReflect01 = (props, ref) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M8.00016 2V4M8.00016 7V9M8.00016 12V14M2.19201 5.32706L5.11728 7.57727C5.30427 7.72111 5.39777 7.79303 5.43137 7.88069C5.46082 7.95751 5.46082 8.04249 5.43137 8.11931C5.39777 8.20697 5.30427 8.27889 5.11728 8.42273L2.19201 10.6729C1.91627 10.885 1.77839 10.9911 1.66275 10.9897C1.56213 10.9885 1.46745 10.9418 1.40513 10.8628C1.3335 10.772 1.3335 10.5981 1.3335 10.2502V5.74979C1.3335 5.40191 1.3335 5.22796 1.40513 5.13716C1.46745 5.05816 1.56213 5.01155 1.66275 5.01031C1.77839 5.0089 1.91627 5.11495 2.19201 5.32706ZM13.8083 5.32706L10.883 7.57727C10.6961 7.72111 10.6026 7.79303 10.569 7.88069C10.5395 7.95751 10.5395 8.04249 10.569 8.11931C10.6026 8.20697 10.6961 8.27889 10.883 8.42273L13.8083 10.6729C14.0841 10.885 14.2219 10.9911 14.3376 10.9897C14.4382 10.9885 14.5329 10.9418 14.5952 10.8628C14.6668 10.772 14.6668 10.5981 14.6668 10.2502V5.74979C14.6668 5.40191 14.6668 5.22796 14.5952 5.13716C14.5329 5.05816 14.4382 5.01155 14.3376 5.01031C14.2219 5.0089 14.0841 5.11495 13.8083 5.32706Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconReflect01)
const Reflect01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Reflect01', props.className].join(' ')}
    />
  )
})
Reflect01.displayName = 'IconReflect01'
export default Reflect01
