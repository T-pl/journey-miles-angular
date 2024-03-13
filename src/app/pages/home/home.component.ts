import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { ContainerComponent } from '../../components/container/container.component';
import { FormCompComponent } from '../../components/form-comp/form-comp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, ContainerComponent, FormCompComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
