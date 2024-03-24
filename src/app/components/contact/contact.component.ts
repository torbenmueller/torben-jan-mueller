import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {

  setState = {
    user_name: '',
    user_email: '',
    message: '',
  };

  sendEmail() {
    emailjs
      .send('service_nynclbs', 'template_h3g50hl', this.setState, {
        publicKey: 'sQs2BMQfNl23A3NwY',
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert("Message Sent.");
          this.resetForm();
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  }

  resetForm() {
    this.setState = { user_name: '', user_email: '', message: '' };
  }

}
