import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {
    path:'login',
    loadChildren: ()=> import('../feature/user/user.module').then(m=>m.UserModule)
   },
  {path:'' , redirectTo:'home',pathMatch:'full'},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
