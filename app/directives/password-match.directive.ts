import { Input, Directive, OnInit, OnChanges, SimpleChanges, AfterViewInit, ElementRef, AfterViewChecked } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl, FormControl, NgForm } from "@angular/forms";

@Directive({
    selector: '[a2cPasswordMatch][ngModel],[a2cPasswordMatch][formControl],[a2cPasswordMatch][formControlName]',
    providers: [{provide: NG_VALIDATORS, useExisting: PasswordMatchDirective, multi: true}]
})
export class PasswordMatchDirective implements Validator, OnChanges{
    @Input('a2cPasswordMatch') passwordToMatch: string;
    @Input() control: AbstractControl;

    validate (control: AbstractControl):{} {
        return control.value === this.passwordToMatch ? null : {'passwordMatch': true};
    }

    ngOnChanges (changes: SimpleChanges): void {
        if(this.control){
            this.control.updateValueAndValidity()
        }
    }
}
