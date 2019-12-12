import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../../Shared/services/authentication.service';
import {Match} from '../../Shared/Match.model';
import {environment} from '../../../environments/environment';
import {UserMatch} from '../../Shared/UserMatch.model';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserMatchService {

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {
  }

  apiUrl = environment.apiUrl;

  addUserMatch(userMatches: UserMatch[]) {
    this.http.post<Match>(this.apiUrl + 'Matches/', userMatches);
  }

  getUserMatches(userId: number, roundId: number): Observable<UserMatch[]> {
    return this.http.get<UserMatch[]>(this.apiUrl + 'userMatches?userId=' + userId + '&roundId=' + roundId);
  }
}