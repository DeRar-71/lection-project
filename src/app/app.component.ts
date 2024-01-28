import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/authenticated-components/header/header.component";
import {FooterComponent} from "./components/authenticated-components/footer/footer.component";
import {NavigationComponent} from "./components/authenticated-components/navigation/navigation.component";
import {
  UnauthenticatedLayoutComponentComponent
} from "./components/unauthenticated-components/unauthenticated-layout-component/unauthenticated-layout-component.component";
import {AuthService} from "./services/auth/auth.service";

@Component({
  selector: 'cm-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, NavigationComponent, UnauthenticatedLayoutComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private authService: AuthService) {
  }

  public isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
