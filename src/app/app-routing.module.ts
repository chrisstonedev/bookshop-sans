import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccountComponent} from "./account/account.component";
import {BookComponent} from "./book/book.component";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {ConfirmComponent} from "./confirm/confirm.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {RegisterComponent} from "./register/register.component";
import {ResetComponent} from "./reset/reset.component";

@NgModule({
  imports: [
    RouterModule.forRoot([{
      path: '',
      component: HomeComponent
    }, {
      path: 'account',
      component: AccountComponent
    }, {
      path: 'book',
      component: BookComponent
    }, {
      path: 'cart',
      component: CartComponent
    }, {
      path: 'checkout',
      component: CheckoutComponent
    }, {
      path: 'confirm',
      component: ConfirmComponent
    }, {
      path: 'login',
      component: LoginComponent
    }, {
      path: 'logout',
      component: LogoutComponent
    }, {
      path: 'register',
      component: RegisterComponent
    }, {
      path: 'reset',
      component: ResetComponent
    }])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
