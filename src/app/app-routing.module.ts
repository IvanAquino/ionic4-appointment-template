import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'book-appointment', loadChildren: './book-appointment/book-appointment.module#BookAppointmentPageModule' },
  { path: 'pick-service', loadChildren: './pick-service/pick-service.module#PickServicePageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'testimonials', loadChildren: './testimonials/testimonials.module#TestimonialsPageModule' },
  { path: 'office-hours', loadChildren: './office-hours/office-hours.module#OfficeHoursPageModule' },
  { path: 'my-appointments', loadChildren: './my-appointments/my-appointments.module#MyAppointmentsPageModule' },
  { path: 'services', loadChildren: './services/services.module#ServicesPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
