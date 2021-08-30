import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as e } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private http: HttpClient) { }

  fetchAll() {
    return this.http.get(e.URL+'equipe/');
  }
  
  fetchAllNotInMatch() {
    return this.http.get(e.URL+'equipe/not-in-match');
  }
}
