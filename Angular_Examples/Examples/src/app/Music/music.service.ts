import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { music } from './music.model';

@Injectable()

export class musicService {

  private _musicUrl= 'https://ngmusicdb.herokuapp.com/api/getMusic';

  constructor(private _http: Http) {}

  getMusic(): Observable<music[]> {
    return this._http.get(this._musicUrl)
      .map((response)=><music[]> response.json())
      .catch(this.handleError)
  }

  private handleError(error: Response) {
    return Observable.throw(error.json() || "Server Error");
  }

 }
