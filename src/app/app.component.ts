import { Component } from '@angular/core';
import {CrudService} from "./service/crud.service";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled1';


  computerID:number =0;

  brand: string='';
  Processor: number=0;
  HardDisk: number=0;
  MemoryRAM: number=0;
  produitP: string='';
  Size: number =0;
  Weight: number=0;
  OS:string='';
  Price:number=0;
  color:string='';
  message:string='';
  constructor(public crudsevice:CrudService) {}

  CreateRecord(){
    let Record :any = {};

    Record['computerID']= this.computerID;
    Record['brand']= this.brand;
    Record['Processor']= this.Processor;
    Record['HardDisk']= this.HardDisk;
    Record['MemoryRAM']= this.MemoryRAM;
    Record['Size']= this.Size;
    Record['Weight']= this.Weight;
    Record['OS']= this.OS;
    Record['Price']= this.Price;
    Record['color']= this.color;

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
