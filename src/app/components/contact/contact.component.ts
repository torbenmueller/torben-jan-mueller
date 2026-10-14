import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
/* import { ToastrService } from 'ngx-toastr'; */

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    standalone: false
})
export class ContactComponent {
  /* constructor(private toastr: ToastrService) {} */

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

    emailjs
      .send('service_zndnhwo', 'template_h3g50hl', this.setState, {
        publicKey: 'sQs2BMQfNl23A3NwY',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          console.log('response:', response);
          /* this.toastr.success('Message successfully sent to .'); */
          this.resetForm(form);
        },
        (err) => {
          console.log('FAILED...', err);
          /* this.toastr.error('Failed to send message.'); */
        }
      );
  }

  resetForm(form: NgForm) {
    this.setState = { user_name: '', user_email: '', message: '' };
    form.resetForm(this.setState);
  }

}
