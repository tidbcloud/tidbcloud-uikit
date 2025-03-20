import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconBriefcase02 = (props, ref) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      ref={ref}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 21V7c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.121-2.122C10.606 3 11.07 3 12 3s1.395 0 1.777.102a3 3 0 0 1 2.12 2.122C16 5.605 16 6.07 16 7v14M5.2 21h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 19.48 22 18.92 22 17.8v-7.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 7 19.92 7 18.8 7H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 8.52 2 9.08 2 10.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 21 4.08 21 5.2 21"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconBriefcase02)
const Briefcase02 = forwardRef((props, ref) => {
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
      className={[props.className, 'tiui-icon', 'Briefcase02'].join(' ')}
    />
  )
})
Briefcase02.displayName = 'IconBriefcase02'
export default Briefcase02
