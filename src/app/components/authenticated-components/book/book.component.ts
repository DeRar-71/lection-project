import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {IBook} from "../../../interfaces/IBook";
import {AuthorPipe} from "../../../pipes/author/author.pipe";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {BookService} from "../../../services/book/book.service";
import {NotificationService} from "../../../services/notification/notification.service";

@Component({
  selector: 'cm-book',
  standalone: true,
  imports: [
    MatCardModule,
    AuthorPipe,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  @Input() book!: IBook;
  @Output() deleteBookEvent = new EventEmitter<string>();
  constructor(
    private bookService: BookService,
    private notifyService: NotificationService,
  ) {
  }

  public delete(bookId: string) {
    this.bookService.delete(bookId).subscribe({
      next: (): void => {
        this.notifyService.sendSuccessNotify("The book deleted");
        this.deleteBookEvent.emit();
      },
      error: (err) => {
        this.notifyService.sendFailNotify(err.message);
      }
    })
  }
}
