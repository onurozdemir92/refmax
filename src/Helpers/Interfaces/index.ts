type TScore = 1 | 2 | 3 | 4 | 5;
// export interface IUser {
//   id?: string;
//   username?: string;
//   password?: string;
//   email?: string;
//   avatar?: string;
//   tel?: string;
//   sellerName?: string;
//   score?: TScore;
// }

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
  reklam?: boolean;
  url?: string;
  urlText?: string;
  status?: TRefStatus;
  premium?: boolean;
}
export interface IProduct {
  productId: string;
  userId: string;
  createdDate: string;
  productTitle: string;
  productImage: string;
  cityId: number;
  districtId: number;
  subCategoryId: string;
  categoryId:string;
  productStatus: number;
}

export interface IUser {
  address: string;
  firstname: string;
  lastname: string;
  profileType: string;
  userId: string;
  shopId: string;
}

export interface IProductChatItem {
  createdAt: Date;
  id: string;
  productId: string;
  users: Array<string>
}

export interface IProductChatMessages {
  id:string;
  sendDate: string;
  from: string;
  productChatItemId: string;
  text: string;
  to: string;
}

export interface ICategory {
  /**kategori id'si */
  id?: string;
  /** kullanıcıya gösterilecek kategori öğenin string verisi */
  text?: string;
  /** kategori öğesinin arkaplan rengi */
  backgroundColor?: string;
  /** kategori öğesinin yazı rengi */
  textColor?: string;
  /** kategori resimi */
  image?: string;
}
