import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-partage',
	templateUrl: './partage.page.html',
	styleUrls: ['./partage.page.scss'],
})
export class PartagePage implements OnInit {

	constructor(
		public router: Router,
	) { }
	
	ngOnInit() {
	}

}
