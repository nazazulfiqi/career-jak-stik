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

export type TLoginPayload = {
  email?: string;
  password?: string;
};

export type TLoginData = {
  data: {
    access_token: string;
    refresh_token: string;
    role: string;
  };
} & User;

export type TLoginResponse = TLoginData;