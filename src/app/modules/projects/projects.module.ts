import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';
import { ProjectdetailspageComponent } from '../../content/projects/projectdetailspage/projectdetailspage.component';
import { ProjectpageComponent } from '../../content/projects/projectpage/projectpage.component';
import { ProjectsbannerComponent } from '../../content/projects/projectsbanner/projectsbanner.component';
import { ProjectsareaComponent } from '../../content/projects/projectsarea/projectsarea.component';
import { ProjectsComponent } from '../../content/projects/projects.component';
import { HttpProjectsService } from 'src/app/HttpRequests/projects.service';

@NgModule({
  declarations: [
    ProjectdetailspageComponent,
    ProjectpageComponent,
    ProjectsbannerComponent,
    ProjectsareaComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectdetailspageComponent,
    ProjectpageComponent,
    ProjectsbannerComponent,
    ProjectsareaComponent,
    ProjectsComponent
  ],
  providers : [ProjectsService,HttpProjectsService]
})
export class ProjectsModule { }
