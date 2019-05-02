import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places : Place[] =  [
  new Place(
    "p1",
    "Indiranagar",
    "Royal Orchid Pool",
    "https://images.thrillophilia.com/image/upload/s--6KT145kK--/c_fill,f_auto,fl_strip_profile,h_446,q_auto,w_750/v1/images/photos/000/039/818/original/m_Golden_Palms_Resort.jpg.jpg?1453313949",
    2500
  ),
  new Place(
    "p2",
    "Kormangala",
    "Kadkani Riverside Resort",
    "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_1810/x_891,y_0,w_3218,h_1810,r_0,c_crop,q_60,fl_progressive/w_1366,c_fit,f_auto/kadkani-riverside-resort-coorg/Clubhouse_yhudrc",
    3000
  ),
  new Place(
    "p3",
    "M G Road",
    "Vivanta by Taj",
    "https://s-ec.bstatic.com/images/hotel/max1024x768/304/30474439.jpg",
    5000
  )

  ];

  get places(){
    return [...this._places]
  }
  
  getPlace(id: string){
     return {...this.places.find(p => p.id === id)};
  }
  constructor() { }
}
