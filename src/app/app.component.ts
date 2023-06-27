import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;
  inputText: String = 'Initial Value';

  userName: String = '';
  response: any;

  constructor(private httpClient: HttpClient){
    this.user = new User();
    this.user.name = "Venu";
    this.user.designation = "Java Developer";
    this.user.address = "The Vineyards Apartments";
    this.user.phone = ["9377895257"]
  }

  onSearch(){
    this.httpClient.get('https://api.github.com/users/' + this.userName).subscribe(data => {
      this.response = data;
    })
  }
  
}
