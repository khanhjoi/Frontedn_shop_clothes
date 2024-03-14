export type ProductDetailType = {
  id: number;
  categoryId: number;
  description: string;
  colors: Color[];
  name: string;
  price: string;
  rating: Rating[];
  sizes: Size[];
};

export type Color = {
  color: string;
  codeColor: string;
  images: Image[];
}

export type Image = {
  filePath: string;
  captions?: string;
  id?: number;
};

export type Rating = {
  comment: string;
  rating: number;
  userId: number;
  dateAdd?: string;
  productId: number;
  User: UserComment;
};

export type Size = {
  id?: number;
  name: string;
  caption: string;
};

export type UserComment = {
  firstName: string;
  lastName: string;
  email: string;
  avt?: string;
};
