import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { AppproductComponent } from './appproduct/appproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { DeleComponent } from './dele/dele.component';

const routes: Routes = [
  {
    path:'',component:ProductlistComponent
  },
  {
    path:'addproduct',component:AppproductComponent
  },
  {
    path:'editproduct',component:EditproductComponent
  },
  {
    path:'viewproduct',component:ViewproductComponent
  },
  {
    path:'productlist',component:ProductlistComponent
  },
  {
    path:'deleteuser',component:DeleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
