import { Injectable } from '@angular/core';
import { HttpFurnituresService } from '../HttpRequests/furnitures.service';

@Injectable()
export class FurnituresService {
  furnitureList = [];
  constructor(private http : HttpFurnituresService) { }

  getAllFurnitures(){

    this.http.getFurnituresList().valueChanges().subscribe(
      (response) => {
        // console.log(response);
        this.furnitureList.push(response);
      },
      (error) => 
      {
        console.log(error.error.message);
      }
    );
    return this.furnitureList;
  }
}
