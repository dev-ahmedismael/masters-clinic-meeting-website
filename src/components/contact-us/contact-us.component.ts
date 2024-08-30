import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorMessageComponent } from '../../shared/error-message/error-message.component';
import { MessageService } from '../../services/message.service';
import { SuccessMessageComponent } from '../../shared/success-message/success-message.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    ErrorMessageComponent,
    SuccessMessageComponent,
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  constructor(
    private fb: FormBuilder,
    private messagesService: MessageService
  ) {}

  branches: any = [];
  departments: any = [];
  doctors: any = [];

  form!: FormGroup;

  successMessage: string | null = null;
  errorMessage: string | null = null;

  submit() {
    this.messagesService.send(this.form.value).subscribe({
      next: (res: any) => {
        this.successMessage = res.message;
        setTimeout(() => {
          this.successMessage = null;
        }, 3000);
      },
      error: (err: any) => {
        this.errorMessage =
          'تعذر الإرسال في الوقت الحالي، يرجى المحاولة مرة أخرى.';

        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      },
    });
  }

  ngOnInit(): void {
    // Handle Form
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
}
