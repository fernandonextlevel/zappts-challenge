import { Component, OnInit } from '@angular/core'
import { trigger, transition, style, animate } from '@angular/animations'

@Component({
    selector: 'app-slide-two',
    templateUrl: './slide-two.component.html',
    styleUrls: ['./slide-two.component.scss'],
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

export class SlideTwoComponent implements OnInit {

    SlideAnimation: any
    FadeAnimation: any

    constructor
        (

        ) {

    }

    ngOnInit(): void {

    }

}
