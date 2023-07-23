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
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";


// Providers
import { EventService } from "./events/shared/event.service";
import {RouterModule, RouterOutlet} from "@angular/router";
import { EventRouterActivator } from "./events/event-details/event-router-activator.service";
import { EventsListResolver } from "./events/events-list-resolver.service";
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
    CreateEventComponent,
    Error404Component,
  ],
  providers: [
    EventService,
    EventRouterActivator,
    EventsListResolver,
    // {
    //   provide: 'canDeactivateCreateEvent',
    //   useValue: checkDirtyState
    // }
  ],
  bootstrap: [ EventsAppComponent ]
})
export class AppModule { }



// to work on later.
// export function checkDirtyState(component: CreateEventComponent) {
//   if (component.isDirty)
//     return window.confirm('YOu have not saved this event. Do you want to continue?')
//   return true
// }
