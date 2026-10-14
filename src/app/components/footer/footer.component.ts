import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FooterComponent {

  date = new Date;
  year = this.date.getFullYear();
  email: string = "info@torben-jan-mueller.com"

}
