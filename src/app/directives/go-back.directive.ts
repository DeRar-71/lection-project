import { Directive, HostListener, ElementRef } from '@angular/core';
import { Location} from '@angular/common';

@Directive({
  standalone: true,
  selector: "[backButton]",
})

export class GoBackDirective {
  constructor(private location: Location) {}

  @HostListener("click")
  onClick(): void {
    this.location.back();
  }
}
