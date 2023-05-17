import { Button, ButtonProps, Flex, FlexProps } from '@mantine/core'
import { PolymorphicComponentProps } from '@mantine/utils'

import { TYPOGRAPHY_STYLES_MAP } from '../Typography'

export interface FormActionsProps extends FlexProps {
  loading?: boolean
  disabled?: boolean
  onCancel?: React.MouseEventHandler<HTMLButtonElement>
  onConfirm?: React.MouseEventHandler<HTMLButtonElement>
  cancelText?: React.ReactNode
  cancelProps?: Omit<PolymorphicComponentProps<'button', ButtonProps>, 'children'>
  confirmText?: React.ReactNode
  confirmProps?: Omit<PolymorphicComponentProps<'button', ButtonProps>, 'children'>
}

export const FormActions: React.FC<FormActionsProps> = ({
  disabled,
  cancelProps,
  confirmProps,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onCancel,
  onConfirm,
  loading,
  ...rest
}) => {
  const style = TYPOGRAPHY_STYLES_MAP['action-md']
  return (
    <Flex justify="flex-end" mt={24} {...rest}>
      {cancelText && (
        <Button onClick={onCancel} mr={16} variant="default" fw={style.fw} fs={style.fs} c="gray.7" {...cancelProps}>
          {cancelText}
        </Button>
      )}
      <Button type="submit" onClick={onConfirm} loading={loading} disabled={disabled} {...confirmProps}>
        {confirmText}
      </Button>
    </Flex>
  )
}

FormActions.displayName = 'HookFormActions'
