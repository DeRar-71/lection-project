import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {ILogin} from "../../../interfaces/auth/ILogin";
import {FormFieldComponent} from "../../common/form-field/form-field.component";
import {NotificationService} from "../../../services/notification/notification.service";
import '@angular/localize/init';
import {TranslateModule} from "@ngx-translate/core";

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
    ReactiveFormsModule,
    FormFieldComponent,
    TranslateModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['../shared-styles.scss', './login.component.scss']
})
export class LoginComponent {

  public constructor(
    private authService: AuthService,
    private router: Router,
    private notify: NotificationService
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
    const loginData: ILogin = {
      email: this.email.value,
      password: this.password.value,
    }

    this.authService.login(loginData).subscribe({
      next: () => {
        this.notify.sendSuccessNotify('NOTIFY.LOGIN_SUCCESSFUL');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.notify.sendFailNotify(err.message)
      }
    });
  }

}
