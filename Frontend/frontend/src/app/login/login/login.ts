import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export interface Dr {
  name: string;
  email: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userData: Dr = {
    name: '',
    email: ''
  };

  constructor(private http: HttpClient) {}

  login() {
    this.http.post('http://localhost:3004/login', this.userData)
      .subscribe(response => {
        console.log(response);
      });
  }
}