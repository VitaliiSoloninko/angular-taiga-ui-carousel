import { Component } from '@angular/core';
import { TuiRoot } from '@taiga-ui/core';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-root',
  imports: [TuiRoot, CarouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-taiga-ui-carousel';
}
