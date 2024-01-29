import { Component } from '@angular/core';
import {SwitchThemeComponent} from "../../common/switch-theme/switch-theme.component";

@Component({
  selector: 'cm-footer',
  standalone: true,
  imports: [
    SwitchThemeComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
