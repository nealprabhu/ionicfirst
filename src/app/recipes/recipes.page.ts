import { Component, OnInit } from '@angular/core';
import { Nurses } from './recipe.model';
import { RecipiesService } from '../recipies/recipies.service';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  nurse: Nurses[];
  constructor(private nurseservice : RecipiesService,public navctrl: NavController) {
    
   }
navigationExtra : NavigationExtras;
navigate(id){
 this.navctrl.navigateForward('/recipes/'+ id)
}


  ngOnInit() {
    this.nurse = this.nurseservice.getAllDetails();
  }

}
