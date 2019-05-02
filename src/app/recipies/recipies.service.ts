import { Injectable } from '@angular/core';
import { Nurses } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipiesService {
  private nurse : Nurses[]=[
    {
      id : "r1",
      name : "Serra",
      imageUrl : "https://abcott.edu/wp-content/themes/er-2015-child/assets/medical-assistant/images/practical-nurse-program-thumb.png",
      specialization :["Cardiac Care","Clinical Nurse","Dermatology"]
    },
    {
      id : "r2",
      name : "Joy",
      imageUrl : "https://cdn1.nursinglicensemap.com/content/9d3968d2dc1b4bdeb09b74e20999ade4/Registered_nurse.jpg",
      specialization :["Cardiac Care","Emergency Nursing ","Dermatology"]
    },
    {
      id : "r3",
      name : "Jack",
      imageUrl : "https://www.talemed.com/wp-content/uploads/2017/11/About-TaleMed-Nurse-Staffing-Healthcare.jpg",
      specialization :["Health Policy Nursing","Emergency Nursing ","Dermatology"]
    },
    {
      id : "r4",
      name : "Kieth",
      imageUrl : "https://cdn.careeronestop.org/OccVids/OccupationVideos/29-1141.00.jpg",
      specialization :["Health Policy Nursing","Emergency Nursing ","Dermatology"]
    }
  ];
 
  constructor() { }

  getAllDetails(){
    return [...this.nurse];
  }

  getDetail(nurseid : string){
    debugger;
      return {...this.nurse.find(nur =>{
        return nur.id === nurseid;
      })};
  }
}
