import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../BO/produit';
import { Woj } from '../BO/woj';
import { MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  url = "http://localhost:3000/produits/";
  url_woj = "http://localhost:3000/woj/"
  emoji = "&#x1F601"

  constructor(private http: HttpClient,
    private matsnack:MatSnackBar) { }



  getAll() {
    return this.http.get<Woj> (this.url_woj)
  }

  addProduit(Produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(this.url, Produit)
  }

  addMember(produit:Produit) {
    this.http.post(this.url, produit).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  addWoj(woj:Woj) {
    this.http.post(this.url_woj,woj).subscribe(
      x => {
          this.matsnack.open( woj.categorie + " Bien enrégistré" + this.emoji , "Post Request Succesful", {
          duration:3000 } )
      },
      error => {
        this.matsnack.open( woj.nom + " Erreur de l'enregistrement" , "Error", {
          duration:3000 } )
      }

    )
  }
}
