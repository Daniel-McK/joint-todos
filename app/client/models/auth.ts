export enum AuthorizationStatus {
  PreLogin = 'PRE_LOGIN' as any,
  Pending = 'PENDING' as any,
  Authorized = 'AUTHORIZED' as any,
  NotAuthorized = 'NOT_AUTHORIZED' as any
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  admin: boolean;
}