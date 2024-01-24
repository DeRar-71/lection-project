import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {IBook} from "../../../interfaces/IBook";
import {AuthorPipe} from "../../../pipes/author/author.pipe";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

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

}
