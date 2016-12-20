import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WidgetsService {
  private url = 'api/widgets';

  constructor (private http: Http) {}

  getWidgets() {
    return this.http.get(this.url)
      .map(res=> res.json())
  }
}

