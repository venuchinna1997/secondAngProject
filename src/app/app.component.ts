import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  inputText: String = 'Initial Value';

  constructor(){
    this.user = new User();
    this.user.name = "Venu";
    this.user.designation = "Java Developer";
    this.user.address = "The Vineyards Apartments";
    this.user.phone = ["9377895257"]
  }
  
}
