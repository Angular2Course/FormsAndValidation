import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: 'a2c-register-form',
    templateUrl: 'register-form.component.html',
    styleUrls: ['register-form.component.css']
})
export class RegisterFormComponent {
    formGroup: FormGroup;

    constructor (builder: FormBuilder) {
        this.formGroup = builder.group({
            username: [],
            password: [],
            passwordConfirm: [],
            bio: []
        });
    }

    onSubmit () {
        console.log(this.formGroup.controls);
    }
}