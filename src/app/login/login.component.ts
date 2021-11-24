import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(public route: Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem("credential");
  }

  login() {

    if(this.username && this.password) {
      const creds = {
        username: this.username,
        password: this.password
      }

      sessionStorage.setItem("credential", JSON.stringify(creds))
    }

    this.route.navigate([""]);
  }

}
