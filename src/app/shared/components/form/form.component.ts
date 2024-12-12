import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'form-components',
  imports: [CommonModule, ReactiveFormsModule ],
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() formGroup!: FormGroup;
  @Input() template!: Array<{ key: string; label: string; type: string; validations?: any }>;

  ngOnInit(): void {
    if (!this.formGroup || !this.template) {
      console.error('FormGroup and Template are required for UFormComponent!');
    }
  }

  public getControl(key: string): FormControl {
    return this.formGroup.get(key) as FormControl;
  }

  onSubmit = () => {
    console.log('Form Submitted:', this.formGroup.value);
  }
}
