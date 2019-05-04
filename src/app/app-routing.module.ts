import { CartComponent } from './cart/cart.component';
import { AccountRegComponent } from './account-reg/account-reg.component';
import { AccountComponent } from './account/account.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ItemImportComponent } from './item-import/item-import.component';
import { FlowerImportComponent } from './flower-import/flower-import.component';
import { EventComponent } from "./event/event.component";
import { ItemComponent } from "./item/item.component";
import { FlowerComponent } from "./flower/flower.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  { path: "admin/flower", component: FlowerComponent },
  { path: "admin/item", component: ItemComponent },
  { path: "admin/event", component: EventComponent },
  { path: "admin/flowerImport", component:FlowerImportComponent},
  { path: "admin/itemImport", component:ItemImportComponent},
  { path: "admin/product", component:ProductComponent},
  { path: "admin/banner", component:BannerComponent},
  { path: "admin/account", component:AccountComponent},
  { path: "login", component:LoginComponent},
  { path: "reg", component:AccountRegComponent},
  { path: "cart", component:CartComponent},
  { path: "", component:HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
