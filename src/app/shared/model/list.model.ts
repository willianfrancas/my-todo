import { UserModel } from "./user.model";

export interface ListModel {
  owner: UserModel;
  done: boolean;
  description: string;
  price: number;
  _id: number;
}