import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-map',
	templateUrl: './map.page.html',
	styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

	public toggleState: boolean = false;
	public rechercheState: boolean = false;
	public menuState: boolean = false;

	constructor(
		public router: Router
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
	
	recherche() {
		this.rechercheState =! this.rechercheState;
		if (this.rechercheState === true){
			document.getElementById('mapouter').style.display = "none";
			document.getElementById('recherche').style.display = "initial";
			document.getElementById('search').style.display = "none";
			document.getElementById('close').style.display = "initial";
		} else {
			document.getElementById('mapouter').style.display = "initial";
			document.getElementById('recherche').style.display = "none";
			document.getElementById('search').style.display = "initial";
			document.getElementById('close').style.display = "none";
		}
	}
	
	onToggle() {
		this.toggleState =! this.toggleState;
		let ion_tab_button = document.getElementsByClassName('ion-tab-button') as HTMLCollectionOf<HTMLElement>;
		let ion_tab_button_last = document.getElementsByClassName('ion-tab-button-last') as HTMLCollectionOf<HTMLElement>;
		
		if (this.toggleState === true){
			document.getElementById('etatuser').innerHTML = "Mov'er";
			document.getElementById('toolbar').style.backgroundColor = "#AF52DE";
			document.getElementById('toolbar').style.borderBottomColor = "black";
			document.getElementById('toolbar').style.color = "black";
			document.getElementById('icon').style.color = "black";
			document.getElementById('icon2').style.color = "black";
			document.getElementById('etatuser').style.color = "black";
			ion_tab_button[0].style.backgroundColor = "#AF52DE";
			ion_tab_button[1].style.backgroundColor = "#AF52DE";
			document.getElementById('map').style.color = "black";
			document.getElementById('search').style.color = "black";
			document.getElementById('close').style.color = "black";
			ion_tab_button_last[0].style.borderLeftColor = "rgb(39, 39, 39)";
			document.getElementById('text1').style.color = "black";
			document.getElementById('text2').style.color = "black";
			document.getElementById('vous').style.display = "initial";
		} else {
			document.getElementById('etatuser').innerHTML = "Client";
			document.getElementById('toolbar').style.backgroundColor = "rgb(39, 39, 39)";
			document.getElementById('toolbar').style.borderBottomColor = "#AF52DE";
			document.getElementById('icon').style.color = "#AF52DE";
			document.getElementById('icon2').style.color = "#AF52DE";
			document.getElementById('toolbar').style.color = "white";
			document.getElementById('etatuser').style.color = "white";
			ion_tab_button[0].style.backgroundColor = "rgb(39, 39, 39";
			ion_tab_button[1].style.backgroundColor = "rgb(39, 39, 39";
			document.getElementById('map').style.color = "#AF52DE";
			document.getElementById('search').style.color = "#AF52DE";
			document.getElementById('close').style.color = "#AF52DE";
			ion_tab_button_last[0].style.borderLeftColor = "#AF52DE";
			document.getElementById('text1').style.color = "white";
			document.getElementById('text2').style.color = "white";
			document.getElementById('vous').style.display = "none";
		}
	}
	
}
