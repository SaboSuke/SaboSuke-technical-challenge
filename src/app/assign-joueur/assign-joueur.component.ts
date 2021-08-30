import { Component, OnInit } from '@angular/core';
import { JoueurService } from '../services/joueur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipeService } from '../services/equipe.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-assign-joueur',
  templateUrl: './assign-joueur.component.html',
  styleUrls: ['./assign-joueur.component.css']
})
export class AssignJoueurComponent implements OnInit {

  constructor(
    private j_Service: JoueurService,
    private e_Service: EquipeService,
    private router: Router,
    private location: Location,
    private _Activatedroute: ActivatedRoute
  ) { }
  
  equipe: any;
  id: any;
  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");

    this.e_Service.fetchAll().subscribe(
      (data: any) => this.equipe = data,
      error => console.log(error)
    )
  }

  back() {
    this.location.back();
  }

  assignEquipe(id: any) {
    this.j_Service.assignJoueurrToEquip(id, this.id).subscribe(
      data => {
        alert("Joueur assigned!");
        this.router.navigateByUrl('/list-joueur');
      },
      error => console.log(error)
    );
  }

}
