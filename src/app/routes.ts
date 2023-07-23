import {Routes} from "@angular/router";
import {EventsListComponent} from "./events/events-list.component";
import {EventDetailsComponent} from "./events/event-details/event-details.component";
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouterActivator} from "./events/event-details/event-router-activator.service";
import {EventsListResolver} from "./events/events-list-resolver.service";


export const appRoutes: Routes = [
  // { path: 'events/new', component: CreateEventComponent, canDeactivate: ['CanDeactivateCreateEvent'] },
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import ('./user/user.module')
      .then(m => m.UserModule)
  }
]
