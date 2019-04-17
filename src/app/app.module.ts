import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlowerCreateComponent } from './flower-create/flower-create.component';
import { FlowerComponent } from './service/flower/flower.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowerCreateComponent,
    FlowerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
