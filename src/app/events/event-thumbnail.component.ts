import { Component, Input } from '@angular/core'
import { IEvent } from './shared/index';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [
        '.bold{font-weight: bold} .green{ color: green !important} .pad-left {margin-left: 10px} .well div {color: #bbb} .thumbnail {min-height: 210px}'
    ]
})
export class EventThumbnailComponent{
    @Input() event :IEvent

    getStartTimeClass(){
       if(this.event && this.event.time === '8:00 am') return ['green', 'bold'];
       return []
    }
}