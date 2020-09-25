import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-facture-tab',
  templateUrl: './facture-tab.page.html',
  styleUrls: ['./facture-tab.page.scss'],
})
export class FactureTabPage implements OnInit {

  client: any = [];
  factures: any = [];

  constructor(private router:Router, private http: HttpClient) { }

  ngOnInit() {
    this.client = history.state.client
    console.log(this.client)
    /*this.getFactures()*/
  }

  goBack() {
    if (history.state.service === 'professionnel') {
      this.router.navigate(['/me/home/professionnel']);
    } else {
      this.router.navigate(['/me/home/particulier']);
    }
  }

  /*getFactures() {
    this.http.get('../assets/fakes/clients.json').subscribe((response: any) => {
        this.factures.push(response.clients_pro[0].factures);
        // Les factures sont reçus mais ne s'affichent pas
    })
  }*/

}
