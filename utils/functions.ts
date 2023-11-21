export const toTitleCase = (s: string) => {
  return s?.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  })
}

export const parseFirebaseError = (errorCode: string) => {
  const splitedCode = errorCode.split('/')
  const codeString = splitedCode[1]?.replaceAll('-', ' ')
  return toTitleCase(codeString)
}
