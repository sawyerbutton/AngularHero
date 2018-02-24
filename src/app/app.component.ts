import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material'


export interface Hero {
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

  displayedColumns = ['id','name'];
  dataSource = new MatTableDataSource(HEROES);


  applyFilter(filterValue:string){
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;

  }

}
