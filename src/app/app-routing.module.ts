import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'Men',component:MenComponent},
  {path:'Women',component:WomenComponent},
  {path:'kids',component:KidsComponent},
  {path:'Addproducts',component:AddproductsComponent},
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'cartitem',component:CartItemsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
