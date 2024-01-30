import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pass-param',
    standalone: true,
    imports: [],
    templateUrl: './pass-param.component.html',
    styleUrl: './pass-param.component.scss'
})
export class PassParamComponent implements OnInit{
    paramValue!: string;
    @Input() s:string = ''
    @Output() event = new EventEmitter()
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.paramValue = this.route.snapshot.paramMap.get('id')!;
        this.event.emit(1)
    }
}
