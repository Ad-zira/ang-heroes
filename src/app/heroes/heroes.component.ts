import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
// import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  
  // define a component property named 'heroes' to expose the HEROES array for binding
  heroes:Hero[]=[]

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }
  
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
