import {Component, Renderer2} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ThemeEnum} from "../../../enums/theme-enum";
@Component({
  selector: 'cm-switch-theme',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './switch-theme.component.html',
  styleUrl: './switch-theme.component.scss'
})
export class SwitchThemeComponent {
    private currentType: string = ThemeEnum.Dark;

    constructor(private renderer: Renderer2) {}

    public switchTheme() {
      this.renderer.removeClass(document.body, `${this.currentType}-theme`);
      this.currentType = this.currentType === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light;
      this.renderer.addClass(document.body, `${this.currentType}-theme`);
    }

    public getIcon() {
      const iconType = this.currentType === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light;
      return `${iconType}_mode`;
    }
}
