import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input()
  picture: string = '';
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  @Input()
  id: string = '';
}
