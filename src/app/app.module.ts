import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms'

import {environment} from '../environments/environment';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

import {CrudService} from './service/crud.service';
import {produitsComponent} from "./clients/produit.component";
import {RouterModule, Routes} from "@angular/router";
import {FormComponent} from "./form.component";

import {HttpProduitModule} from "@angular/common/http";

const routes : Routes = [
  { path : "", component : FormComponent },
  { path : "produits", component : produitsComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    produitsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpProduitModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
