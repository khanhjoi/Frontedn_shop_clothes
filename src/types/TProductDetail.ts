export type ProductDetailType = {
  id: number;
  categoryId: number;
  description: string;
  images: Images[];
  name: string;
  price: string;
  rating: Rating[];
};

export type Images = {
  filePath: string;
  color: string;
  captions?: string;
  id?: number;
};

export type Rating = {
  comment: string;
  rating: number;
  userId: number;
  productId: number;
  User: UserComment;
};

export type UserComment = {
  firstName: string;
  lastName: string;
  email: string;
  avt?: string;
};
