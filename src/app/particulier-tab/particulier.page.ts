import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab2',
  templateUrl: 'particulier.page.html',
  styleUrls: ['particulier.page.scss']
})
export class ParticulierPage implements OnInit {

  clients = [];
  searchTerm = '';
  slice = 5;
  refresh = '';

  public allItems = [];

  constructor(private http: HttpClient, private router: Router) {
    this.allItems = this.clients;
  }

  ngOnInit() {
    this.getAllParticulierClients()
    console.log(this.clients)
  }

  getAllParticulierClients() {
    this.http.get('../assets/fakes/clients.json').subscribe((response: any) => {
      for (let i = 0; i < response.clients_particulier.length; i++) {
        this.clients.push(response.clients_particulier[i]);
      }
    })
  }

  checkClient(id: any) {
    this.router.navigate(['/fiche/client/factures'], {
      state: {
        service: 'professionnel',
        id: id
      }
    })
  }

  goToProfil() {
    this.router.navigate(['/profil-page'], {
      state: {
        service: 'particulier'
      }
    });
  }

  addClient() {
    this.router.navigate(['/add-client'], {
      state: {
        service: 'particulier'
      }
    });
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.slice += 5;
      infiniteScroll.target.complete();
    }, 500);
  }

  onSearchTerm(ev: CustomEvent) {
    this.clients = this.allItems;
    const val = ev.detail.value;

    if (val && val.trim() !== '') {
      this.clients = this.clients.filter(term => {
        return term.name.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
      });
    } else {
      this.clients = [];

      this.getAllParticulierClients();
    }
  }

  doRefresh(event) {
    this.refresh = 'Actualisation...';

    setTimeout(() => {
      this.clients = [];
      this.getAllParticulierClients();

      if (event !== 0) {
        event.target.complete();
        this.refresh = '';
      }
    }, 5000);
  }

}
