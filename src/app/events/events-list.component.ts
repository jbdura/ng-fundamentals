import {Component, OnInit} from '@angular/core';
import {EventService} from "./shared/event.service";
// import { ToastrServiceFeature } from "../common/toastr.service";
import { ToastrService } from 'ngx-toastr';


// @ts-ignore
// declare let toastr

@Component({
  // selector: 'events-list',
  // templateUrl: './events-list.component.html',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events!: any[]
  constructor(private eventService: EventService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }
  // @ts-ignore
  handleThumbnailClick(eventName) {
    this.toastr.success(eventName)
  }

}
