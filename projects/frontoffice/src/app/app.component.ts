import { Component, OnInit } from '@angular/core';
import { User, UserFacade } from '@lernaia/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontoffice';
  user$: Observable<User>;

  constructor(
    protected userFacade: UserFacade,
  ) {}

  ngOnInit(): void {
    this.user$ = this.userFacade.get("1");
  }
}
