import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFaceAngry, faX } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  socialMediaIcons = [
    {
      id: 1,
      icon: faFacebook,
      url: 'https://www.facebook.com/masters.clinicn/',
    },
    { id: 2, icon: faX, url: 'https://x.com/masters_clinic' },
    { id: 3, icon: faTiktok, url: 'https://www.tiktok.com/@mastersclinics' },
    {
      id: 4,
      icon: faSnapchat,
      url: 'https://www.snapchat.com/add/masters.clinic',
    },
    {
      id: 5,
      icon: faYoutube,
      url: 'https://www.youtube.com/channel/UCAy80cOsDrVqfQLM0HNP_sw',
    },
    {
      id: 6,
      icon: faInstagram,
      url: 'https://www.instagram.com/masters.clinic/',
    },
  ];
}
