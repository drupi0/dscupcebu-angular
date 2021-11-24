import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppGuardGuard } from './app-guard.guard';
import { AboutComponent } from './about/about.component';


const router: Routes = [{
    component: HomeComponent,
    path: "",
    canActivate: [AppGuardGuard]
  },
  {
    component: LoginComponent,
    path: "login"
  },
  {
    component: AboutComponent,
    path:  "about",
    canActivate: [AppGuardGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }
