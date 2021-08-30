import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchBracketComponent } from './match-bracket.component';

describe('MatchBracketComponent', () => {
  let component: MatchBracketComponent;
  let fixture: ComponentFixture<MatchBracketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchBracketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchBracketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
