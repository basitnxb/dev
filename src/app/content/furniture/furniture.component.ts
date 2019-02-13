import { Component, OnInit } from '@angular/core';
import { FurnituresService } from 'src/app/services/furnitures.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnitureComponent implements OnInit {
  furnitures = [];

  constructor(private furnitureService : FurnituresService) { }

  ngOnInit() {
    this.furnitures = this.furnitureService.getAllFurnitures();
    // console.log(this.furnitures);
  }

}
