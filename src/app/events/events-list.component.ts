import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { 
  EventService,
  IEvent
} from './shared/index';

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit{
  events: IEvent[]

  constructor (private eventService: EventService, private route: ActivatedRoute){}

  ngOnInit(){
    this.events = this.route.snapshot.data['events'];
  }
}