import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

	email: string = "";
	password: string = "";

	constructor(
		public afAuth: AngularFireAuth,
		public alert: AlertController,
		public router: Router
	) { }

	ngOnInit() {
	}

	async login(){
		const { email, password } = this;
		try {
			const res = await this.afAuth.signInWithEmailAndPassword(email, password);
			if (res) {
				console.log("Vous êtes connecté !");
				this.router.navigate(['/compte']);
			}
		} catch(err) {
			console.dir(err);			
			switch(err.code){
				case "auth/invalid-email" :
					this.showAlert("Erreur!", "Email Invalide");
					break;
				case "auth/user-not-found" :
					this.showAlert("Erreur!", "Utilisateur Inconnu");
					break;
				case "auth/wrong-password" :
					this.showAlert("Erreur!", "Mot de passe ou email invalide");
					break;
				default :
					this.showAlert("Erreur!", err.message);
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
