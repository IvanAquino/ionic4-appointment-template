import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss'],
})
export class TestimonialsPage implements OnInit {

  private testimonials = [
    { name: 'User 1', image: 'https://image.flaticon.com/icons/svg/145/145843.svg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    { name: 'User 1', image: 'https://image.flaticon.com/icons/svg/145/145847.svg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    { name: 'User 1', image: 'https://image.flaticon.com/icons/svg/145/145848.svg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    { name: 'User 1', image: 'https://image.flaticon.com/icons/svg/145/145842.svg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    { name: 'User 1', image: 'https://image.flaticon.com/icons/svg/145/145846.svg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
