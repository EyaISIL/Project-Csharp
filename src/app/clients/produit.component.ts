import {Component, OnInit} from "@angular/core";
import {produitsService} from "../service/produit.service";
import {produit} from "../models/produit";

@Component({
  selector : "app-produits",
  templateUrl : "./produits.component.html",
  styleUrls : [
    '../app.component.css'
  ]
})

export class produitComponent implements OnInit {
  produits : produit[] = [];

  produit = new produit()

  constructor(private produitsService : produitsService) {
  }

  ngOnInit(): void {
    this.produitsService.getproduits()
      .subscribe((produits : produit[] ) => {
        this.produits = produits;
      })
  }


}
