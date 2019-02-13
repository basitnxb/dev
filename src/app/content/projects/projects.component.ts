import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  p_list = [];
  constructor(private projects : ProjectsService) { }

  ngOnInit() {
    this.p_list = this.projects.getProjects();
  // console.log(this.p_list);
  }

}
