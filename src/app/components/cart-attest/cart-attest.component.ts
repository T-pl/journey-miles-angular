import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-cart-attest',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './cart-attest.component.html',
  styleUrl: './cart-attest.component.scss',
})
export class CartAttestComponent {
  longText: string = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}
