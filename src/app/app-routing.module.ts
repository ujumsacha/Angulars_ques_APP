import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { AuthComponent } from './login/auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"", component: AuthComponent },
  { path:"login", component: AuthComponent },
  { path:"dashbord", component: DashbordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
