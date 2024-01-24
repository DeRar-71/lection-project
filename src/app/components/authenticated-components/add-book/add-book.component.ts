import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {BookFormComponent} from "../book-form/book-form.component";

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
  public add() {
    console.log(1);
  }
}
