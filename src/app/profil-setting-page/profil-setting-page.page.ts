import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-profil-setting-page',
  templateUrl: './profil-setting-page.page.html',
  styleUrls: ['./profil-setting-page.page.scss'],
})
export class ProfilSettingPagePage implements OnInit {

  countries: any;
  url = 'https://firebasestorage.googleapis.com/v0/b/webradio-stream.appspot.com/o/Users%2F29%2FImages%2Fimage_1.png?alt=media&token=303af267-fa31-4ec1-9869-27670764b691';

  constructor(private router: Router, private http: HttpClient, private afStorage: AngularFireStorage) { }

  ngOnInit() {
    this.getCountries();
  }

  goBack() {
    this.router.navigate(['/profil-page']);
  }

  getCountries() {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe((result) => {
      this.countries = result;
    })
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;

      this.afStorage.upload('/Users/Images/' + file.name, event.target.files[0])
          .then((result) => {
            result.ref.getDownloadURL().then((url) => {
              this.url = url;
            });
          });
    }
  }

}
