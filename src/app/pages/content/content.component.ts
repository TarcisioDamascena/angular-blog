import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { fakeData } from '../../data/fakeData';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  picture: string = '';
  title: string = '';
  description: string = '';

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'));

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = fakeData.filter((article) => article.id == id)[0];

    this.picture = result.picture
    this.title = result.title
    this.description = result.description
  }
}
