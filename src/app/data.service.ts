import { Injectable } from '@angular/core';
import {Http, HttpModule} from '@angular/http';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  getData(){
    return this._http.get('assets/json/appetizers.json').map((x) => x.json())
  }

}
