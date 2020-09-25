import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.page.html',
  styleUrls: ['./profil-page.page.scss'],
})
export class ProfilPagePage implements OnInit {

  service: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    if (history.state.service === 'professionnel') {
      this.router.navigate(['/me/home/professionnel']);
    } else {
      this.router.navigate(['/me/home/particulier']);
    }
  }

}
