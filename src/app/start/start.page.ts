import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
	selector: 'app-start',
	templateUrl: './start.page.html',
	styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

	constructor(
		public router: Router,
		private animationCtrl: AnimationController
	) { }
	
	ngOnInit() {
		
		let hideFooterTimeout = setTimeout( () => {
			const animation = this.animationCtrl.create()
				.addElement(document.querySelector('.anim_content'))
				.duration(2000)
				.fromTo('opacity', 1, 0);		
			animation.play();
			let hideFooterTimeout = setTimeout( () => {
				this.router.navigate(['/login']);
			}, 2000);
		}, 2000);
	}

}
