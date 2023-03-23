
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { ISelectList, ISubmissionForm } from '../submission/submission.component';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow)
  infoWindow!: MapInfoWindow;
  geocoder = new google.maps.Geocoder();
  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  public markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 2;
  @Input() result: Observable<Array<ISubmissionForm>> = of([]);
  openInfoWindow(marker: MapMarker): void {
    this.infoWindow.open(marker);
  }

  ngOnInit(): void{
   this.markerPositions = [{ lat: 33.939110, lng: 67.709953 }, { lat: 25.034281, lng: -77.396278 }, { lat: 56.130367, lng: -106.346771 }, { lat: 56.263920, lng: 9.501785 }, { lat: 39.074208, lng: 21.824312 }, { lat: 47.162494, lng: 19.503304 }, { lat: 20.593684, lng: 78.96288 }, { lat: 36.204824, lng: 138.252924 }, { lat: -40.900557, lng: 174.885971 }, { lat: 37.09024, lng: -95.712891 }, { lat: 37.09024, lng: -95.712891 }];
  }
  /*currently not using this function for getting geolocation. We can use this function to get lat and lan by using address*/
  // getGeoLocation() {
  //   this.geocoder.geocode({ 'address': "India" }, function (results, status) {
  //     if (status === google.maps.GeocoderStatus.OK) {
  //       const latitude = results[0].geometry.location.lat();
  //       const longitude = results[0].geometry.location.lng();
  //     }
  //   });
  // }
}
