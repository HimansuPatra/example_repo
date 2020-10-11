
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
   {path:'',component:LoginComponent},
   {path: 'register', component: RegisterComponent},
   {path: 'forget', component: ForgetpasswordComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
