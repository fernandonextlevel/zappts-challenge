import { Component, Output, EventEmitter, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { trigger, style, animate, transition } from '@angular/animations'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
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

export class SignupComponent implements OnInit {

    Animate: any

    signupForm: FormGroup
    isFormSubmitted = false

    @Output()
    goTo: EventEmitter<string> = new EventEmitter<string>()

    constructor
        (
            private formBuilder: FormBuilder
        ) {

    }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group(
            {
                fullname: ['', Validators.required],
                username: ['', Validators.required],
                password: ['', Validators.required],
                confirmPassword: ['', Validators.required]
            }
        )
    }

    get formControls() {
        return this.signupForm.controls
    }

    submitSignupForm(): String {
        this.isFormSubmitted = true

        if (this.signupForm.invalid) {
            return
        }
    }

    signupWithGoogle(): String {
        return 'Success.'
    }

    navigateAway(): void {
        this.goTo.emit('login')
    }
}
