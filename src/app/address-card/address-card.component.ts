import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit{

  user : any;
  @Input("name") userTitle : any

  constructor() {
  }
  ngOnInit(): void {
    this.user = {
      name: this.userTitle,
      title: 'Software Developer',
      address: '336 Firwood Dr, Apt B, Dayton, Ohio, 45419',
      phone:[
       '567863636363'
      ]
    };
  }

}
