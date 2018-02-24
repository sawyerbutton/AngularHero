import { Component } from '@angular/core';

export class Hero {
  id: Number;
  name: String;
}

const HEROES: Hero[] = [
  {id:1,name:'A'},
  {id:2,name:'B'},
  {id:3,name:'C'},
  {id:4,name:'D'},
  {id:5,name:'E'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  heroes = HEROES;

}
