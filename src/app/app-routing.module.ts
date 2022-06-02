import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ReservationsComponent } from './admin/reservations/reservations.component';
import { CareerComponent } from './career/career/career.component';
import { ContactComponent } from './contact/contact/contact.component';
import { GalleryComponent } from './gallery/gallery/gallery.component';
import { HomeComponent } from './home/home/home.component';
import { ApartmentsComponent } from './service/apartments/apartments.component';
import { HotelsComponent } from './service/hotels/hotels.component';
import { ResturantComponent } from './service/resturant/resturant.component';
import { TranportationComponent } from './service/tranportation/tranportation.component';

const routes: Routes = [
  {path:'hotels',component:HotelsComponent},
  {path:'apartments',component:ApartmentsComponent},
  {path:'transportation',component:TranportationComponent},
  {path:'resturants',component:ResturantComponent},
  {path:'about',component:AboutComponent},
  {path:'career',component:CareerComponent},
  {path:'contact',component:ContactComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'reservations',component:ReservationsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
