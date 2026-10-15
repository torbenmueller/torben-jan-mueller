import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [FormsModule]
})
export class ContactComponent {
  isSending: boolean = false;
  toast = signal<{ type: 'success' | 'error'; text: string } | null>(null);
  private toastTimer?: ReturnType<typeof setTimeout>;

  private showToast(type: 'success' | 'error', text: string) {
    clearTimeout(this.toastTimer);
    this.toast.set({ type, text });
    this.toastTimer = setTimeout(() => this.toast.set(null), 10000);
  }

  setState = {
    user_name: '',
    user_email: '',
    message: '',
  };

  sendEmail(form: NgForm) {
    form.form.markAllAsTouched();
    if (form.invalid) {
      return;
    }

    this.isSending = true;
    emailjs
      .send('service_zndnhwo', 'template_h3g50hl', this.setState, {
        publicKey: 'sQs2BMQfNl23A3NwY',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.showToast('success', `Message successfully sent to ${this.setState.user_email}.`);
          this.resetForm(form);
          this.isSending = false;
        },
        (err) => {
          console.log('FAILED...', err);
          this.showToast('error', 'Failed to send message.');
          this.isSending = false;
        }
      );
  }

  resetForm(form: NgForm) {
    this.setState = { user_name: '', user_email: '', message: '' };
    form.resetForm(this.setState);
  }

}
