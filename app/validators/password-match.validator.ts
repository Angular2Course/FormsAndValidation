import { Validator, AbstractControl } from "@angular/forms";

export class PasswordMatchValidator implements Validator {
    private control: AbstractControl;
    private controlToMatch: AbstractControl;

    init (control: AbstractControl, controlToMatch: AbstractControl) {
        this.control = control;
        this.controlToMatch = controlToMatch;

        this.controlToMatch.valueChanges.subscribe(
            () => this.control.updateValueAndValidity()
        )
    }

    validate (control: AbstractControl): {} {
        return this.controlToMatch ? control.value === this.controlToMatch.value ? null : {'passwordMatch': true} : null;
    }
}
