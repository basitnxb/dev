import { Injectable } from '@angular/core';
import { HttpProjectsService } from '../HttpRequests/projects.service';

@Injectable()
export class ProjectsService {
  projects_list = [];
  constructor(private http : HttpProjectsService) { }

    getProjects(){

       this.http.getProjectsList().valueChanges().subscribe(
        (response) => {
          // console.log(response);
           this.projects_list.push(response);
        },
        (error) => {
          console.log(error.error.message);
        }
      );
      return this.projects_list;
    }
}
