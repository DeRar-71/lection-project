import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'cm-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['../shared-styles.scss', './login.component.scss']
})
export class LoginComponent {
  public username: string = '';
  public password: string = '';

  login() {
    // Здесь вы можете добавить логику для обработки введенных данных, например, отправку запроса на сервер
    console.log('Logging in with:', this.username, this.password);
    // Добавьте соответствующий код для аутентификации
  }
}
