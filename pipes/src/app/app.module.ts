import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {cubePipe} from '../app/app.cube';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipecompComponent } from './pipecomp/pipecomp.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    PipecompComponent,
    cubePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
