import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import {  environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainmenuComponent } from './layouts/mainmenu/mainmenu.component';
import { IndexComponent } from './content/index/index.component';
import { AboutComponent } from './content/about/about.component';
import { HomebannerComponent } from './content/index/homebanner/homebanner.component';
import { FurnitureComponent } from './content/furniture/furniture.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { FeaturesComponent } from './content/features/features.component';
import { AppRoutesModule } from './routes/app-routes/app-routes.module';
import { AboutusbannerComponent } from './content/about/aboutusbanner/aboutusbanner.component';
import { AboutusareaComponent } from './content/about/aboutusarea/aboutusarea.component';
import { NotfoundComponent } from './content/notfound/notfound.component';
import { NotfoundbannerComponent } from './content/notfoundbanner/notfoundbanner.component';
import { HttpProjectsService } from './HttpRequests/projects.service';
import { ProjectsService as PService } from './services/projects.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ProjectpageComponent } from './content/projects/projectpage/projectpage.component';
import { ProjectsbannerComponent } from './content/projects/projectsbanner/projectsbanner.component';
import { ProjectsareaComponent } from './content/projects/projectsarea/projectsarea.component';
import { ProjectdetailspageComponent } from './content/projects/projectdetailspage/projectdetailspage.component';
import { ContactpageComponent } from './content/contactpage/contactpage.component';
import { ContactbannerComponent } from './content/contactpage/contactbanner/contactbanner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainmenuComponent,
    IndexComponent,
    AboutComponent,
    HomebannerComponent,
    FurnitureComponent,
    ProjectsComponent,
    FeaturesComponent,
    AboutusbannerComponent,
    AboutusareaComponent,
    NotfoundComponent,
    NotfoundbannerComponent,
    ProjectpageComponent,
    ProjectsbannerComponent,
    ProjectsareaComponent,
    ProjectdetailspageComponent,
    ContactpageComponent,
    ContactbannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    AngularFireModule.initializeApp(environment.firebase),
   
  ],
  providers: [HttpProjectsService,PService,AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
