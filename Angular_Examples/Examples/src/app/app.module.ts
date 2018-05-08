import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { studentComponent } from './student.component';
import { MoviesComponent } from './Movies/movies.component';

import { SearchFilter } from './Movies/movies-filter.pipe';
import { starComponent } from './Shared/star.component';

import { musicComponent } from './Music/music.component';
import { musicService } from './Music/music.service';

@NgModule({

  imports: [BrowserModule, HttpClientModule, FormsModule, HttpModule],

  declarations: [AppComponent, MoviesComponent, SearchFilter, starComponent, musicComponent],

  bootstrap: [AppComponent],

  providers: [musicService]

})

export class AppModule { }
