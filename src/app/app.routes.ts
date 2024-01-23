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
  AuthenticatedLayoutComponentComponent
} from "./components/authenticated-components/authenticated-layout-component/authenticated-layout-component.component";
import {
  UnauthenticatedLayoutComponentComponent
} from "./components/unauthenticated-components/unauthenticated-layout-component/unauthenticated-layout-component.component";
import {notAuthGuardGuard} from "./guards/notAuthGuard/not-auth-guard.guard";

export const routes: Routes = [
  {
    path: '',
    component: AuthenticatedLayoutComponentComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'books',
        component: BooksComponent,
      },
      {
        path: 'add-book',
        component: AddBookComponent,
      },
      {
        path: 'edit-book',
        component: EditBookComponent,
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
