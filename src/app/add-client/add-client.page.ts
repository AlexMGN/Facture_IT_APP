import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.page.html',
  styleUrls: ['./add-client.page.scss'],
})
export class AddClientPage implements OnInit {

  countries: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe((result) => {
      this.countries = result
    })
  }

  goBack() {
    if (history.state.service === 'professionnel') {
      this.router.navigate(['/me/home/professionnel']);
    } else {
      this.router.navigate(['/me/home/particulier']);
    }
  }

}
