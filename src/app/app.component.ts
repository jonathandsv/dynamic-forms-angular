import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormField } from './models/form-field';
import { FormfieldControlService } from './services/formfield-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dynamic-forms';
  formFields: Observable<FormField<string>[]>;

  constructor(service: FormfieldControlService) {
    
    this.formFields = (service.getFormFields() as Observable<FormField<any>[]>);
    // this.formFields = new Observable<FormField<any>[]>();
  }
}
