import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppproductComponent } from './appproduct/appproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import {  HttpClientModule } from '@angular/common/http';
import { NgserviceService } from './ngservice.service';
import { DeleComponent } from './dele/dele.component';


@NgModule({
  declarations: [
    AppComponent,
    AppproductComponent,
    EditproductComponent,
    ProductlistComponent,
    ViewproductComponent,
    DeleComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NgserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
