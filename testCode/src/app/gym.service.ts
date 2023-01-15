import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gym } from './home/gym';


@Injectable({
  providedIn: 'root'
})
export class GymService {

  constructor( private http:HttpClient) 

  { }
  getGym(id: string) {
    return this.http.get<gym>('https://schema.postman.com/json/collection/v2.0.0/collection.json'+id);
  }

  getGyms(){
    return this.http.get<gym[]>('https://schema.postman.com/json/collection/v2.0.0/collection.json');
  }
}
