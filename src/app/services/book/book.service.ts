import { Injectable } from '@angular/core';
import {IBook} from "../../interfaces/IBook";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _currentId: number= 1;

  private _books: IBook[] = [
    {
      id: this._currentId++,
      name: "Test book",
      author: {
        firstName: 'test',
        lastName: 'last test'
      }
    },
    {
      id: this._currentId,
      name: "Test book2",
      author: {
        firstName: 'test2',
        lastName: 'last test2'
      }
    }
  ];
  constructor() { }

  public getAll(): Observable<IBook[]> {
    return of(this._books);
  }

  public addBook(): Observable<any> {
    const id = ++this._currentId;

    let book: IBook = {
      id: id,
      name: "Test book" + id,
      author: {
        firstName: 'test3',
        lastName: 'last test3'
      }
    }

    this._books.push(book);
    return of();
  }
}
