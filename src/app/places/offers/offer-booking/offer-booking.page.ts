import { Place } from './../../place.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-booking',
  templateUrl: './offer-booking.page.html',
  styleUrls: ['./offer-booking.page.scss'],
})
export class OfferBookingPage implements OnInit {
  place : Place;

  constructor(private route: ActivatedRoute,private navctrl : NavController,private placesServ : PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('placeId')){
        this.navctrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placesServ.getPlace(paramMap.get('placeId'));
    });
  }

}
