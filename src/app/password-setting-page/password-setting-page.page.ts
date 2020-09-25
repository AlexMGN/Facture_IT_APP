import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-password-setting-page',
  templateUrl: './password-setting-page.page.html',
  styleUrls: ['./password-setting-page.page.scss'],
})
export class PasswordSettingPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/profil-page']);
  }

}
