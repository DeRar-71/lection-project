import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'cm-home',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   public contents = [
     {
       id: 1,
       title: 'HOME_PAGE.TEXT_BLOCK_1.TITLE',
       text: 'HOME_PAGE.TEXT_BLOCK_1.TEXT',
     },
     {
       id: 2,
       title: 'HOME_PAGE.TEXT_BLOCK_2.TITLE',
       text: 'HOME_PAGE.TEXT_BLOCK_2.TEXT',
     },
     {
       id: 3,
       title: 'HOME_PAGE.TEXT_BLOCK_3.TITLE',
       text: 'HOME_PAGE.TEXT_BLOCK_3.TEXT',
     },
     {
       id: 4,
       title: 'HOME_PAGE.TEXT_BLOCK_4.TITLE',
       text: 'HOME_PAGE.TEXT_BLOCK_4.TEXT',
     },
     {
       id: 5,
       title: 'HOME_PAGE.TEXT_BLOCK_5.TITLE',
       text: 'HOME_PAGE.TEXT_BLOCK_5.TEXT',
     }
   ]
}
