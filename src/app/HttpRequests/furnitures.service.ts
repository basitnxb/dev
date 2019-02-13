import { Injectable } from '@angular/core';
// import { FirebaseDatabase } from '@angular/fire';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class HttpFurnituresService {

  furniturelist : AngularFireList<any>;
  public basepath = "/furniture";

  constructor(private  db : AngularFireDatabase) { }

  getFurnituresList(){
    this.furniturelist = this.db.list(this.basepath);
    return this.furniturelist;
  }
}
