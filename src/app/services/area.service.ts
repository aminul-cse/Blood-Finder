import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Area } from '../interfaces/area';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  apiUrl = environment.apiUrl;

  http = inject(HttpClient)

  constructor() { }

  getAreas() {
    return this.http.get<Area>(this.apiUrl+'/area');
  }

  getAreaById(id: string) {
    return this.http.get<Area>(this.apiUrl+'/area/' + id);
  }

  addArea(name: string) {
    return this.http.post(this.apiUrl+'/area', {
      name: name,
    })
  }

  updateArea(id:string, name: string) {
    return this.http.put(this.apiUrl+'/area/' + id, {
      name: name,
    })
  }

  deleteAreaById(id: string) {
    return this.http.delete(this.apiUrl+'/area/' + id);
  }
}
