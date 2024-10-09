import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  //home: 4200
  { path:"", component:HomeComponent},
  // /register
  {path:"register", component:RegisterComponent},
  // /login
  {path:"login", component:LoginComponent},
  //  /10/view
  {path:":id/view", component:ViewComponent},
  //  /wishlist
  {path:"wishlist", canActivate:[authGuard], component:WishlistComponent},
  // /cart
  {path:"cart", canActivate:[authGuard], component:CartComponent},
  //  /checkout
  {path:"checkout", canActivate:[authGuard], component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
