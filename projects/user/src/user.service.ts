import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models';
import { UserFacade } from './user.facade';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserFacade {

  constructor(
    protected http: HttpClient
  ) {}

  public get(userId: string): Observable<User> {
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
}
