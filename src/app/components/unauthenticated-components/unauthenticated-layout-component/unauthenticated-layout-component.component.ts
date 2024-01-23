import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";

@Component({
  selector: 'cm-unauthenticated-layout-component',
  standalone: true,
  imports: [
    RouterOutlet, LoginComponent, RegisterComponent
  ],
  templateUrl: './unauthenticated-layout-component.component.html',
  styleUrl: './unauthenticated-layout-component.component.scss'
})
export class UnauthenticatedLayoutComponentComponent {

}
