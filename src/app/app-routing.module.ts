import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './adminmovielisting/adminmovielisting.component';
import { EditComponent } from './adminmovielisting/edit/edit.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'',
  component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'home/:id',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'book/:id',
    component:BookComponent
  },
  {
    path:'mybooking/:id',
    component:MybookingComponent
  },
  {
    path:'adminmovielisting/:id',
    component:AdminComponent
  },
  {
    path:'adminmovielisting',
    component:AdminComponent
  },
  {
    path:'adminmovielisting/edit/:id',
    component:EditComponent
  },
  {
    path:'adminmovielisting/edit',
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
