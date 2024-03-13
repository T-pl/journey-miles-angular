import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAttestComponent } from './cart-attest.component';

describe('CartAttestComponent', () => {
  let component: CartAttestComponent;
  let fixture: ComponentFixture<CartAttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartAttestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartAttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
