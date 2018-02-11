import { Injectable } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { } from 'angularfire2';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  // authState: FirebaseAuthState = null;

  // inject
  construstor(afa: AngularFireAuth) {
    // afa.auth.signInWithPopup()
  }

    // Returns true if user is logged in
    // get authenticated(): boolean {
    //   return this.authState !== null;
    // }

    // get currentUser(): any {
    //   return this.authenticated ? this.authState.auth : null;
    // }
    // // Returns current user UID
    // get currentUserId(): string {
    //   return this.authenticated ? this.authState.uid : '';
    // }
    //
    // googleLogin(): firebase.Promise<FirebaseAuthState> {
    //     return this.socialSignIn(AuthProviders.Google);
    // }
    //
    signOut(): void {
    }
    //
    // updateUserData(): void {
    // }
    //
    // private socialSignIn(provider: number): firebase.Promise<FirebaseAuthState> {
    //   return this.af.auth.login({provider, method: AuthMethods.Popup})
    //     .then(() => this.updateUserData() )
    //     .catch(error => console.log(error));
    // }
}
