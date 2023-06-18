import { Component } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent {

  user : any;

  constructor() {
    this.user = {
      name: 'VGR',
      title: 'Software Developer',
      address: '336 Firwood Dr, Apt B, Dayton, Ohio, 45419',
      phone:[
       '567863636363'
      ]
    };
  }

}
