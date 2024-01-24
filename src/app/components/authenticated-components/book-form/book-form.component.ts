import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {GoBackDirective} from "../../../directives/go-back.directive";

@Component({
  selector: 'cm-book-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    GoBackDirective
  ],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.scss'
})
export class BookFormComponent {
  @Output() submitForm: EventEmitter<any> = new EventEmitter();
  @Input() titleForm?: string;

  formData: FormGroup = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    author: new FormControl<string>('', Validators.required)
  });

  onSubmit() {
    this.submitForm.emit();
  }
}
