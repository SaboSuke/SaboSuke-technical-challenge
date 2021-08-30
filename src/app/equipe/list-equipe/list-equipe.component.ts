import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../../services/equipe.service';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {

  constructor(
    private e_Service: EquipeService,
  ) { }

  equipe: any;
  ngOnInit(): void {
    this.e_Service.fetchAllNotInMatch().subscribe(
      (data: any) => this.equipe = data,
      (error: any) => console.log(error)
    );
  }

}
