import { Component } from '@angular/core';
import {BookFormComponent} from "../book-form/book-form.component";

@Component({
  selector: 'cm-edit-book',
  standalone: true,
    imports: [
        BookFormComponent
    ],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss'
})
export class EditBookComponent {
    edit() {
      console.log();
    }
}
