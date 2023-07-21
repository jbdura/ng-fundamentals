import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Components
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent} from "./nav/navbar.component";

// Providers
import { EventService } from "./events/shared/event.service";
// import { ToastrServiceFeature} from "./common/toastr.service";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,

  ],
  providers: [
    EventService,
    // ToastrServiceFeature,
  ],
  bootstrap: [ EventsAppComponent ]
})
export class AppModule { }
