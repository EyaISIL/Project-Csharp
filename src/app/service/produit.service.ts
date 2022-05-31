import { Injectable } from "@angular/core";
// @ts-ignore
import { HttpProduit } from "@angular/common/http";
import {produit} from "../models/produit";
import {environment} from "../../environments/environment";

@Injectable({ providedIn : 'root' })
export class produitsService {

  constructor(private httpProduit : HttpProduit) {
  }

  getproduits(){
    return this.httpProduit.get<produit[]>(environment.apiurl + "produits")
  }

  createproduit(produit: produit) {
    return this.httpProduit.post<produit>(environment.apiurl + "produits", produit);
  }
}
