import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormField } from 'src/app/models/form-field';
import { FormfieldControlService } from 'src/app/services/formfield-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() formFields: FormField<string>[] | null = [];
  form: FormGroup;
  payLoad =' ';

  constructor(private fb: FormBuilder,
    private formFieldService: FormfieldControlService) { 
      this.form = this.fb.group({});
    }

  ngOnInit(): void {
    this.form = this.formFieldService.toFormGroup(this.formFields as FormField<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form?.getRawValue());
  }

}
