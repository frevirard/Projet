import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { NavComponent } from './component/nav/nav.component';
import { ProduitsComponent } from './produits/produits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { SliderComponent } from './component/slider/slider.component';
import { FooterComponent } from './component/footer/footer.component';
import { EnregistrementsComponent } from './component/enregistrements/enregistrements.component';
import { BaseComponent } from './component/base/base.component';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './component/display/display.component';
const routes: Routes = [
  { path: 'register', component: EnregistrementsComponent },
  {path: 'base', component:BaseComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavComponent,
    ProduitsComponent,
    SliderComponent,
    FooterComponent,
    EnregistrementsComponent,
    BaseComponent,
    FormulaireComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    MatSnackBarModule,
    FormsModule

  ],



  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
