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
      strokeWidth="1.5"
      ref={ref}
      {...props}
    >
      <path
        d="M3.1411 2.44964C2.78072 2.30767 2.60053 2.23669 2.48572 2.27488C2.38603 2.30805 2.3078 2.38627 2.27464 2.48596C2.23645 2.60077 2.30743 2.78096 2.4494 3.14134L5.98315 12.1116C6.09749 12.4019 6.15467 12.547 6.24784 12.6053C6.32907 12.656 6.42821 12.6694 6.51999 12.642C6.62527 12.6105 6.71886 12.4857 6.90604 12.2362L8.33313 10.3334L10.6327 13.4953C10.7591 13.6691 10.8223 13.756 10.9029 13.7923C10.9735 13.8242 11.0531 13.8305 11.1279 13.81C11.2132 13.7867 11.2891 13.7107 11.4411 13.5587L13.5585 11.4414C13.7104 11.2894 13.7864 11.2134 13.8098 11.1282C13.8302 11.0534 13.824 10.9738 13.7921 10.9031C13.7558 10.8226 13.6689 10.7594 13.495 10.6329L10.3331 8.33337L12.2359 6.90628C12.4855 6.7191 12.6103 6.62551 12.6417 6.52023C12.6692 6.42845 12.6558 6.32931 12.605 6.24808C12.5468 6.15491 12.4016 6.09774 12.1114 5.9834L3.1411 2.44964Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
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
