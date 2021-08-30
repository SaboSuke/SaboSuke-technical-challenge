import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as e } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  constructor(private http: HttpClient) { }

  fetchAll() {
    return this.http.get(e.URL+'joueur/');
  }

  fetchAllNotAssigned() {
    return this.http.get(e.URL+'joueur/not-assigned');
  }

  assignJoueurrToEquip(equipe_id: Number, joueur_id: Number) {
    return this.http.post(e.URL+'joueur/assign', {
      equipe_id, joueur_id
    });
  }
}
