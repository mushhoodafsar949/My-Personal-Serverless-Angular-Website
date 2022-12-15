import { Component, OnInit, Injectable, NgZone  } from '@angular/core';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { User } from 'src/app/services/user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-otherbloggerssignup',
  templateUrl: './bloggerssignup.component.html',
  styleUrls: ['./bloggerssignup.component.css']
})

export class BloggerssignupComponent implements OnInit {
  userData: any; // Save logged in user data
  public static userEmail:any;
  message:any;
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('Author', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('Author')!);
      } else {
        localStorage.setItem('Author', 'null');
        JSON.parse(localStorage.getItem('Author')!);
      }
    });
  }
  ngOnInit(): void {
  }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    console.log(this.isLoggedIn);
    if(this.isLoggedIn != false)
    {
      return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          window.alert("Login Successful");
          this.router.navigate(['blogauthorsprofile', { message: email}]);
        });
        BloggerssignupComponent.userEmail= result.user?.email;
        console.log(BloggerssignupComponent.userEmail);
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
    }
    else{
      return console.error('fail to login Email is not verified!');
    }

  }
  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {

        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        window.alert('Check your mail box');
      });
  }
  // Reset Forggot password
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
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('Author')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      if (res) {
        console.log("ok");

      }
    });
  }
  // Auth logic to run auth providers
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['blogauthorsprofile', { message: result.user?.email}]);

        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }


  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `Author/${user.email}`
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

}
