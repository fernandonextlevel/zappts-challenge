import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    currentComponent: String

    constructor
        (

        ) {

    }

    ngOnInit(): void {
        this.currentComponent = 'login'
    }

    swapComponents(component) {
        this.currentComponent = component
    }
}
