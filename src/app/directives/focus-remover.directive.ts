import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: 'a'
})

export class FocusRemoverDirective {
  constructor(private elRef: ElementRef) {}

  @HostListener('click') onClick() {
    this.elRef.nativeElement.blur();
  }
}
