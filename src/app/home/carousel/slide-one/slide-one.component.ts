import { Component, OnInit } from '@angular/core'
import { trigger, transition, style, animate } from '@angular/animations'

@Component({
    selector: 'app-slide-one',
    templateUrl: './slide-one.component.html',
    styleUrls: ['./slide-one.component.scss'],
    animations: [
        trigger('SlideIn', [
            transition('void => *', [
                style({ transform: 'translateX(50vw)' }),
                animate("2s ease-in", style({ transform: 'translateX(0px)' }))
            ])
        ]),
        trigger('FadeIn', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate("1s 1s ease-in", style({ opacity: 1 }))
            ])
        ])
    ]
})

export class SlideOneComponent implements OnInit {

    SlideAnimation: any
    FadeAnimation: any

    constructor
        (

        ) {

    }

    ngOnInit(): void {

    }

}
