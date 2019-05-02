import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipiesService } from '../../recipies/recipies.service';
import { Nurses } from '../recipe.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  loadedDetails : Nurses; 

  constructor(private activatedRoute: ActivatedRoute,private recipieserv : RecipiesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('id')){
        return;
      }
      
    const nurseid = paramMap.get('id');
    debugger;
     this.loadedDetails = this.recipieserv.getDetail(nurseid);
     console.log("loadedDetails"+this.loadedDetails);
    });
  }

}
