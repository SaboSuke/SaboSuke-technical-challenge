import { Component, OnInit } from '@angular/core';
import { JoueurService } from '../services/joueur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-joueur',
  templateUrl: './list-joueur.component.html',
  styleUrls: ['./list-joueur.component.css']
})
export class ListJoueurComponent implements OnInit {

  constructor(
    private j_Service: JoueurService,
    private router: Router
  ) { }

  unAssignedJoueur: any = [];

  ngOnInit(): void {
    this.j_Service.fetchAllNotAssigned().subscribe(
      (data: any) => {
        this.unAssignedJoueur = data.result
      },
      error => console.log(error)
    );
  }

  toAssign(id: any) {
    this.router.navigateByUrl('/assign-joueur/' + id);
  }

}
