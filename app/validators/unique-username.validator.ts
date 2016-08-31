import { UsernameService } from "../service/username.service";
import { Validator, AbstractControl } from "@angular/forms";

export class UniqueUsernameValidator implements Validator {
    constructor (private usernameService: UsernameService) {}

    validate (c: AbstractControl): {} {
        //using Promises, room for improvement
        return new Promise(resolve =>
            this.usernameService.getUsername(c.value)
                .then(() => resolve({'uniqueUsername': true}))
                .catch(() => resolve(null))
        );
    }
}