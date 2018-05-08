import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { music } from './music.model';
import {musicService } from './music.service';

@Component({
  selector: 'music-comp',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']

})


export class musicComponent {
  errorMessage;
  musicData: music[] = [];
 // arrayList: any;
  //constructor(private http: HttpClient) { }

  //ngOnInit(): void {
  //  this.http.get('https://ngmusicdb.herokuapp.com/api/getMusic').subscribe(data => {
  //    this.arrayList = data;
  //    this.musicData = this.arrayList;
  //  });
  //}

  constructor(private _musicService: musicService) {

  }

  ngOnInit(): void {
    this._musicService.getMusic()
      .subscribe((data) => this.musicData = data,
      (error)=>this.errorMessage)
  }

}
