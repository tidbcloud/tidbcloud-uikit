import { Flex, FlexProps } from '@mantine/core'
import React from 'react'

export type FormLayoutType = 'horizontal' | 'vertical' | 'none'
export interface FormLayoutProps extends FlexProps {
  layout?: FormLayoutType
}

export const FormLayout: React.FC<FormLayoutProps> = ({ layout = 'vertical', children, ...rest }) => {
  if (layout === 'none') {
    return <>{children}</>
  }
  return (
    <Flex direction={layout === 'vertical' ? 'column' : 'row'} gap={16} {...rest}>
      {children}
    </Flex>
  )
}
