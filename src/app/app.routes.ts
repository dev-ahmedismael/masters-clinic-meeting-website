import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { BookNowComponent } from '../components/book-now/book-now.component';
import { ReservationInfoComponent } from '../components/reservation-info/reservation-info.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    title: 'عيادات ماسترز كلينيك',
  },
  { path: 'contact-us', component: ContactUsComponent, title: 'اتصل بنا' },
  { path: 'book-now', component: BookNowComponent, title: 'احجز الآن' },
  {
    path: 'reservation-info',
    component: ReservationInfoComponent,
    title: 'عيادات ماسترز كلينيك',
  },
];
