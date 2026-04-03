export interface UserLoginDTO {
  account: string;
  password: string;
}

export interface UserRegisterDTO {
  account: string;
  password: string;
  phone: string;
}

export interface UserLoginVO {
  token: string;
}

export interface UserInfoVO {
  account: string;
  username: string;
  email: string;
  phone: string;
  avatar: string;
  role: string;
  accountId: string;
  registrationDate: string;
  certification: number;
  organization: string;
  organizationName: string;
  job: string;
  jobName: string;
  location: string;
  locationName: string;
}
