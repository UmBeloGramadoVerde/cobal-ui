import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
];

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class FormModule {}
