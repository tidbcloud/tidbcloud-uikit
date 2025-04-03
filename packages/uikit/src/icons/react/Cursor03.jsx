import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconCursor03 = (props, ref) => {
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
        d="M3.14085 2.44964C2.78047 2.30767 2.60029 2.23669 2.48547 2.27488C2.38578 2.30805 2.30756 2.38627 2.27439 2.48596C2.2362 2.60077 2.30719 2.78096 2.44915 3.14134L5.98291 12.1116C6.09725 12.4019 6.15442 12.547 6.2476 12.6053C6.32882 12.656 6.42797 12.6694 6.51975 12.642C6.62502 12.6105 6.71861 12.4857 6.90579 12.2362L8.33288 10.3334L10.6324 13.4953C10.7589 13.6691 10.8221 13.756 10.9026 13.7923C10.9733 13.8242 11.0529 13.8305 11.1277 13.81C11.2129 13.7867 11.2889 13.7107 11.4409 13.5587L13.5582 11.4414C13.7102 11.2894 13.7862 11.2134 13.8095 11.1282C13.83 11.0534 13.8237 10.9738 13.7919 10.9031C13.7555 10.8226 13.6686 10.7594 13.4948 10.6329L10.3329 8.33337L12.2357 6.90628C12.4852 6.7191 12.61 6.62551 12.6415 6.52023C12.6689 6.42845 12.6556 6.32931 12.6048 6.24808C12.5465 6.15491 12.4014 6.09774 12.1112 5.9834L3.14085 2.44964Z"
        stroke="#383E40"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconCursor03)
const Cursor03 = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'Cursor03', props.className].join(' ')}
    />
  )
})
Cursor03.displayName = 'IconCursor03'
export default Cursor03
