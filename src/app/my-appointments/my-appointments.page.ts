import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.page.html',
  styleUrls: ['./my-appointments.page.scss'],
})
export class MyAppointmentsPage implements OnInit {

  private appointments = [
    { day: 22, dayname: 'THU', month: 'JUL', time: "09:00:00", status: 'Attended' },
    { day: 22, dayname: 'THU', month: 'JUL', time: "09:00:00", status: 'Pending' },
    { day: 22, dayname: 'THU', month: 'JUL', time: "09:00:00", status: 'Attended' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
