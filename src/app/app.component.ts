import { Component } from '@angular/core';

import { Issue } from "./core/issue";
import { DataApiService } from "./services/data-api.service";
import { MapService } from './services/map.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private issues : any;

  constructor(private mapService: MapService, data: DataApiService) {

    let issue = new Issue();
    issue.title = 'geo';
    issue.lat = -7.140095;
    issue.long = -34.851654;
    // data.addIssue(issue);

    this.issues = data.getIssuesAround([-8.0431353, -35.0062387], 300);
    console.log(this.issues);


  }

  onButtonClick() {
    this.title = 'Hello from Kendo UI';
  }
 }
