import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { IndexComponent } from 'src/app/content/index/index.component';
import { AboutComponent } from 'src/app/content/about/about.component';
import { NotfoundComponent } from 'src/app/content/notfound/notfound.component';
import { ProjectpageComponent } from 'src/app/content/projects/projectpage/projectpage.component';
import { ProjectdetailspageComponent } from 'src/app/content/projects/projectdetailspage/projectdetailspage.component';
import { ContactpageComponent } from 'src/app/content/contactpage/contactpage.component';

const appRoutes : Routes = [
  {  path : "index" , component : IndexComponent },
  {  path : "about-us" , component : AboutComponent },
  {  path : "projects" , component : ProjectpageComponent },
  {  path : "project-details" , component : ProjectdetailspageComponent },
  {  path : "contact-us" , component : ContactpageComponent },
  {  path : "**" , component : NotfoundComponent },
  {  path : "" , component : IndexComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports : [ RouterModule ]
})
export class AppRoutesModule { }
