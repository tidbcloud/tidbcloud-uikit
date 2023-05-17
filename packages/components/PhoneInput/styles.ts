import { createStyles } from '@mantine/core'

export default createStyles((theme) => {
  return {
    dropdownButton: {
      display: 'none'
    },
    dropdown: {},
    container: {},
    containerError: {
      marginBottom: 5
    },
    search: {},
    input: {
      borderColor: `${theme.colors.gray[4]} !important`,
      '::placeholder': {
        ...theme.fn.placeholderStyles()
      },
      '&:hover': {
        borderColor: `${theme.colors.cyan[5]} !important`
      },
      '&:focus': {
        borderColor: `${theme.colors.cyan[5]} !important`
      }
    },
    inputError: {
      '::placeholder': {
        color: theme.colors.red[5]
      },
      borderColor: `${theme.colors.red[5]} !important`
    }
  }
})
