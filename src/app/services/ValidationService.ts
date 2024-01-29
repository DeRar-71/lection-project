import { Injectable } from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  getFieldErrorMessage(control: AbstractControl | undefined): string {
    if (control?.errors === undefined || control?.errors === null) {
      return '';
    }

    if (control.errors['required']) {
      return 'Field is required';
    }

    if (control.errors['email']) {
      return 'Email should be valid';
    }

    if (control.errors['min']) {
      return `The number cannot be less than ${control.errors['min'].min}`;
    }

    if (control.errors['pattern']) {
      return `Invalid data type`;
    }

    return '';
  }

  getFormErrorMessage(formGroup: FormGroup): string {
    if (formGroup?.errors === undefined || formGroup?.errors === null) {
      return '';
    }

    if (formGroup.errors['passwordMismatch']) {
      return 'Password should match';
    }

    return '';
  }
}
