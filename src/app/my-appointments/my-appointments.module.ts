import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyAppointmentsPage } from './my-appointments.page';

const routes: Routes = [
  {
    path: '',
    component: MyAppointmentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyAppointmentsPage]
})
export class MyAppointmentsPageModule {}
