import {Component, OnInit} from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { INavigationItem } from "../../interfaces/INavigationItem"
import { NavigationService } from "../../services/navigation/navigation.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatRippleModule} from "@angular/material/core";

@Component({
  selector: 'cm-navigation',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatButtonModule, MatRippleModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit{
  public navigationItems: INavigationItem[] = [];

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit(): void {
    this.loadNavigationItems();
  }

  private loadNavigationItems(): void {
    this.navigationService.getNavigationItems().subscribe(
      (items: INavigationItem[]) => {
        this.navigationItems = items;
      },
      (error) => {
        console.error('Error loading navigation items:', error);
      }
    );
  }

  showInfo(navItem: INavigationItem): void {
    // Handle the click event as needed
    console.log('Clicked on:', navItem);
  }
}
