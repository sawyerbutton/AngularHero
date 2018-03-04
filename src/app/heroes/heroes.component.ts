import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
import { HeroService} from '../hero.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  public selectedHero : Hero;
  //we do not need to define the type of heroes, because the type can be read from the HEROES
  public heroes : Hero[];
  //function area
  constructor(
    private  heroService: HeroService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
