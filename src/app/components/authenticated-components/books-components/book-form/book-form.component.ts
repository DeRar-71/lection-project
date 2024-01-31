import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {GoBackDirective} from "../../../../directives/go-back.directive";
import {FormFieldComponent} from "../../../common/form-field/form-field.component";
import {NotificationService} from "../../../../services/notification/notification.service";
import {TranslateModule} from "@ngx-translate/core";
@Component({
  selector: 'cm-book-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    GoBackDirective,
    FormFieldComponent,
    TranslateModule
  ],
  templateUrl: './book-form.component.html',
  styleUrl: '../../../../../scss/book-form.scss'
})
export class BookFormComponent {
  @Output() formEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() titleForm?: string;
  @Input() bookName?: string = '';
  @Input() bookAuthor?: string = '';
  @Input() buttonName?: string;

  constructor(private notifyService: NotificationService) {
  }

  formData: FormGroup = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    author: new FormControl<string>('', Validators.required)
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (this.bookName || this.bookAuthor) {
      this.formData.patchValue({
        name: this.bookName,
        author: this.bookAuthor
      });
    }
  }

  get name(): FormControl<string> {
    return this.formData.get('name') as FormControl<string>;
  }
  get author(): FormControl<string> {
    return this.formData.get('author') as FormControl<string>;
  }

  public formEventEmit() {
    if (this.hasChanges()) {
      this.formEvent.emit();
    } else {
      this.notifyService.sendFailNotify('NOTIFY.NO_CHANGE_IN_FORM');
    }
  }

  private hasChanges(): boolean {
    return this.formData.dirty;
  }
}
