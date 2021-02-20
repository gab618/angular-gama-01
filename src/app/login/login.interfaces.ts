export interface Login {
  user: User;
  token: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  is_admin: boolean;
  avatar: Avatar;
}

export interface Avatar {
  url: string;
  id: number;
  path: string;
}
