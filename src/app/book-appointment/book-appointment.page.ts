import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.page.html',
  styleUrls: ['./book-appointment.page.scss'],
})
export class BookAppointmentPage implements OnInit {

  private days = [];
  private dayActive: string = "";
  private hours = [
    "09:00:00", "09:10:00", "09:20:00", "09:30:00", "09:40:00", "09:50:00",
    "10:00:00", "10:10:00", "10:20:00", "10:30:00", "10:40:00", "10:50:00",
  ];
  private hourActive = "";

  constructor(private navCtrl: NavController) {
    this.generateDays();
  }

  ngOnInit() {
  }

  checkDay (day: any) {
    this.dayActive = this.getStrDay(day);
  }
  checkHour (hour: string) {
    this.hourActive = hour;
  }

  generateDays () {
    let now = moment();
    for (let i = 0; i < 7; i++) {
      now.add(1, 'd');

      this.days.push({
        month: now.format('MMM'),
        day: now.format("DD"),
        dayname: now.format("ddd")
      })
    }

    this.checkDay(this.days[0])
  }

  getStrDay (day: any) {
    return `${day.month}-${day.day}-${day.dayname}`;
  }

  next () {
    this.navCtrl.navigateForward('pick-service')
  }

}
