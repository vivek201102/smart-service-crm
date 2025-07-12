export const successResponse = (data: any, message: string = "Success", status: number = 200) => ({
  status,
  success: true,
  message,
  data
})

export const errorResponse = (message: string = "Error", status: number = 500, errors?: any) => ({
    status,
    success: false,
    message,
    errors
})