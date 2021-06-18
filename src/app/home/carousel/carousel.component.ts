import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core'

import { TemplateService } from '../../shared/services/template-service/template-service'

import { SlideOneComponent } from './slide-one/slide-one.component'
import { SlideTwoComponent } from './slide-two/slide-two.component'
import { SlideThreeComponent } from './slide-three/slide-three.component'
import { SlideFourComponent } from './slide-four/slide-four.component'

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {


    public currentSlide: String
    private autoPlay: NodeJS.Timer
    private slideCount: number

    public slides = [
        SlideOneComponent,
        SlideTwoComponent,
        SlideThreeComponent,
        SlideFourComponent
    ]

    public slideToggles =
        {
            showSlideOne: false,
            showSlideTwo: false,
            showSlideThree: false,
            showSlideFour: false
        }



    //Read View References
    @ViewChild('content', { read: ViewContainerRef, static: true }) vCR: ViewContainerRef

    constructor
        (
            private templateService: TemplateService,
    ) {

    }

    ngOnInit(): void {
        this.showSlide(this.slides[0])
        this.startAutoPlay()
    }

    setContainerRef(): void {
        this.templateService.setRootViewContainerRef(this.vCR)
    }

    clickSlide(slide): void {
        this.showSlide(slide)
        this.pauseAutoPlay()
    }

    showSlide(slide): void {
        this.setContainerRef()
        this.slideCount = this.slides.indexOf(slide)
        this.currentSlide = slide.name.substr(0, (slide.name.length - 9)).toLowerCase()
        this.templateService.loadTemplate(slide)
    }

    startAutoPlay() {
        this.autoPlay = setInterval(() => {
            if (this.slideCount < 3) {
                this.slideCount += 1
                this.showSlide(this.slides[this.slideCount])
            } else {
                this.slideCount = 0
                this.showSlide(this.slides[this.slideCount])
            }
        }, 8000)
    }

    pauseAutoPlay() {
        clearInterval(this.autoPlay)
        this.startAutoPlay()
    }
}
