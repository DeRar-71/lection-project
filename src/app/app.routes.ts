import { Routes } from '@angular/router';
import {BooksComponent} from "./components/authenticated-components/books/books.component";
import {AddBookComponent} from "./components/authenticated-components/add-book/add-book.component";
import {EditBookComponent} from "./components/authenticated-components/edit-book/edit-book.component";
import {LoginComponent} from "./components/unauthenticated-components/login/login.component";
import {RegisterComponent} from "./components/unauthenticated-components/register/register.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {authGuard} from "./guards/auth/auth.guard";
import {HomeComponent} from "./components/authenticated-components/home/home.component";
import {
  UnauthenticatedLayoutComponentComponent
} from "./components/unauthenticated-components/unauthenticated-layout-component/unauthenticated-layout-component.component";
import {notAuthGuardGuard} from "./guards/notAuthGuard/not-auth-guard.guard";
import {GenerateBooksComponent} from "./components/authenticated-components/generate-books/generate-books.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'books',
    component: BooksComponent,
    canActivate: [authGuard]
  },
  {
    path: 'generate-books',
    component: GenerateBooksComponent,
    canActivate: [authGuard]
  },
  {
    path: 'add-book',
    component: AddBookComponent,
    canActivate: [authGuard]
  },
  {
    path: 'edit-book/:id',
    component: EditBookComponent,
    canActivate: [authGuard]
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
