import { Injectable } from '@angular/core';
import {  AngularFireList, AngularFireObject, AngularFireDatabase} from '@angular/fire/database';
import { Projectsmodel } from '../models/projectsmodel';
 import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore  } from '@angular/fire/firestore';


@Injectable()
export class HttpProjectsService {

  projectslist : AngularFireList<Projectsmodel[]>;
  files_object : AngularFireObject<any>;
   
  public basepath = '/projects';
  constructor(private db : AngularFireDatabase , private storageRef : AngularFireStorage) { }

  getProjectsList()
  {
     this.projectslist = this.db.list(this.basepath);
     return this.projectslist;
  }
}
