import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

@Injectable()
export class LoginService{

  token:string

  constructor(private router:Router){}

  public login(email:string,password:string){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(
        (userCredential) => {

          userCredential.user.getIdToken().then(
            token => {
              console.log(token)
              this.token = token
              this.router.navigate(['/'])
            }
          )
        }
      )
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  public getIdToken():string{
    return this.token
  }

}
