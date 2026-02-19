import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact-page',
  imports: [ReactiveFormsModule, AnimateOnScrollDirective],
  templateUrl: './contact-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent {
  // Fix: Explicitly type `fb` to resolve `inject(FormBuilder)` being inferred as `unknown`.
  private fb: FormBuilder = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  isSubmitted = false;

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      // Here you would typically send the data to a server
      alert('Thank you for your message! We will get back to you soon.');
      this.contactForm.reset();
      this.isSubmitted = false;
    }
  }
}
