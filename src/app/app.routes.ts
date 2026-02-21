import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CoursesComponent } from './features/courses/courses.component';
import { ConferencesComponent } from './features/conferences/conferences.component';
import { KidsComponent } from './features/kids/kids.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CoursesComponent },
  { path: 'conferencias', component: ConferencesComponent },
  { path: 'kids', component: KidsComponent },
  { path: '**', redirectTo: '' }
];
