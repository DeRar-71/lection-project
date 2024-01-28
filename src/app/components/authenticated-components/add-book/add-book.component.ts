import {Component, ViewChild} from '@angular/core';
import { FormsModule} from "@angular/forms";
import {BookFormComponent} from "../book-form/book-form.component";
import {IBookDto} from "../../../interfaces/IBookDto";
import {BookService} from "../../../services/book/book.service";
import {NotificationService} from "../../../services/notification/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'cm-add-book',
  standalone: true,
    imports: [
        FormsModule,
        BookFormComponent
    ],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent {
  @ViewChild(BookFormComponent) bookAddForm!: BookFormComponent;
  constructor(
    private bookService: BookService,
    private notifyService: NotificationService,
    private router: Router,
  ) {
  }
  public add(): void {
    const bookData:IBookDto = this.getBookData();
    this.bookService.addBook(bookData).subscribe({
      next: (): void => {
        this.notifyService.sendSuccessNotify("New book added");
        this.router.navigate(['/books']);
      },
      error: (err): void => {
        this.notifyService.sendFailNotify(err.message);
      }
    })
  }

  private getBookData(): IBookDto {
    return this.bookAddForm.formData.value
  }
}
