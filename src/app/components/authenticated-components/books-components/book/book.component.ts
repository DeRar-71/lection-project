import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {AuthorPipe} from "../../../../pipes/author/author.pipe";
import {IBook} from "../../../../interfaces/IBook";
import {BookService} from "../../../../services/book/book.service";
import {NotificationService} from "../../../../services/notification/notification.service";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'cm-book',
  standalone: true,
  imports: [
    MatCardModule,
    AuthorPipe,
    MatButtonModule,
    RouterLink,
    TranslateModule
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
        this.notifyService.sendSuccessNotify("NOTIFY.THE_BOOK_DELETED");
        this.deleteBookEvent.emit();
      },
      error: (err) => {
        this.notifyService.sendFailNotify(err.message);
      }
    })
  }
}
