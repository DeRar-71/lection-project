import {IAuthor} from "./IAuthor";

export interface IBook {
  id: number;
  name: string;
  author: IAuthor;
}
