import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {CircularComponent} from './circular/circular.component'

export const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'circular',component: CircularComponent }
];

