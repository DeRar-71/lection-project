import {Component, Input} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule, FormControl} from "@angular/forms";
import {ValidationService} from "../../../services/ValidationService";
@Component({
  selector: 'cm-form-field',
  standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() type: string = 'test';
  @Input() controlName: string = '';
  @Input() control?: FormControl;
  @Input() value?: string | null;

  constructor(private _validationService: ValidationService) {
  }

  get errorMessage(): string {
    return this.control ? this._validationService.getFieldErrorMessage(this.control) : '';
  }
}
