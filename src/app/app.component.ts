import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { register } from 'swiper/element/bundle';
import { HomeComponent } from '../components/home/home.component';
import { NgOptimizedImage } from '@angular/common';
import { NavbarComponent } from '../layouts/navbar/navbar.component';

register();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FontAwesomeModule,
    HomeComponent,
    NgOptimizedImage,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'masters-clinic-website';
}
