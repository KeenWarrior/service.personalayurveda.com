import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../core/auth.service";

@Component({
  selector: 'jhi-user-profile',
  templateUrl: './user-profile.component.html',
  styles: []
})
export class UserProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  logout() {
    this.auth.signOut();
  }

  ngOnInit() {
  }

}
