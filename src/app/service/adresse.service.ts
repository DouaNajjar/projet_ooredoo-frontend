import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Governorate } from '../classes/governorate';
import { HttpClient } from '@angular/common/http';

const URL="http://localhost:3000/governorate";

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  readonly http:HttpClient=inject(HttpClient)
  constructor() { }

  getGovernorates(): Observable<Governorate[]> {
    return this.http.get<Governorate[]>(URL);}

    getCityByGovernorate(governorateName: string): Observable<string[]> {
      return this.http.get<Governorate[]>(URL).pipe(
        map(governorates => {
          const selectedGovernorate = governorates.find(g => g.name.toLowerCase() === governorateName.toLowerCase());
          return selectedGovernorate ? selectedGovernorate.cities : [];
        })
      );
    }
}

  
