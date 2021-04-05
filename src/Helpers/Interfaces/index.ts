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

type TRefStatus = 0 | 1 | 2;
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
  date?: Date;
  status?: TRefStatus;
  premium?: boolean;
}

export interface ICategory {
  /**kategori id'si */
  id?: string;
  /** kullanıcıya gösterilecek kategori öğenin string verisi */
  text?: string;
 /** kategoriye ait icon veya jsx elementi */  
  icon?: JSX.Element;
  /** kategori öğesinin arkaplan rengi */
  backgroundColor?: string;
  /** kategori öğesinin yazı rengi */
  textColor?: string;
}
