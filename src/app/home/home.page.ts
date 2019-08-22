import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  navigateBookAppointment () 
  {
    this.navCtrl.navigateForward("book-appointment");
  }

  redirect (page: string) {
    this.navCtrl.navigateForward(page);
  }

}
