export type TRegisterPayload = {
  name: string;
  email: string;
  password: string;
  role: string;
};


export type TOTPPayload = {
  otp: string;
  email: string;
};
