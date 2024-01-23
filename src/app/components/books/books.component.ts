import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book/book.service";
import {IBook} from "../../interfaces/IBook";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {AuthorPipe} from "../../pipes/author/author.pipe";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'cm-books',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    NgOptimizedImage,
    RouterLink,
    NgOptimizedImage,
    AuthorPipe
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent implements OnInit{

  public books: IBook[] = [];
  constructor(private bookService: BookService) {

  }

  public ngOnInit(): void {
    this.getAllBooks();
  }

  public getAllBooks() {
    this.bookService.getAll().subscribe(books => {
      this.books = books;
    });
  }

  addBook() {
    this.bookService.addBook().subscribe(() => {
      this.getAllBooks();
    });
  }
}
