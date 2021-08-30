import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AssignJoueurComponent } from './assign-joueur/assign-joueur.component';
import { ListJoueurComponent } from './list-joueur/list-joueur.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ListEquipeComponent } from './equipe/list-equipe/list-equipe.component';
import { MatchBracketComponent } from './match-bracket/match-bracket.component';

export const routes: Routes = [
  { path: 'list-joueur', component: ListJoueurComponent, pathMatch: 'full' },
  { path: 'assign-joueur/:id', component: AssignJoueurComponent, pathMatch: 'full' },
  { path: 'equipe', component: ListEquipeComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    AssignJoueurComponent,
    ListJoueurComponent,
    NavigationComponent,
    ListEquipeComponent,
    MatchBracketComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
