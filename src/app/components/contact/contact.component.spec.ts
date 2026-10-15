import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show an email validation error while entering an invalid address', async () => {
    const emailInput = fixture.nativeElement.querySelector('#email') as HTMLInputElement;
    emailInput.value = 'not-an-email';
    emailInput.dispatchEvent(new Event('input'));

    await fixture.whenStable();
    fixture.detectChanges();

    expect(component.setState.user_email).toBe('not-an-email');
    expect(fixture.nativeElement.textContent).toContain('Please enter a valid email address!');
  });
});
