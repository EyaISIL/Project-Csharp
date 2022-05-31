import { Component } from '@angular/core';
import {CrudService} from "./service/crud.service";
import {error} from "@angular/compiler/src/util";
import {produitsService} from "./service/produit.service";
import {produit} from "./models/produit";

@Component({
  selector: 'app-root',
  templateUrl: './form.component.html',
  styleUrls: ['./app.component.css']
})
export class FormComponent {
  title = 'untitled1';

  computerID:number =0;

 brand: string='0';
  Processor: number=0;
  HardDisk: number=0;
  MemoryRAM: number=0;
  produitP: string='0';
  Size: number =0;
  Weight: number=0;
  OS:string='0';
  Price:number=0;
  color:string='0';
message:string='';


  constructor(public crudsevice:CrudService, private  produitsService : produitsService) {}

  CreateRecord(){
    let Record :any = {};
    let Produit = new produit();



    Record['computerID']= this.computerID;
    Produit.computerID= this.computerID;
    Record['brand']= this.brand;
    Produit.brand= this.brand;
    Record['Processor']= this.Processor;
    Produit.Processor = this.Processor ;
    Record['HardDisk']= this.HardDisk;
    Produit.HardDisk = this.HardDisk;
    Record['MemoryRAM']= this.MemoryRAM;
    Produit.MemoryRAM = this.MemoryRAM;
    Record['Size']= this.Size;
    Produit.Size = this.Size;
    Record['Weight']= this.Weight;
    Produit.Weight = this.Weight;
    Record['OS']= this.OS;
    Produit.OS = this.OS;
    Record['Price']= this.Price;
    Produit.Price = this.Price;
    Record['color']= this.color;
    Produit.color = this.color;
    this.produitsService.createproduit( Produit)
      .subscribe(() => {}, () => alert("An error occured"));

    // Firebase
    this.crudsevice.create_Newproduit(Record).then(res =>
    {
      this.brand="";
      this.Price=0;

      console.log(res);
      this.message = "produit.ts data saved";


    }).catch(error => {
      console.log(error);
    });

  }
}
