import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {Router, RouterLink} from "@angular/router";
import {passwordConfirmDirective} from "../../../directives/password-confirm.directive";
import {AuthService} from "../../../services/auth/auth.service";
import {IRegister} from "../../../interfaces/auth/IRegister";
import {ValidationService} from "../../../services/ValidationService";
import {FormFieldComponent} from "../../common/form-field/form-field.component";
import {NgIf} from "@angular/common";
import {NotificationService} from "../../../services/notification/notification.service";

@Component({
  selector: 'cm-register',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    ReactiveFormsModule,
    FormFieldComponent,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrls: ['../shared-styles.scss', './register.component.scss']
})
export class RegisterComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
    private notifyService: NotificationService,
    protected validationService: ValidationService,
  ) {
  }

  public registerForm: FormGroup = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl<string>('', Validators.required),
    confirmPassword: new FormControl<string>('', Validators.required),
  },
    {
      validators: passwordConfirmDirective
    }
  )

  get name(): FormControl<string>
  {
    return this.registerForm.controls['name'] as FormControl<string>;
  }

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

  public register(): void {
    const register: IRegister = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value
    }

    this.authService.register(register).subscribe({
      next: (): void => {
        this.notifyService.sendSuccessNotify("Successfully registered");
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.notifyService.sendFailNotify(err.message);
      }
    });
  }

  getFormErrorMessage(): string|null {
    if (this.registerForm.errors?.['passwordMismatch'] && this.confirmPassword.valid && this.password.valid) {
      return this.validationService.getFormErrorMessage(this.registerForm);
    }

    return null;
  }
}
