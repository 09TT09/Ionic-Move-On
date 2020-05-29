import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Animation, AnimationController } from '@ionic/angular';

@Component({
	selector: 'app-start',
	templateUrl: './start.page.html',
	styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

	constructor(
		public router: Router,
		//private animationCtrl: AnimationController
	) { 
		/*const animation: Animation = this.animationCtrl.create()
			.addElement(document.querySelector('.anim_content'))
			.duration(3000)
			.iterations(Infinity)
			.fromTo('background-color', 'red', 'green)');*/
	}
	
	ngOnInit() {
		//animation.play();
		let hideFooterTimeout = setTimeout( () => {
			//this.router.navigate(['/login']);
		}, 3000);
	}

}
