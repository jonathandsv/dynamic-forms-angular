import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormField } from 'src/app/models/form-field';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.scss']
})
export class DynamicFormInputComponent implements OnInit {
  @Input() input: FormField<string>;
  @Input() form: FormGroup;

  get isValid() { return this.form?.controls[(this.input as FormField<string>)?.key].valid; }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
    this.input = new FormField<string>();
   }

  ngOnInit(): void {
  }

}
