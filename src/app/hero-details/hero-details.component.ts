import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero | undefined

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero():void {
    // const id = Number(this.route.snapshot.paramMap.get('id'))
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10)
    this.heroService.getHero(id).subscribe(hero => this.hero = hero)
  }

  goBack():void {
    this.location.back()
  }

  save():void {
    if(this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack())
    }
  }

}
