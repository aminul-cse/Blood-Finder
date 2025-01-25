import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AreaFormComponent } from './components/manage/area-form/area-form.component';
import { DonorsComponent } from './components/manage/donors/donors.component';
import { AreasComponent } from './components/manage/areas/areas.component';
import { DonorFormComponent } from './components/manage/donor-form/donor-form.component';
import { LoginComponent } from './components/manage/login/login.component';
import { RegisterComponent } from './components/manage/register/register.component';
import { AboutComponent } from './components/manage/about/about.component';

export const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "about", component: AboutComponent},
  // Areas routes
  { path: "admin/areas", component: AreasComponent},
  { path: "admin/areas/add", component: AreaFormComponent},
  { path: "admin/areas/:id", component: AreaFormComponent},
  // Donors routes
  { path: "admin/donors", component: DonorsComponent},
  { path: "admin/donor/add", component: DonorFormComponent},
  { path: "admin/donor/:id", component: DonorFormComponent},
];
