import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { 
    EventService,
    IEvent, 
    ISession
} from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styles: [
        '.container { padding-left:20px; padding-right: 20px; } .event-image { height: 100px } a {cursor: pointer} .btn { margin-right: 5px}'
    ]
})
export class EventDetailsComponent{
    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all'; 
    sortBy: string = 'votes';

    constructor (private eventService : EventService, private route : ActivatedRoute){

    }

    ngOnInit(){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession(){
        this.addMode = true
    }

    saveNewSession(session: ISession){
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id)) + 1;
        session.id = nextId;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }
}