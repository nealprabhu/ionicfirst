import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
   loadPlaces : Place[];
  constructor(private placeService : PlacesService) { }

  ngOnInit() {
    this.loadPlaces = this.placeService.places;
  }

}
