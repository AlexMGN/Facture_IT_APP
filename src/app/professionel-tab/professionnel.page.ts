import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'professionnel.page.html',
  styleUrls: ['professionnel.page.scss']
})
export class ProfessionnelPage implements OnInit{

  clients = [];
  searchTerm = '';
  slice = 5;
  refresh = '';

  public allItems = [];

  constructor(private http: HttpClient, private router: Router) {
    this.allItems = this.clients;
  }

  ngOnInit() {
    this.getAllProfessionnalClients()
  }

  getAllProfessionnalClients() {
    this.http.get('../assets/fakes/clients.json').subscribe((response: any) => {
      for (let i = 0; i < response.clients_pro.length; i++) {
        this.clients.push(response.clients_pro[i]);
      }
    })
  }

  checkClient(client) {
    this.router.navigate(['/fiche/client/factures'], {
      state: {
        service: 'professionnel',
        client: client
      }
    })
  }

  goToProfil() {
    this.router.navigate(['/profil-page'], {
      state: {
        service: 'professionnel'
      }
    });
  }

  addClient() {
    this.router.navigate(['/add-client'], {
      state: {
        service: 'professionnel'
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

      this.getAllProfessionnalClients();
    }
  }

  doRefresh(event) {
    this.refresh = 'Actualisation...';

    setTimeout(() => {
      this.clients = [];
      this.getAllProfessionnalClients();

      if (event !== 0) {
        event.target.complete();
        this.refresh = '';
      }
    }, 5000);
  }

}
