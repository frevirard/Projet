import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockService } from './datasource/mock.service';
import { Produit } from './BO/produit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'creato';
  produits :Produit [] = []
  constructor (private http : HttpClient,
    private mock:MockService) {

  }

  ngOnInit(): void {
    this.mock.getAll().subscribe(x=>{this.produits = this.produits.concat(x)})

    // console.log (this.produits)
    // console.log(this.produits[1])

    console.log (this.produits)

  }


}
