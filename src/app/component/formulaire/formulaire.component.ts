import { Component,Inject, OnInit } from '@angular/core';
import { MockService } from 'src/app/datasource/mock.service';
import { Woj } from 'src/app/BO/woj';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

 woj = { id : Date.now().toString()} as Woj;
 wojs: Woj[] = [];





  constructor(
   private mock:MockService){ }

  ngOnInit(): void {
    this.mock.getAll().subscribe(x=>{this.wojs = this.wojs.concat(x)})

  }

  save(woj:Woj) {
      this.mock.addWoj(woj)
      this.woj.id = Date.now().toString()
    ;
  }
}
