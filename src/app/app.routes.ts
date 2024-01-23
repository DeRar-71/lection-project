import { Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {BooksComponent} from "./components/books/books.component";
import {AddBookComponent} from "./components/add-book/add-book.component";
import {EditBookComponent} from "./components/edit-book/edit-book.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'add-book',
    component: AddBookComponent
  },
  {
    path: 'edit-book',
    component: EditBookComponent
  },
];
