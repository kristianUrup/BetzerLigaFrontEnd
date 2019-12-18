import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentUpdateComponent } from './tournament-update.component';

describe('TournamentUpdateComponent', () => {
  let component: TournamentUpdateComponent;
  let fixture: ComponentFixture<TournamentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
