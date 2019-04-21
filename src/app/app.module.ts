import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { FlowerCreateComponent } from './flower-create/flower-create.component';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FlowerComponent } from './flower/flower.component';
import { SafeURLPipe } from './pipe/safe-url.pipe';
import { FlowerDetailComponent } from './flower-detail/flower-detail.component';
import { FlowerUpdateComponent } from './flower-update/flower-update.component';
import { ItemComponent } from './item/item.component';
import { ItemSaveComponent } from './item-save/item-save.component';
import { EventComponent } from './event/event.component';
import { EventSaveComponent } from './event-save/event-save.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    FlowerCreateComponent,
    FlowerComponent,
    SafeURLPipe,
    FlowerDetailComponent,
    FlowerUpdateComponent,
    ItemComponent,
    ItemSaveComponent,
    EventComponent,
    EventSaveComponent,
    AdminMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  entryComponents: [
    FlowerCreateComponent,
    FlowerUpdateComponent,
    ItemSaveComponent,
    EventSaveComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
