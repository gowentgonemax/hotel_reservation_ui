import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './service/hotels/hotels.component';
import { ApartmentsComponent } from './service/apartments/apartments.component';
import { TranportationComponent } from './service/tranportation/tranportation.component';
import { ResturantComponent } from './service/resturant/resturant.component';
import { CareerComponent } from './career/career/career.component';
import { AboutComponent } from './about/about/about.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { ContactComponent } from './contact/contact/contact.component';
import { HomeComponent } from './home/home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminComponent } from './admin/admin/admin.component';
import { ReservationsComponent } from './admin/reservations/reservations.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    ApartmentsComponent,
    TranportationComponent,
    ResturantComponent,
    CareerComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    HomeComponent,
    AdminComponent,
    ReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCardModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
