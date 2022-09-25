import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/Order/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDtoEGPPipe } from './pipes/usdto-egp.pipe';
import { OrderMasterComponent } from './components/Order/order-master/order-master.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './components/Order/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductListComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    OrderMasterComponent,
    NotFoundComponent,
    UserLoginComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    AddProductComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
