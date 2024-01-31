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
      return 'VALIDATION.REQUIRED_FIELD';
    }

    if (control.errors['email']) {
      return 'VALIDATION.EMAIL_VALID';
    }

    if (control.errors['min']) {
      return `VALIDATION.NUMBER_CANNOT_BE_LESS_${control.errors['min'].min}`;
    }

    if (control.errors['pattern']) {
      return `VALIDATION.INVALID_TYPE`;
    }

    return '';
  }

  getFormErrorMessage(formGroup: FormGroup): string {
    if (formGroup?.errors === undefined || formGroup?.errors === null) {
      return '';
    }

    if (formGroup.errors['passwordMismatch']) {
      return 'VALIDATION.PASSWORD_MISMATCH';
    }

    return '';
  }
}
