import { Validator, AbstractControl, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { UsernameService } from "../service/username.service";
import { UniqueUsernameValidator } from "../validators/unique-username.validator";
import { Directive } from "@angular/core";

@Directive({
    selector: '[a2cUniqueUsername][ngModel],[a2cUniqueUsername][formControl],[a2cUniqueUsername][formControlName]',
    providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernameDirective, multi: true}]
})
export class UniqueUsernameDirective implements Validator{
    private validator: UniqueUsernameValidator;

    constructor (private usernameService: UsernameService) {
        this.validator = new UniqueUsernameValidator(usernameService);
    }

    validate (c: AbstractControl): {} {
        return this.validator.validate(c);
    }
}