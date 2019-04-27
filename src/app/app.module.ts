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
import { FlowerImportComponent } from './flower-import/flower-import.component';
import { FlowerImportNewComponent } from './flower-import-new/flower-import-new.component';
import { ItemImportComponent } from './item-import/item-import.component';
import { ItemImportNewComponent } from './item-import-new/item-import-new.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';


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
    FlowerImportComponent,
    FlowerImportNewComponent,
    ItemImportComponent,
    ItemImportNewComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
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
    FlowerImportNewComponent,
    ItemImportNewComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
