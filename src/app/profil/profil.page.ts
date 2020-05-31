import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-profil',
	templateUrl: './profil.page.html',
	styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

	constructor(
		public router: Router,
	) { }

	ngOnInit() {
	}

}
