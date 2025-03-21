
export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

export const successResponse = <T>(data: T, message = "Success"): ApiResponse<T> => ({
  success: true,
  data,
  message,
});

export const errorResponse = (error: string, message = "Error"): ApiResponse<null> => ({
  success: false,
  error,
  message,
});
