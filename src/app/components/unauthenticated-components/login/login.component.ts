import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'cm-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['../shared-styles.scss', './login.component.scss']
})
export class LoginComponent {

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  loginForm : FormGroup = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl<string>('', Validators.required),
  });

  get email(): FormControl<string> {
    return this.loginForm.get('email') as FormControl<string>;
  }
  get password(): FormControl<string> {
    return this.loginForm.get('password') as FormControl<string>;
  }

  login() {
    this.authService.authorization();
    this.router.navigate(['/home']);
  }

  getErrorMessageForEmail(): string {
    if (this.email?.errors === null) {
      return '';
    }

    if (this.email?.errors?.['required']) {
      return 'Email is required';
    }

    if (this.email?.errors?.['email']) {
      return 'Email should be valid';
    }

    return '';
  }

  getErrorMessageForPassword(): string {
    if (this.password?.errors === null) {
      return '';
    }

    if (this.password?.errors?.['required']) {
      return 'Password is required';
    }

    return '';
  }
}
