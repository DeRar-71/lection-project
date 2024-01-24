import {Component, OnInit, ViewChild} from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { INavigationItem } from "../../../interfaces/INavigationItem"
import { NavigationService } from "../../../services/navigation/navigation.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatRipple, MatRippleModule} from "@angular/material/core";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {BehaviorSubject, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {FocusRemoverDirective} from "../../../directives/focus-remover.directive";

@Component({
  selector: 'cm-navigation',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatButtonModule, MatRippleModule, RouterLink, RouterOutlet, RouterLinkActive, AsyncPipe, FocusRemoverDirective],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{

  @ViewChild(MatRipple) ripple?: MatRipple;

  private activeLinkIdSubject:BehaviorSubject<number | null> = new BehaviorSubject<number | null>(null);
  activeLinkId$: Observable<number | null> = this.activeLinkIdSubject.asObservable();
  public navigationItems: INavigationItem[] = [];

  constructor(
    private navigationService: NavigationService,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.loadNavigationItems();
    this.setActiveMenuId(this.navigationItems[0].id);
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
    this.router.navigate(['/login']);
  }

  public setActiveMenuId(linkId: number): void {
    this.activeLinkIdSubject.next(linkId);
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
