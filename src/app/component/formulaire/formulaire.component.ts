import { Component,Inject, OnInit } from '@angular/core';
import { MatSnackBar,} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { MockService } from 'src/app/datasource/mock.service';
import { Produit } from 'src/app/BO/produit';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  produit = { id : Date.now().toString()} as Produit ;
  data = "fred";
  produits :Produit [] = []

  constructor(
   private mas:MatSnackBar,
   private http:HttpClient,
   private mock:MockService){ }

  ngOnInit(): void {
    this.mock.getAll().subscribe(x=>{this.produits = this.produits.concat(x)})
  }



  save(produit:Produit) {
    this.produits.push(produit)
    this.mock.addMember(this.produit)
    // this.mock.addProduit(this.produit)
    this.mas.open(this.produit.nom + "Bien enregistré(e) ", 'Undo', {
      duration: 3000
     })
    ;
  }
}
