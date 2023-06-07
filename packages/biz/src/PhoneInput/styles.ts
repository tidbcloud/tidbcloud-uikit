import { createStyles } from '@mantine/core'

export default createStyles((theme) => {
  return {
    dropdownButton: {
      display: 'none'
    },
    dropdown: {},
    container: {
      '& .react-tel-input .form-control': {
        width: '100%',
        height: 40,
        minHeight: 40,
        lineHeight: '38px',
        borderRadius: 8,
        padding: '0 12px'
      }
    },
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
