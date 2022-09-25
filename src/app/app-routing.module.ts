import { UserRegisterComponent } from './components/user-register/user-register.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { NotAuthGuard } from './Guards/not-auth.guard';
import { ProductDetailsComponent } from './components/Order/product-details/product-details.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderMasterComponent } from './components/Order/order-master/order-master.component';
import { ProductListComponent } from './components/Order/product-list/product-list.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: '/Home', pathMatch: 'full'},
    {path: 'Home', component: HomeComponent},
    {path: 'Products', component: ProductListComponent},
    {path: 'Products/:pid', component: ProductDetailsComponent},
    {path: 'Product/Add', component: AddProductComponent},
    {path: 'Register', component: UserRegisterComponent},
    {path: 'Order', component: OrderMasterComponent, canActivate: [AuthGuard]},
  ]},
  {path: 'Login', component: UserLoginComponent, canActivate: [NotAuthGuard]},
  {path: '**', component: NotFoundComponent}, // Wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
