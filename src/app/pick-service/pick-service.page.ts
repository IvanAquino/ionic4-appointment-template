import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pick-service',
  templateUrl: './pick-service.page.html',
  styleUrls: ['./pick-service.page.scss'],
})
export class PickServicePage implements OnInit {

  private services = [
    "Sales", "Support", "Call center", "Car"
  ];
  private serviceActive: string = "";

  constructor(private alertCtrl: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  checkService(service: string) {
    this.serviceActive = service;
  }

  async confirmAppointment () {
    let alert = await this.alertCtrl.create({ message: 'Appointment confirmed', buttons: ['Ok'] });
    alert.present();
    this.navCtrl.navigateRoot("home")
  }

}
