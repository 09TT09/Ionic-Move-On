import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-compte',
	templateUrl: './compte.page.html',
	styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {
	
	public menuState: boolean = false;

	constructor(
		public router: Router,
	) { }
	
	ngOnInit() {
	}
	
	menu(){
		this.menuState =! this.menuState;
		if (this.menuState === true){
			document.getElementById('navmenu').style.display = "initial";
		} else {
			document.getElementById('navmenu').style.display = "none";
		}
	}

}
