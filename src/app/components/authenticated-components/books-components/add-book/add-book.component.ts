import {Component, ViewChild} from '@angular/core';
import { FormsModule} from "@angular/forms";
import {BookFormComponent} from "../book-form/book-form.component";
import {Router} from "@angular/router";
import {BookService} from "../../../../services/book/book.service";
import {NotificationService} from "../../../../services/notification/notification.service";
import {IBookDto} from "../../../../interfaces/IBookDto";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'cm-add-book',
  standalone: true,
  imports: [
    FormsModule,
    BookFormComponent,
    TranslateModule
  ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {
  @ViewChild(BookFormComponent) bookAddForm!: BookFormComponent;
  constructor(
    private bookService: BookService,
    private notifyService: NotificationService,
    private router: Router
  ) {
  }
  public add(): void {
    const bookData:IBookDto = this.getBookData();
    this.bookService.addBook(bookData).subscribe({
      next: (): void => {
        this.notifyService.sendSuccessNotify('NOTIFY.NEW_BOOK_ADDED');
        this.router.navigate(['/books']);
      },
      error: (err: { message: any; }): void => {
        this.notifyService.sendFailNotify(err.message);
      }
    })
  }

  private getBookData(): IBookDto {
    return this.bookAddForm.formData.value
  }
}
