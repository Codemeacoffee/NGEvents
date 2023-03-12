import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ RouterModule } from '@angular/router';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index'

import { appRoutes } from 'src/routes';
import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { IToastr, TOASTR_TOKEN } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { collapsibleWellComponent } from './common/collapsible-well.component';

declare let toastr:IToastr

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    collapsibleWellComponent,
    DurationPipe
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    { provide: TOASTR_TOKEN, useValue: toastr}
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty) return window.confirm('You have not saved this event, do you really want to cancel?');
  return true;
}