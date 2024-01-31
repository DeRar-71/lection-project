import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {environment} from "../../../../environments/environment";
import {UpperCasePipe} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatRippleModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'cm-language-switcher',
  standalone: true,
  imports: [
    MatButtonToggleModule,
    UpperCasePipe,
    MatListModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {

  public languages = environment.supportLanguages;
  public activeLanguage = environment.defaultLanguages;
  constructor(private translate: TranslateService) {
  }
  public changeLang(lang: string) {
    this.translate.use(lang);
    this.activeLanguage = lang;
  }
}
