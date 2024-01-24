import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'cm-register',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['../shared-styles.scss', './register.component.scss']
})
export class RegisterComponent {
    public registerForm: FormGroup = new FormGroup({
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', Validators.required),
      confirmPassword: new FormControl<string>('', Validators.required),
    })

    get email(): FormControl<string>
    {
      return this.registerForm.controls['email'] as FormControl<string>;
    }

    get password(): FormControl<string>
    {
      return this.registerForm.controls['password'] as FormControl<string>;
    }

    get confirmPassword(): FormControl<string>
    {
      return this.registerForm.controls['confirmPassword'] as FormControl<string>;
    }

    public register() {
      console.log('test');
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
