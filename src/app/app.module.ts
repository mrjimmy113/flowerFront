import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { FlowerCreateComponent } from './flower-create/flower-create.component';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
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
import { ProductComponent } from './product/product.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { DatePipe } from '@angular/common';
import { TokenInterceptor } from './interceptor/tokenAuth.interceptor';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component';
import { BannerComponent } from './banner/banner.component';
import { AccountSaveComponent } from './account-save/account-save.component';
import { BannerSaveComponent } from './banner-save/banner-save.component';
import { AccountRegComponent } from './account-reg/account-reg.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { OrderShipmentComponent } from './order-shipment/order-shipment.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
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
    ProductComponent,
    ProductCreateComponent,
    ProductEditComponent,
    SearchComponent,
    AccountComponent,
    BannerComponent,
    AccountSaveComponent,
    BannerSaveComponent,
    AccountRegComponent,
    CartComponent,
    ProductDetailComponent,
    OrderShipmentComponent,
    OrderComponent,
    ProfileComponent,
    ForgetPassComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CKEditorModule,
    SlideshowModule,
  ],
  entryComponents: [
    FlowerCreateComponent,
    FlowerUpdateComponent,
    ItemSaveComponent,
    EventSaveComponent,
    FlowerImportNewComponent,
    ItemImportNewComponent,
    ProductCreateComponent,
    ProductEditComponent,
    BannerSaveComponent,
    AccountSaveComponent,
    ProductDetailComponent
  ],
  providers: [DatePipe, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
