import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Exchibit } from '../domain/exchibit';

@Injectable()
export class ExchibitService {

    constructor(private http: HttpClient) { }

    getExchibit() {
    return this.http.get<any>('assets/layout/data/cars-small.json')
      .toPromise()
      .then(res => <Exchibit[]>res.data)
      .then(data => { return data; });
    }
}
