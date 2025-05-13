import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';
import {ProjectsComponent} from './projects/projects.component';
import {ExperienceComponent} from './experience/experience.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
