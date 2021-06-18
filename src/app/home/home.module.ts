import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { HomeComponent } from './home.component'
import { SignupComponent } from './signup/signup.component'
import { LoginComponent } from './login/login.component'

import { CarouselComponent } from './carousel/carousel.component'
import { SlideOneComponent } from './carousel/slide-one/slide-one.component'
import { SlideTwoComponent } from './carousel/slide-two/slide-two.component'
import { SlideThreeComponent } from './carousel/slide-three/slide-three.component'
import { SlideFourComponent } from './carousel/slide-four/slide-four.component'

@NgModule(
    {
        declarations: [
            HomeComponent,
            SignupComponent,
            CarouselComponent,
            LoginComponent,
            SlideOneComponent,
            SlideTwoComponent,
            SlideThreeComponent,
            SlideFourComponent
        ],

        imports: [
            CommonModule,
            ReactiveFormsModule
        ],

        exports: [
            HomeComponent,
            SignupComponent,
            CarouselComponent
        ]
    }
)

export class HomeModule {

}
