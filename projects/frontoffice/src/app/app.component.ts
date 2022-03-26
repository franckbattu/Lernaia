import { Component, OnInit } from '@angular/core';
import { UserService } from '@lernaia/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontoffice';
  user$: Observable<string>;

  constructor(
    protected userService: UserService,
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.get();
  }
}
