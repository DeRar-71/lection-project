import { Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {BooksComponent} from "./components/books/books.component";
import {AddBookComponent} from "./components/add-book/add-book.component";
import {EditBookComponent} from "./components/edit-book/edit-book.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {authGuard} from "./guards/auth/auth.guard";
import {HomeComponent} from "./components/home/home.component";
import {AuthPageComponent} from "./components/auth-page/auth-page.component";
import {
  AuthenticatedLayoutComponentComponent
} from "./components/authenticated-layout-component/authenticated-layout-component.component";
import {
  UnauthenticatedLayoutComponentComponent
} from "./components/unauthenticated-layout-component/unauthenticated-layout-component.component";

export const routes: Routes = [
  {
    path: '',
    component: AuthenticatedLayoutComponentComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
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
    path: 'login',
    component: UnauthenticatedLayoutComponentComponent,
    children: [
      {
        path: '',
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
