import { Routes } from '@angular/router';
import {LoginComponent} from "./components/unauthenticated-components/login/login.component";
import {RegisterComponent} from "./components/unauthenticated-components/register/register.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {authGuard} from "./guards/auth/auth.guard";
import {HomeComponent} from "./components/authenticated-components/home/home.component";
import {
  UnauthenticatedLayoutComponentComponent
} from "./components/unauthenticated-components/unauthenticated-layout-component/unauthenticated-layout-component.component";
import {notAuthGuardGuard} from "./guards/notAuthGuard/not-auth-guard.guard";
import {authChildGuard} from "./guards/authChildGuard/auth-child.guard";
import {
  BooksListComponent
} from "./components/authenticated-components/books-components/books-list/books-list.component";
import {BooksComponent} from "./components/authenticated-components/books-components/books/books.component";
import {
  GenerateBooksComponent
} from "./components/authenticated-components/books-components/generate-books/generate-books.component";
import {AddBookComponent} from "./components/authenticated-components/books-components/add-book/add-book.component";
import {EditBookComponent} from "./components/authenticated-components/books-components/edit-book/edit-book.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'books',
    component: BooksComponent,
    canActivate: [authGuard],
    canActivateChild: [authChildGuard],
    children: [
      {
        path: 'generate',
        component: GenerateBooksComponent,
      },
      {
        path: 'add',
        component: AddBookComponent,
      },
      {
        path: 'edit/:id',
        component: EditBookComponent,
      },
      {
        path: '',
        component: BooksListComponent,
        pathMatch:"full"
      },
    ]
  },
  {
    path: '',
    component: UnauthenticatedLayoutComponentComponent,
    canActivate: [notAuthGuardGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
