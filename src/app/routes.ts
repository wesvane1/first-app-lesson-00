import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    // This takes you to the home page when the link is ''
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    // This takes you to the home details page when the link is 'details/:id'
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  }
];

export default routeConfig;