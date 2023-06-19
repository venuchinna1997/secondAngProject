import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

  constructor(){
    this.user = new User();
    this.user.name = "ABCD";
    this.user.designation = "ZXCVBNM";
    this.user.address = "QWERTY";
    this.user.phone = ["25265365365"]
  }
  
}
