import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from "@angular/forms";
import { PasswordMatchValidator } from "../../validators/password-match.validator";

@Component({
    moduleId: module.id,
    selector: 'a2c-register-form',
    templateUrl: 'register-form.component.html',
    styleUrls: ['register-form.component.css']
})
export class RegisterFormComponent {
    formGroup: FormGroup;

    constructor (builder: FormBuilder) {
        let passwordValidator = new PasswordMatchValidator();
        this.formGroup = builder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required, new MinLengthValidator('5')]],
            passwordConfirm: ['', [Validators.required, passwordValidator]],
            bio: ['', Validators.required]
        });
        passwordValidator.init(this.formGroup.get('passwordConfirm'), this.formGroup.get('password'));
    }

    onSubmit () {
        console.log(this.formGroup.controls);
    }
}