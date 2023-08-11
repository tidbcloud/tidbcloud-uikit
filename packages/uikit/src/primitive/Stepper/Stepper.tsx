import { Stepper as MantineStepper, StepperProps } from '@mantine/core'

import { withLoaderPatch } from '../../primitive/Loader'

export const Stepper = withLoaderPatch<
  HTMLDivElement,
  StepperProps,
  {
    Step: typeof MantineStepper.Step
    Completed: typeof MantineStepper.Completed
  }
>(MantineStepper, {
  Step: MantineStepper.Step,
  Completed: MantineStepper.Completed
}) as typeof MantineStepper
