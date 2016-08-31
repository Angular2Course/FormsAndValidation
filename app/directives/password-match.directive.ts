import { PasswordMatchValidator } from "../validators/password-match.validator";
import { Input, Directive, OnInit, OnChanges, SimpleChanges, AfterViewInit, ElementRef, AfterViewChecked } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl, FormControl, NgForm } from "@angular/forms";

@Directive({
    selector: '[a2cPasswordMatch]',
    providers: [{provide: NG_VALIDATORS, useExisting: PasswordMatchDirective, multi: true}]
})
export class PasswordMatchDirective implements Validator, AfterViewChecked {
    @Input('a2cPasswordMatch') passwordToMatchControlName: string;
    validator: PasswordMatchValidator;

    constructor (
        private form: NgForm,
        private element: ElementRef
    ) {}

    ngAfterViewChecked ():void {
        if(this.validator){return;}
        let control = this.form.form.get(this.element.nativeElement.name);
        let controlToMatch = (this.form.form.get(this.passwordToMatchControlName) as FormControl);
        if(control && controlToMatch){
            this.validator = new PasswordMatchValidator(control, controlToMatch);
            control.updateValueAndValidity();
        }
    }

    validate (control: AbstractControl):{} {
        return this.validator ? this.validator.validate(control) : null;
    }

}
