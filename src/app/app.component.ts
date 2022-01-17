import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MockService } from './datasource/mock.service';
import { Produit } from './BO/produit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'creato';
  produits :Produit [] = []
  router: string;
  constructor (private http : HttpClient,
    private mock:MockService,
    private private_router:Router) {
      this.router = this.private_router.url
  }



  ngOnInit(): void {

  }
cssan() {
  let x = document.getElementById("je")

  if (x.className === "test") {
    x.className = "anim"

  } else if (x.className === "anim"){
    x.className = "test"

  }
}

}
