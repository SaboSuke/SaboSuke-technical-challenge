import { Component, OnInit } from '@angular/core';
import { MatchService } from '../services/match.service';

@Component({
  selector: 'app-match-bracket',
  templateUrl: './match-bracket.component.html',
  styleUrls: ['./match-bracket.component.css']
})
export class MatchBracketComponent implements OnInit {

  constructor(
    private m_Service: MatchService,
  ) { }

  matches: any = [];
  ngOnInit(): void {
    this.m_Service.fetchAll().subscribe(
      (data: any) => {
        console.log(data)
        let first = data.result[0];
        let second = data.result[1];
        for (let i = 0; i < first.length; i++){
          this.matches.push({
            e1: first[i].e_label,
            e2: second[i].e_label
          });
        }
      },
      error => console.log(error)
    );
  }

}
