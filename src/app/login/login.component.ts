import { Component, OnInit, Injectable, NgZone } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { User } from 'src/app/services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  state = LoginCompState.LOGIN;
  userData: any; // Save logged in user data
  constructor(    public afs: AngularFirestore,
  public afAuth: AngularFireAuth,
  public router: Router,
  public ngZone: NgZone )
   {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
   }

  ngOnInit(): void {
  }

  onForgotPasswordClick(){
    this.state = LoginCompState.FORGOT_PASSWORD;
}


onLoginClick(){
    this.state = LoginCompState.LOGIN;
}


isLoginState(){
  return this.state == LoginCompState.LOGIN;}
  isForgotPasswordState(){
  return this.state == LoginCompState.FORGOT_PASSWORD;}

  getStateText(){
    switch(this.state){
    case LoginCompState.LOGIN:
    return "Login";
    case LoginCompState.FORGOT_PASSWORD:
    return "Forgot Password";
    }
  }

    SignIn(email: string, password: string) {
      return this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.ngZone.run(() => {
            this.router.navigate(['profile']);
            window.alert("Login Successful");
          });
          this.SetUserData(result.user);
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }


    SetUserData(user: any) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(
        `users/${user.uid}`
      );
      const userData: User = {
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified
      };
      return userRef.set(userData, {
        merge: true,
      });
    }

    ForgotPassword(passwordResetEmail: string) {
      return this.afAuth
        .sendPasswordResetEmail(passwordResetEmail)
        .then(() => {
          window.alert('Password reset email sent, check your inbox.');
        })
        .catch((error) => {
          window.alert(error);
        });
    }

}

export enum LoginCompState {
  LOGIN,
  FORGOT_PASSWORD
}

