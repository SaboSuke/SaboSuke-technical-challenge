import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignJoueurComponent } from './assign-joueur.component';

describe('AssignJoueurComponent', () => {
  let component: AssignJoueurComponent;
  let fixture: ComponentFixture<AssignJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
