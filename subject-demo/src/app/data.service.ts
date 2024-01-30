import { EventEmitter, Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class DataService{
    // dataEmitter = new EventEmitter<string>();
    dataEmitter = new BehaviorSubject<string>("Initial value");
    // dataEmitter = new Subject<string>();

    raiseDataEmitterEvent(data: string){
        this.dataEmitter.next(data);
    }
}