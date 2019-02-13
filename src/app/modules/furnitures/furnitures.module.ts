import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FurnitureComponent } from 'src/app/content/furniture/furniture.component';
import { FurnituresService } from 'src/app/services/furnitures.service';
import { HttpFurnituresService } from 'src/app/HttpRequests/furnitures.service';

@NgModule({
  declarations: [
    FurnitureComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    FurnitureComponent
  ],
  providers : [FurnituresService,HttpFurnituresService]
})
export class FurnituresModule { }
