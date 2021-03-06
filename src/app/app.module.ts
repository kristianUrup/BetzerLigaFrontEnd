import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { RoundsListComponent } from './rounds/rounds-list/rounds-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserService} from './users/shared/user.service';
import { NavbarComponent } from './Shared/Navbar/navbar.component';
import { TournamentComponent } from './tournaments/tournament/tournament.component';
import { TournamentLeaderboardComponent } from './tournaments/tournament-leaderboard/tournament-leaderboard.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthGuard} from './authGuard/auth.guard';
import {AuthenticationService} from './Shared/services/authentication.service';
import { RoundsDetailsComponent } from './rounds/rounds-details/rounds-details.component';
import { RoundAddComponent } from './rounds/round-add/round-add.component';
import { RoundUpdateComponent } from './rounds/round-update/round-update.component';
import { UserRoundsListComponent } from './rounds/user-rounds-list/user-rounds-list.component';
import { HomeComponent } from './home/home.component';
import { RulesComponent } from './rules/rules.component';
import { UserTipsComponent } from './matches/user-tips/user-tips.component';
import { MatchesAddComponent } from './matches/matches-add/matches-add.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TournamentAddComponent } from './tournaments/tournament-add/tournament-add.component';
import { TournamentListComponent } from './tournaments/tournament-list/tournament-list.component';
import {HttpErrorInterceptor} from './interceptors/http-error.interceptor';
import {BsDatepickerModule} from 'ngx-bootstrap';
import { RoundMatchComponent } from './round-match/round-match.component';
import { UserTipsUpdateComponent } from './matches/user-tips-update/user-tips-update.component';
import { UserTipsListComponent } from './matches/user-tips-list/user-tips-list.component';
import { TournamentUpdateComponent } from './tournaments/tournament-update/tournament-update.component';
import {UiSwitchModule} from 'ngx-ui-switch';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    NavbarComponent,
    RoundsListComponent,
    TournamentComponent,
    TournamentLeaderboardComponent,
    LoginComponent,
    NavbarComponent,
    RoundsDetailsComponent,
    RoundAddComponent,
    RoundUpdateComponent,
    UserRoundsListComponent,
    HomeComponent,
    RulesComponent,
    UserTipsComponent,
    MatchesAddComponent,
    TournamentAddComponent,
    TournamentListComponent,
    RoundMatchComponent,
    UserTipsUpdateComponent,
    UserTipsListComponent,
    TournamentUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    UiSwitchModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    TournamentComponent,
    TournamentLeaderboardComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
