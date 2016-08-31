import { Validator, AbstractControl, FormControl } from "@angular/forms";
import { DoCheck } from "@angular/core";

export class PasswordMatchValidator implements Validator {
    constructor(private control: AbstractControl, private controlToMatch: FormControl){
        this.controlToMatch.registerOnChange(() => {console.log("itt"); this.control.updateValueAndValidity()});
    }

    validate (control: AbstractControl):{} {
        return control.value === this.controlToMatch.value ? null : {'passwordMatch' : true};
    }

}