import { Component } from '@angular/core';
import { CardSearchComponent } from '../card-search/card-search.component';
import { CartAttestComponent } from '../cart-attest/cart-attest.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CardSearchComponent, CartAttestComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {}
