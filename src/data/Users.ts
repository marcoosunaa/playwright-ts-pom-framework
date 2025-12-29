export type UserCreds = {
  readonly username: string;
  readonly password: string;
};

export class Users {
  static readonly standard_user: UserCreds = { username: 'standard_user', password: 'secret_sauce' };
  static readonly locked_out_user: UserCreds = { username: 'locked_out_user', password: 'secret_sauce' };
  static readonly invalid_user: UserCreds = { username: 'invalid_user', password: 'wrong_password' };
}