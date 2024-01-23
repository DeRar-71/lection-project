import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {NavigationComponent} from "../navigation/navigation.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'cm-authenticated-layout-component',
  standalone: true,
    imports: [
        FooterComponent,
        HeaderComponent,
        NavigationComponent,
        RouterOutlet
    ],
  templateUrl: './authenticated-layout-component.component.html',
  styleUrl: './authenticated-layout-component.component.scss'
})
export class AuthenticatedLayoutComponentComponent {

}
