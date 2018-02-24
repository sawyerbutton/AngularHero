import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatTableModule,MatFormFieldModule,MatInputModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
