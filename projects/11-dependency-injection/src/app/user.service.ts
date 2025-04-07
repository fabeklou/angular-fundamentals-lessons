import { Injectable } from '@angular/core';
import { userList, User } from './data';


@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly userData: User[] = userList;

  constructor() { }

  getUserData(): Promise<User[]> {
    /**
     * return new Promise((resolve) => {
     *    resolve(this.userData);
     * });
     */
    return Promise.resolve(this.userData)
  }
}
