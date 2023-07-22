import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Components
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent} from "./nav/navbar.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";

// Providers
import { EventService } from "./events/shared/event.service";
import {RouterModule, RouterOutlet} from "@angular/router";
// import { ToastrServiceFeature} from "./common/toastr.service";

// useful Routing Imports
import { appRoutes } from "./routes";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    RouterOutlet,
    RouterModule.forRoot(appRoutes)
    // ToastrModule added
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
  ],
  providers: [
    EventService,
    // ToastrServiceFeature,
  ],
  bootstrap: [ EventsAppComponent ]
})
export class AppModule { }
