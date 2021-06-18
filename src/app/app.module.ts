import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'

import { HomeModule } from './home/home.module'
import { SharedModule } from './shared/shared.module'

@NgModule(
    {
        declarations: [
            AppComponent
        ],

        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            HomeModule,
            SharedModule
        ],

        bootstrap: [
            AppComponent
        ]
    }
)

export class AppModule {

}

