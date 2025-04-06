import { Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "08-routing-recap | Welcome",
  },
  {
    path: 'home',
    component: HomeComponent,
    title: "08-routing-recap | Home",
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: "08-routing-recap | Product details"
  }
];
