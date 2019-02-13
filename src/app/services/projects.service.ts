import { Injectable } from '@angular/core';
import { HttpProjectsService } from '../HttpRequests/projects.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ProjectsService {
  projects_list : any;
  constructor(private http : HttpProjectsService) { }

    getProjects(){
      return this.http.getProjectsList().snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ).subscribe(fileUploads => {
        console.log(fileUploads);
        this.projects_list = fileUploads;
      });
    }
}
