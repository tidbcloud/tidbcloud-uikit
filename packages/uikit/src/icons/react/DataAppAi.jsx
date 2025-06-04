import { Box as MantineBox } from '@mantine/core'
import * as React from 'react'
import { forwardRef } from 'react'
const IconDataAppAi = (props, ref) => {
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
        d="M13.6666 4.85185L7.99998 8M7.99998 8L2.33331 4.85185M7.99998 8L8 14.3333M8.51802 14.3789C8.32895 14.4839 8.23442 14.5365 8.1343 14.557C8.0457 14.5753 7.95431 14.5753 7.8657 14.557C7.76559 14.5365 7.67105 14.4839 7.48198 14.3789L2.54865 11.6382C2.34897 11.5272 2.24912 11.4718 2.17642 11.3929C2.11211 11.3231 2.06343 11.2403 2.03366 11.1502C2 11.0484 2 10.9341 2 10.7057V5.29431C2 5.06588 2 4.95167 2.03366 4.84981C2.06343 4.75969 2.11211 4.67697 2.17642 4.60717C2.24912 4.52828 2.34896 4.47281 2.54865 4.36188L7.48198 1.62114C7.67105 1.5161 7.76559 1.46358 7.8657 1.44299C7.95431 1.42477 8.0457 1.42477 8.1343 1.44299C8.23442 1.46358 8.32895 1.5161 8.51802 1.62114L13.4514 4.36188C13.651 4.47281 13.7509 4.52828 13.8236 4.60717C13.8879 4.67696 13.9366 4.75969 13.9663 4.8498C14 4.95167 14 5.06588 14 5.29431V7.33337"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
      <path
        d="M10.5661 12.6886H12.5473M10 13.9167L11.4825 9.25L13.1133 13.9167M14.67 9.25V13.9167"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="inherit"
      />
    </svg>
  )
}
const ForwardRef = forwardRef(IconDataAppAi)
const DataAppAi = forwardRef((props, ref) => {
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
      className={['tiui-icon', 'DataAppAi', props.className].join(' ')}
    />
  )
})
DataAppAi.displayName = 'IconDataAppAi'
export default DataAppAi
