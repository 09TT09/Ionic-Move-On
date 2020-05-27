import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string = ""
  password: string = ""
  validatepassword: string = ""

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  
  async register(){
    const { email, password, validatepassword } = this
    if(password !== validatepassword) {
      return console.error("Les champs des mots de passe ne sont pas identiques !")
    }
	try {
      const res = await this.afAuth.createUserWithEmailAndPassword(email, password)
    } catch(error) {
      console.dir(error)
	}
  }

}
