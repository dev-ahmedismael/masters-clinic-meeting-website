import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { BookNowComponent } from '../components/book-now/book-now.component';
import { ReservationInfoComponent } from '../components/reservation-info/reservation-info.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'book-now', component: BookNowComponent },
  { path: 'reservation-info', component: ReservationInfoComponent },
];
