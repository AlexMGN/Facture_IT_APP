import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.page.html',
  styleUrls: ['./register-page.page.scss'],
})
export class RegisterPagePage implements OnInit {

  countries: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getCountries();
  }

  login() {
    this.router.navigate(['/login-page']);
  }

  getCountries() {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe((result) => {
      this.countries = result
    })
  }

}
