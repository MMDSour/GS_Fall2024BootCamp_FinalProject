import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'form-components',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() formGroup!: FormGroup;
  @Input() template!: Array<{ key: string; label: string; type: string; validations?: any }>;
  @Input() navigation?: string = '';
  @Output() submit :EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    if (!this.formGroup || !this.template) {
      console.error('FormGroup and Template are required for UFormComponent!');
    }
  }

  public getControl(key: string): FormControl {
    return this.formGroup.get(key) as FormControl;
  }

  onSubmit = (event: Event) => {
    event.preventDefault();
    this.submit.emit(this.formGroup.value);
  }
}
