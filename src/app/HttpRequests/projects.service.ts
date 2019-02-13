import { Injectable } from '@angular/core';
import {  AngularFireList, AngularFireObject, AngularFireDatabase} from '@angular/fire/database';
import { Projectsmodel } from '../models/projectsmodel';
import { FirebaseStorage } from '@angular/fire';

@Injectable()
export class HttpProjectsService {

  projectslist : AngularFireList<Projectsmodel[]>;
  files_object : AngularFireObject<any>;
   
  public basepath = '/projects';
  constructor(private db : AngularFireDatabase) { }

  getProjectsList()
  {
    
    this.projectslist = this.db.list(this.basepath);
   return this.projectslist;
  }
}
