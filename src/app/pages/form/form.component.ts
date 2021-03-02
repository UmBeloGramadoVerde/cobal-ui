import { Component, OnInit } from '@angular/core';
import { FormDataModel } from './form.constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public formContent: FormDataModel = {
    emp_id: '',
    name: '',
    birthdate: '',
    address: '',
    status: '',
    position: '',
    created: '',
    updated: '',
  };
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    alert('Form sent');
  }
}
