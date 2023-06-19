import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit{

  @Input('user') userObj: User; 

  constructor() {
    this.userObj = new User();
  }
  ngOnInit(): void {
    
  }

}
