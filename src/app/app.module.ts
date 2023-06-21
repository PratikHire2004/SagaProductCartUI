import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ProudctDetailsComponent } from './components/proudct-details/proudct-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProudctDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
