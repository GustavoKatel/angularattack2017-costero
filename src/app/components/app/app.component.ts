import { Component } from '@angular/core';

import { Issue } from "../../core/issue";
import { MapMarkerComponent } from '../../components/map-marker/map-marker.component';
import { DataApiService, UploadTask } from "../../services/data-api.service";
import { MapService } from '../../services/map.service';
import { GeocodingService } from '../../services/geocoding.service';
import { AuthService } from '../../services/auth.service';
import { Location } from '../../core/location.class';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private data: DataApiService, private auth: AuthService) {

    auth.getUser().subscribe(
      user => {
        if(user == null) return;

        let issue = new Issue();
        issue.lat = -7.1476534;
        issue.long = -34.8458601;
        issue.title = 'Test';
        issue.description = 'blabla';
        // data.addIssue(issue);
      }
    );

  }

}
