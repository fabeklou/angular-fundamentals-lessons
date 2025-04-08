import { Component, inject } from '@angular/core';

import { UserService } from './user.service';
import { User } from './data';
import { UserInfoComponent } from './user-info/user-info.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserInfoComponent],
  template: `
    <h1>User Listing</h1>
    @for (userData of userDataList; track userData.id) {
      <app-user-info [user]='userData' />
    }
    @empty {
      <p class="error">No User Found: 🥺</p>
    }
  `,
  styles: `
    .error {
      color: red;
    }
  `
})
export class AppComponent {
  constructor() {
    this.useServiceToFetchUserData();
  }

  /** implements OnInit before */
  // async ngOnInit(): Promise<void> {
  //   const data = await this.userService.getUserData();
  //   this.userDataList = data;
  // }

  userDataList: Array<User> = [];
  userService = inject(UserService);

  useServiceToFetchUserData() {
    this.userService.getUserData().then((data) => {
      this.userDataList = data;
    }).catch((error) => {
      this.userDataList = [];
    })
  }
}
