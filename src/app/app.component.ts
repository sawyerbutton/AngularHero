import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    public selectedHero : Hero;
    //we do not need to define the type of heroes, because the type can be read from the HEROES
    public heroes : Hero[];

    //function area

    onSelect(hero : Hero) : void {
      this.selectedHero = hero;
    }
  }
