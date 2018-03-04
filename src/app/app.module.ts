import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
