import {
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Button,
  Paper,
  Text,
  LoadingOverlay,
  Anchor,
  useMantineTheme
} from '@tidbcloud/uikit'
import { IconAtom01, IconLock01 } from '@tidbcloud/uikit/icons'
import React, { useState } from 'react'

export interface AuthenticationFormProps {
  noShadow?: boolean
  noPadding?: boolean
  noSubmit?: boolean
  style?: React.CSSProperties
}

export const AuthenticationForm = ({ noShadow, noPadding, noSubmit, style }: AuthenticationFormProps) => {
  const [formType, setFormType] = useState<'register' | 'login'>('register')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const theme = useMantineTheme()

  const toggleFormType = () => {
    setFormType((current) => (current === 'register' ? 'login' : 'register'))
    setError(null)
  }

  const handleSubmit = () => {
    setLoading(true)
    setError(null)
    setTimeout(() => {
      setLoading(false)
      setError(formType === 'register' ? 'User with this email already exists' : 'User with this email does not exist')
    }, 3000)
  }

  return (
    <Paper
      p={noPadding ? 0 : 'lg'}
      shadow={noShadow ? undefined : 'sm'}
      style={style}
      sx={{
        position: 'relative',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }}
    >
      <form onSubmit={() => {}}>
        <LoadingOverlay visible={loading} />
        {formType === 'register' && (
          <Group grow>
            <TextInput data-autofocus required placeholder="Your first name" label="First name" />

            <TextInput required placeholder="Your last name" label="Last name" />
          </Group>
        )}

        <TextInput
          mt="md"
          required
          placeholder="Your email"
          label="Email"
          icon={<IconAtom01 size={16} stroke="1.5" />}
        />

        <PasswordInput
          mt="md"
          required
          placeholder="Password"
          label="Password"
          icon={<IconLock01 size={16} stroke="1.5" />}
        />

        {formType === 'register' && (
          <PasswordInput
            mt="md"
            required
            label="Confirm Password"
            placeholder="Confirm password"
            icon={<IconLock01 size={16} stroke="1.5" />}
          />
        )}

        {formType === 'register' && (
          <Checkbox mt="xl" label="I agree to sell my soul and privacy to this corporation" />
        )}

        {error && (
          <Text color="red" size="sm" mt="sm">
            {error}
          </Text>
        )}

        {!noSubmit && (
          <Group position="apart" mt="xl">
            <Anchor component="button" type="button" color="dimmed" onClick={toggleFormType} size="sm">
              {formType === 'register' ? 'Have an account? Login' : "Don't have an account? Register"}
            </Anchor>

            <Button color="blue" type="submit">
              {formType === 'register' ? 'Register' : 'Login'}
            </Button>
          </Group>
        )}
      </form>
    </Paper>
  )
}
