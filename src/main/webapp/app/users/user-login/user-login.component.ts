import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../core/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'jhi-user-login',
  templateUrl: './user-login.component.html',
  styles: []
})

export class UserLoginComponent implements OnInit {

  constructor(public auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  private afterSignIn(): void {
    // Do after login stuff here, such router redirects, toast messages, etc.
    this.router.navigate(['/']);
  }

  signInWithGoogle(): void {
    // this.auth.googleLogin()
    //   .then(() => this.afterSignIn());
  }

}
