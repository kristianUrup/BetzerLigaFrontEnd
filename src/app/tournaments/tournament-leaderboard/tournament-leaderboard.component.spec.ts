import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentLeaderboardComponent } from './tournament-leaderboard.component';

describe('TournamentLeaderboardComponent', () => {
  let component: TournamentLeaderboardComponent;
  let fixture: ComponentFixture<TournamentLeaderboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentLeaderboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
