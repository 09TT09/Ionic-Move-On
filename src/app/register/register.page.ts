import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.page.html',
	styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

	email: string = "";
	password: string = "";
	validatepassword: string = "";

	constructor(
		public afAuth: AngularFireAuth,
		public alert: AlertController,
		public router: Router
	) { }

	ngOnInit() {
	}
  
	async register(){
		const { email, password, validatepassword } = this;
		try {
			if(password === validatepassword) {
				const res = await this.afAuth.createUserWithEmailAndPassword(email, password);
				this.router.navigate(['/map']);
			} else {
				this.showAlert("Erreur!", "les mots de passe ne correspondent pas !")
				//return console.error("Les champs des mots de passe ne sont pas identiques !");
			}
		} catch(error) {
			console.dir(error);
			switch(error.code){
				case "auth/invalid-email" :
					this.showAlert("Erreur!", "Email Invalide");
					break;
				case "auth/weak-password" :
					this.showAlert("Erreur!", "Votre mot de passe doit avoir au minimun 6 caractères");
					break;
				case "auth/wrong-password" :
					this.showAlert("Erreur!", "Mot de passe ou email invalide");
					break;
				default :
					this.showAlert("Erreur!", error.message);
			}
		}
	}
	
	async showAlert(header: string, message: string){
		const alert = await this.alert.create({
			header,
			message,
			buttons: ["Ok"]
		})
		await alert.present()
	}
}
