import {Routes} from "@angular/router";
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouterActivator,
  EventsListResolver,
} from "./events/index";
import {Error404Component} from "./errors/404.component";


export const appRoutes: Routes = [
  // { path: 'events/new', component: CreateEventComponent, canDeactivate: ['CanDeactivateCreateEvent'] },
  {path: 'events/new', component: CreateEventComponent},
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: () => import ('./user/user.module')
      .then(m => m.UserModule)
  }
]
