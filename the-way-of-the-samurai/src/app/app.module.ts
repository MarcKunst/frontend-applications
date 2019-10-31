import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeComponent } from './attribute/attribute.component';
import { AttributeDetailComponent } from './attribute-detail/attribute-detail.component';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ImageMapComponent } from './image-map/image-map.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    AttributeDetailComponent,
    ImageMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
