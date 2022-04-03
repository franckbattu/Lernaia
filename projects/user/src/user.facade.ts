import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./models";
import { UserService } from "./user.service";

@Injectable({
  providedIn: 'root',
  useClass: UserService
})
export abstract class UserFacade {

  /**
   * Get a user from his ID
   * @param userId User ID
   */
  abstract get(userId: string): Observable<User>;
}
