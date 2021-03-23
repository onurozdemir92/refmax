type TScore = 1 | 2 | 3 | 4 | 5;
export interface IUser {
  id?: string;
  username?: string;
  password?: string;
  email?: string;
  avatar?: string;
  tel?: string;
  sellerName?: string;
  score?: TScore;
}
export interface IRef {
  id?: string;
  userId?: string;
  title?: string;
  favorite?: boolean;
  description?: string;
  price?: string;
  country?: string;
  state?: string;
  district?: string;
  images?: string[];
}
