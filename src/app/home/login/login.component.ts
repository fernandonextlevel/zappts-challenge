import { Component, Output, EventEmitter } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { trigger, style, animate, transition } from '@angular/animations'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [
        trigger('AnimTrigger', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(".5s ease-in", style({ opacity: 1 }))
            ]),
            transition('* => void', [
                style({ opacity: 1 }),
                animate(".5s ease-out", style({ opacity: 0 }))
            ])
        ])
    ]
})
export class LoginComponent {

    Animate: any

    loginForm: FormGroup
    isFormSubmitted = false

    @Output()
    goTo: EventEmitter<string> = new EventEmitter<string>()

    constructor
        (
            private formBuilder: FormBuilder
        ) {

    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group(
            {
                username: ['', Validators.required],
                password: ['', Validators.required]
            }
        )
    }

    get formControls() {
        return this.loginForm.controls
    }

    submitLoginForm() {
        this.isFormSubmitted = true

        if (this.loginForm.invalid) {
            return
        }
    }

    loginWithGoogle(): String {
        return 'Success.'
    }

    navigateAway(): void {
        this.goTo.emit('signup')
    }
}
