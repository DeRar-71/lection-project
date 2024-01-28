import { Injectable } from '@angular/core';
import {IBook} from "../../interfaces/IBook";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {API_URLS} from "../../../api.config";
import {IBookDto} from "../../interfaces/IBookDto";
import {IGenerateBooks} from "../../interfaces/IGenerateBooks";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(environment.apiUrl + API_URLS.books);
  }

  public addBook(bookData: IBookDto): Observable<IBook> {
    return this.httpClient.post<IBook>(environment.apiUrl + API_URLS.books, bookData);
  }

  public delete(bookId: string):Observable<any> {
    const url = this.getApiUrlForBook(bookId);
    return this.httpClient.delete(url);
  }

  public getBookById(bookId: string):Observable<IBookDto> {
    const url = this.getApiUrlForBook(bookId);
    return this.httpClient.get<IBookDto>(url);
  }

  public updateBook(bookId: string, bookData: IBookDto): Observable<any> {
    const url = this.getApiUrlForBook(bookId);
    return this.httpClient.put<any>(url, bookData);
  }

  public deleteBooks():Observable<any> {
    return this.httpClient.delete(environment.apiUrl + API_URLS.books);
  }

  public generateBooks(numberBooks: IGenerateBooks):Observable<any> {
    const booksGenerateUrl: string = API_URLS.generateBooks.replace('{count}', '' + numberBooks.count);
    return this.httpClient.post(environment.apiUrl + booksGenerateUrl, numberBooks);
  }

  private getApiUrlForBook(bookId: string):string {
    const bookUrl: string = API_URLS.book.replace('{id}', bookId);
    return `${environment.apiUrl}${bookUrl}`;
  }

}
