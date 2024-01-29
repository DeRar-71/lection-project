import {Component, OnInit, ViewChild} from '@angular/core';
import {BookFormComponent} from "../book-form/book-form.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {BookService} from "../../../../services/book/book.service";
import {NotificationService} from "../../../../services/notification/notification.service";
import {IBookDto} from "../../../../interfaces/IBookDto";

@Component({
  selector: 'cm-edit-book',
  standalone: true,
    imports: [
        BookFormComponent
    ],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss'
})
export class EditBookComponent implements OnInit{
  @ViewChild(BookFormComponent) bookEditForm!: BookFormComponent;

  private bookId: string = '';
  private subscription: Subscription;

  public bookName: string = '';
  public bookAuthor: string = '';
  constructor(
    private bookService: BookService,
    private notifyService: NotificationService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.subscription = activateRoute.params.subscribe(params=>this.bookId=params["id"]);
  }
  ngOnInit(): void {
    this.bookService.getBookById(this.bookId).subscribe({
      next: (result) => {
        if (result) {
          this.bookName = result.name;
          this.bookAuthor = result.author;
        } else {
          this.notifyService.sendFailNotify('Book not found');
          this.router.navigate(['books']);
        }
      },
      error: (err) => {
        this.notifyService.sendFailNotify(err.message)
        this.router.navigate(['books']);
      }
    })
  }

  public edit(): void {
    const bookData: IBookDto = this.getBookData();
    this.bookService.updateBook(this.bookId, bookData).subscribe({
      next: (): void => {
        this.notifyService.sendSuccessNotify("Books updated");
        this.router.navigate(['/books']);
      },
      error: (err) => {
        this.notifyService.sendFailNotify(err.message);
      }
    })
  }

  private getBookData(): IBookDto {
    return this.bookEditForm.formData.value
  }
}
