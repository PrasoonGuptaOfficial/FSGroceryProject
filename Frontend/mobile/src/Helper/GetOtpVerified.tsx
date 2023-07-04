export const GetOtpVerified = async (otp: string, otpHandler: any) => {
  try {
    const response = await otpHandler.confirm(otp);
    if (response) {
      return {
        phoneOtpResponse: response,
        errorFlag: false,
      };
    }
  } catch (error) {
    return {
      phoneOtpResponse: error,
      errorFlag: true,
    };
  }
};
