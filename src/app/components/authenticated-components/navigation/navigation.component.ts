import {Component, OnInit, ViewChild} from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { INavigationItem } from "../../../interfaces/INavigationItem"
import { NavigationService } from "../../../services/navigation/navigation.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatRipple, MatRippleModule} from "@angular/material/core";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {AsyncPipe} from "@angular/common";
import {FocusRemoverDirective} from "../../../directives/focus-remover.directive";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'cm-navigation',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatButtonModule, MatRippleModule, RouterLink, RouterOutlet, RouterLinkActive, AsyncPipe, FocusRemoverDirective, TranslateModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{

  @ViewChild(MatRipple) ripple?: MatRipple;

  public navigationItems: INavigationItem[] = [];

  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.loadNavigationItems();
  }

  private loadNavigationItems(): void {
    this.navigationService.getNavigationItems().subscribe(
      (items: INavigationItem[]) => {
        this.navigationItems = items;
      });
  }

  showInfo(navItem: INavigationItem): void {
    console.log('Clicked on:', navItem);
  }

  public logout(): void {
    this.authService.logout();
  }

  // public onItemClick(event: any) {
  //   if (!this.ripple) return;
  //
  //   const rippleRef = this.ripple.launch({
  //     persistent: true,
  //     centered: true
  //   });
  //
  //   rippleRef.fadeOut();
  // }
}
