import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconLayersThree01 = (props, ref) => {
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
        d="M1.3335 7.99988L7.76165 11.214C7.8491 11.2577 7.89283 11.2795 7.9387 11.2882C7.97932 11.2958 8.02101 11.2958 8.06163 11.2882C8.1075 11.2795 8.15122 11.2577 8.23868 11.214L14.6668 7.99988M1.3335 11.3332L7.76165 14.5473C7.8491 14.591 7.89283 14.6129 7.9387 14.6215C7.97932 14.6291 8.02101 14.6291 8.06163 14.6215C8.1075 14.6129 8.15122 14.591 8.23868 14.5473L14.6668 11.3332M1.3335 4.66655L7.76165 1.45247C7.8491 1.40874 7.89283 1.38688 7.9387 1.37827C7.97932 1.37065 8.02101 1.37065 8.06163 1.37827C8.1075 1.38688 8.15122 1.40874 8.23868 1.45247L14.6668 4.66655L8.23868 7.88062C8.15122 7.92435 8.1075 7.94621 8.06163 7.95482C8.02101 7.96244 7.97932 7.96244 7.9387 7.95482C7.89283 7.94621 7.8491 7.92435 7.76165 7.88062L1.3335 4.66655Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconLayersThree01)
const LayersThree01 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'LayersThree01', props.className].join(' ')}
    />
  )
})
LayersThree01.displayName = 'IconLayersThree01'
export default LayersThree01
