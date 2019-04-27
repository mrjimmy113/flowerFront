import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ItemImportComponent } from './item-import/item-import.component';
import { FlowerImportComponent } from './flower-import/flower-import.component';
import { EventComponent } from "./event/event.component";
import { ItemComponent } from "./item/item.component";
import { FlowerComponent } from "./flower/flower.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  { path: "admin/flower", component: FlowerComponent },
  { path: "admin/item", component: ItemComponent },
  { path: "admin/event", component: EventComponent },
  { path: "admin/flowerImport", component:FlowerImportComponent},
  { path: "admin/itemImport", component:ItemImportComponent},
  { path: "login", component:LoginComponent},
  { path: "", component:HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
