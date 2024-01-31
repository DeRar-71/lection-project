import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FormFieldComponent} from "../../../common/form-field/form-field.component";
import {GoBackDirective} from "../../../../directives/go-back.directive";
import {BookService} from "../../../../services/book/book.service";
import {NotificationService} from "../../../../services/notification/notification.service";
import {IGenerateBooks} from "../../../../interfaces/IGenerateBooks";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'cm-generate-books',
  standalone: true,
  imports: [
    FormFieldComponent,
    GoBackDirective,
    MatButtonModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  templateUrl: './generate-books.component.html',
  styleUrl: '../../../../../scss/book-form.scss'
})
export class GenerateBooksComponent {
    constructor(
      private bookService: BookService,
      private router: Router,
      private notifyService: NotificationService,
    ) {
    }

    form: FormGroup = new FormGroup<any>({
      numberBooks: new FormControl<any>(0, [Validators.required, Validators.min(1), Validators.pattern(/^-?\d*(\.\d+)?$/)])
    })

    get numberBooks(): FormControl<any> {
      return this.form.get('numberBooks') as FormControl<any>
    }

    public generateBook(): void{
      const data: IGenerateBooks = {
        count: this.numberBooks.value
      }

      this.bookService.generateBooks(data).subscribe({
        next: () => {
          this.notifyService.sendSuccessNotify('NOTIFY.BOOKS_GENERATED');
          this.router.navigate(['/books']);
        },
        error: (err) => {
          this.notifyService.sendFailNotify(err.message);
        }
      })
    }
}
