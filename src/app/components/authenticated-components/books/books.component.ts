import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../services/book/book.service";
import {IBook} from "../../../interfaces/IBook";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {AuthorPipe} from "../../../pipes/author/author.pipe";
import {Router, RouterLink} from "@angular/router";
import {BookComponent} from "../book/book.component";
import {NotificationService} from "../../../services/notification/notification.service";

@Component({
  selector: 'cm-books',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    NgOptimizedImage,
    RouterLink,
    NgOptimizedImage,
    AuthorPipe,
    BookComponent
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit{

  public books: IBook[] = [];
  constructor(
    private bookService: BookService,
    private router: Router,
    private notifyService: NotificationService,
  ) {

  }

  public ngOnInit(): void {
    this.getAllBooks();
  }

  public getAllBooks() {
    this.bookService.getAll().subscribe({
      next: (books) => {
        this.books = books;
      },
      error: (err) => {
        this.notifyService.sendFailNotify(err.message);
      }
    });
  }

  public deleteBooks() {
    this.bookService.deleteBooks().subscribe({
     next: () => {
       this.getAllBooks();
       this.notifyService.sendFailNotify('Books deleted');
     },
      error: (err) => {
        this.notifyService.sendFailNotify(err.message);
      }
    });
  }

  public handleBookDelete() {
    this.getAllBooks();
  }
}
