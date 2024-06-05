import { useSafeState } from 'ahooks'
import {
  DefaultValues,
  UseFormReturn,
  useForm,
  Mode,
  UseFormProps,
  SubmitHandler,
  FormProvider,
  FieldValues
} from 'react-hook-form'

import { Box, BoxProps } from '../../primitive/index.js'

import { useHookFormContext } from './context.js'
import { FormActions, FormActionsProps } from './FormActions.js'
import { FormErrorMessage, FormErrorMessageProps } from './FormErrorMessage.js'
import { FormLayout, FormLayoutProps, FormLayoutType } from './FormLayout.js'

const getErrorMessage = (e: any) => e?.message

export interface FormProps<T extends FieldValues = object> extends BoxProps {
  errorMessage?: string
  formMode?: Mode // mode param in options of useForm
  reValidateMode?: UseFormProps['reValidateMode']
  defaultValues?: DefaultValues<T>
  form?: UseFormReturn<T>
  withActions?: boolean
  actionsProps?: FormActionsProps
  errorMessageProps?: Omit<FormErrorMessageProps, 'message'>
  layout?: FormLayoutType
  layoutProps?: Omit<FormLayoutProps, 'layout'>

  onSubmit: SubmitHandler<T>
  onError?: () => any
  onCancel?: () => void
  onFormUnMount?: () => void
}

const _Form = <T extends object = {}>({
  children,
  form,
  formMode,
  reValidateMode = 'onChange',
  defaultValues,
  onSubmit,
  onFormUnMount,
  onCancel,
  withActions = true,
  actionsProps,
  errorMessageProps,
  layout = 'vertical',
  layoutProps,
  onError,
  ...rest
}: FormProps<T>) => {
  const [submitError, setSubmitError] = useSafeState('')
  const [submitting, setSubmitting] = useSafeState(false)
  const defaultMethods = useForm<T>({
    mode: formMode,
    reValidateMode,
    defaultValues
  })

  const methods = form || defaultMethods
  const { handleSubmit } = methods
  const context = useHookFormContext()

  const submit: SubmitHandler<T> = async (data, event) => {
    setSubmitError('')
    setSubmitting(true)
    try {
      await onSubmit(data, event)
      setSubmitting(false)
    } catch (e) {
      // TODO @awxxxxxx
      const handleError = onError || context?.onError || getErrorMessage
      setSubmitError(handleError?.(e))
      setSubmitting(false)
    }
  }

  const handleDismissErrorMessage = () => {
    setSubmitError('')
  }

  return (
    <FormProvider {...methods}>
      <Box component="form" {...rest} onSubmit={handleSubmit(submit)}>
        <FormLayout layout={layout} {...layoutProps}>
          {children}
        </FormLayout>
        {withActions && (
          <>
            {submitError && (
              <FormErrorMessage
                mt={24}
                message={submitError}
                onDismiss={handleDismissErrorMessage}
                {...errorMessageProps}
              />
            )}
            <FormActions onCancel={onCancel} loading={submitting} {...actionsProps} />
          </>
        )}
      </Box>
    </FormProvider>
  )
}

type FormType = typeof _Form

export const Form = _Form as any as FormType & {
  Actions: typeof FormActions
  ErrorMessage: typeof FormErrorMessage
  Layout: typeof FormLayout
}

Form.Actions = FormActions
Form.ErrorMessage = FormErrorMessage
Form.Layout = FormLayout
