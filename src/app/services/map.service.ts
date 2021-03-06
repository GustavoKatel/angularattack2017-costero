import { Injectable } from '@angular/core';
import { Location } from '../core/location.class';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';

@Injectable()
export class MapService {
  map: Map;
  baseMaps: any;

  constructor() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoidmFuZHJlbGMiLCJhIjoiY2oxdGJvajh5MDBlbDMzcGIxa2xzZjA0MyJ9.dam9LvEEJHOH5ZclzsFqMg';

    this.baseMaps = [
      { name: 'Street', id: 'street' },
      { name: 'Bright', id: 'bright' },
      { name: 'Light', id: 'light' },
      { name: 'Satellite', id: 'satellite' }
    ];
  }

  setCurrentPosition(longitude: number, latitude: number) {
    this.map.setCenter(new mapboxgl.LngLat(longitude, latitude));
  }

  flyTo(longitude: number, latitude: number) {
    let camera: mapboxgl.CameraOptions = {};
    camera.center = [longitude, latitude];
    camera.zoom = 15;
    this.map.flyTo(camera);
  }

}
