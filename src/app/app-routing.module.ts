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
  { path: "flower", component: FlowerComponent },
  { path: "item", component: ItemComponent },
  { path: "event", component: EventComponent },
  { path: "flowerImport", component:FlowerImportComponent},
  { path:"itemImport", component:ItemImportComponent},
  { path:"login", component:LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
