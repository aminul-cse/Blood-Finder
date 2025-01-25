import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Donor } from '../interfaces/donor';

@Injectable({
  providedIn: 'root'
})
export class DonorService {
  http = inject(HttpClient)
  apiUrl = environment.apiUrl

  constructor() { }

  getAllDonors() {
    return this.http.get<Donor>(this.apiUrl+'/donor');
  }

  getDonorById(id: string){
    return this.http.get<Donor>(this.apiUrl+'/donor/'+id);
  }

  addDonor(model : Donor) {
    return this.http.post<Donor>(this.apiUrl+'/donor', model);
  }

  updateDonor(id: string, model:Donor) {
    return this.http.put<Donor>(this.apiUrl+'/donor/'+id, model);
  }

  deleteDonor(id: string) {
    return this.http.delete<Donor>(this.apiUrl+'/donor/'+id);
  }
}
