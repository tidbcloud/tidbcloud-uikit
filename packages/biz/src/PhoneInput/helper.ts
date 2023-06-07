const loadLibphonenumber = async () => {
  const { default: _ } = await import('google-libphonenumber')
  return _
}

export const validPhoneNumber = async (country: string, phoneNum: string) => {
  try {
    const libPhone = await loadLibphonenumber()
    const phoneUtil = libPhone.PhoneNumberUtil.getInstance()
    const phone = phoneUtil.parseAndKeepRawInput(phoneNum, country)
    return phoneUtil.isValidNumberForRegion(phone, country)
  } catch (e: any) {
    throw e
  }
}
