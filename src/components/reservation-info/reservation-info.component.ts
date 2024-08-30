import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-reservation-info',
  standalone: true,
  imports: [NgOptimizedImage, FontAwesomeModule],
  templateUrl: './reservation-info.component.html',
  styleUrl: './reservation-info.component.scss',
})
export class ReservationInfoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  copyIcon = faCopy;

  meetingUrl = '';
  copyMessage = 'حفظ';

  copyToClipboard() {
    navigator.clipboard.writeText(this.meetingUrl);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.meetingUrl = params['meetingUrl'];
    });
  }
}
