// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Product = {
  id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  observation: string;
  quantity: number;
};

export type DeliveryList = {
  id: string;
  products: Product[];
  paymentMethod: string;
  total: number;
  deliveryPerson: string;
};

export type Client = {
  id: string;
  name: string;
  address: string;
  phone: string;
  deliveryListIds: string[];
};
