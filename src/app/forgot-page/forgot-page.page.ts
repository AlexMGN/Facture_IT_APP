import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-forgot-page',
  templateUrl: './forgot-page.page.html',
  styleUrls: ['./forgot-page.page.scss'],
})
export class ForgotPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getBack() {
    this.router.navigate(['/login-page']);
  }

}
