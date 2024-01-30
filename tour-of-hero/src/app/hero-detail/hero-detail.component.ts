import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  @Input() hero?: Hero;

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   if (this.hero) {
  //     this.heroService.updateHero(this.hero)
  //       .subscribe(() => this.goBack());
  //   }
  // }
}

// export class HeroDetailComponent {
//     @Input() hero?: Hero;
// }