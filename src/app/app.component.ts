import { Component } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {NgIf} from '@angular/common';
import {SkillsComponent} from './skills/skills.component';
import {AboutComponent} from './about/about.component';
import {ExperienceComponent} from './experience/experience.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectsComponent} from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, HomeComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, ContactComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-frontend';

  selectedComponent: string = 'home'; // default

  onNavigate(component: string) {
    this.selectedComponent = component;
  }
}
