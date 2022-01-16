import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../BO/produit';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  url = "http://localhost:3000/produits/";
  constructor(private http: HttpClient) { }



  getAll() {
    return this.http.get<Produit> (this.url)
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
}
