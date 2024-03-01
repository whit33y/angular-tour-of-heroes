import { UpperCasePipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Hero } from '../../hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgIf],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
