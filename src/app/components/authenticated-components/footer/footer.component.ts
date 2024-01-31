import { Component } from '@angular/core';
import {ThemeSwitchComponent} from "../../common/theme-switch/theme-switch.component";
import {LanguageSwitcherComponent} from "../../common/language-switcher/language-switcher.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'cm-footer',
  standalone: true,
  imports: [
    ThemeSwitchComponent,
    LanguageSwitcherComponent,
    TranslateModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
