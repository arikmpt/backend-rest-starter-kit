
export const responseSuccess = (code: number, data: any, message: string) => {
  return {
    code: code,
    success: true,
    message: message,
    data: data
  }
}

export const responseError = (code: number, error: any) => {
  return {
    code: code,
    success: false,
    errors: error
  }
}
