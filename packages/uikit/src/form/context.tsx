import { createContext, Dispatch, SetStateAction, useContext } from 'react'

export interface HookFormData {
  submitting: boolean
  setSubmitting: Dispatch<SetStateAction<boolean>>
}

export const HookFormContext = createContext<HookFormData | null>(null)

export const HookFormProvider = HookFormContext.Provider

export const useHookFormContext = () => {
  const context = useContext(HookFormContext)
  if (!context) {
    throw new Error('HookForm Context is empty')
  }
  return context
}
