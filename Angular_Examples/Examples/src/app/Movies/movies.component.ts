import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { MoviesData } from './movies.model';

@Component({

  selector: 'movies-comp',
  templateUrl: './movies.component.html'

})


export class MoviesComponent {

  title: String = "List Of Movies :-";
  showImage: boolean = false;
  selectedName: string;
  showList: boolean = true;
  showGrid: boolean = false;
  showMusic: boolean = false;

  constructor(private http: HttpClient) {

  }
  arrayList: any;
  Movies: MoviesData[]=[];
  ngOnInit(): void {
    this.http.get('https://ngmovies.herokuapp.com/api/getMovies').subscribe(data => {
      this.arrayList = data;
      this.Movies=this.arrayList;
    });
  }


  OnDataRecieve(value:String): void {
    this.title = value;
  }

  toggleImg(): void {
    this.showImage = !this.showImage;
  }

  toggleView(type): void {
    if (type == 'list') {
      this.showList = !this.showList;
      if (this.showGrid == true) {
        this.showGrid = !this.showGrid;
      }
      if (this.showMusic == true) {
        this.showMusic = !this.showMusic;
      }

    } else if (type == 'grid') {
      this.showGrid = !this.showGrid;
      if (this.showList == true) {
        this.showList = !this.showList;
      }
      if (this.showMusic == true) {
        this.showMusic = !this.showMusic;
      }
    } else {
      this.showMusic = !this.showMusic;
      
      if (this.showList == true) {
        this.showList = !this.showList;
      }
      if (this.showGrid == true) {
        this.showGrid = !this.showGrid;
      }
    }
  }

}
