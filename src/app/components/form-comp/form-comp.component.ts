import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-comp',
  standalone: true,
  imports: [CardComponent, MatButtonToggleModule, MatIconModule],
  templateUrl: './form-comp.component.html',
  styleUrl: './form-comp.component.scss',
})
export class FormCompComponent {}
