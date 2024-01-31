import {Component, OnInit} from '@angular/core';
import {BookComponent} from "../book/book.component";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {IBook} from "../../../../interfaces/IBook";
import {BookService} from "../../../../services/book/book.service";
import {NotificationService} from "../../../../services/notification/notification.service";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'cm-books-list',
  standalone: true,
  imports: [
    BookComponent,
    MatButtonModule,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.scss'
})
export class BooksListComponent implements OnInit{

  public books: IBook[] = [];
  constructor(
    private bookService: BookService,
    private notifyService: NotificationService,
  ) {

  }

  public ngOnInit(): void {
    this.getAllBooks();
  }

  public getAllBooks() {
    this.bookService.getAll().subscribe({
      next: (books: IBook[]) => {
        this.books = books;
      },
      error: (err: { message: any; }) => {
        this.notifyService.sendFailNotify(err.message);
      }
    });
  }

  public deleteBooks() {
    this.bookService.deleteBooks().subscribe({
      next: () => {
        this.getAllBooks();
        this.notifyService.sendSuccessNotify('NOTIFY.THE_BOOKS_DELETED');
      },
      error: (err: { message: any; }) => {
        this.notifyService.sendFailNotify(err.message);
      }
    });
  }

  public handleBookDelete() {
    this.getAllBooks();
  }
}
