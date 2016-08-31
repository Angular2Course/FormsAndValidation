import { Component } from "@angular/core";
import { User } from "../../models/user";

@Component({
    moduleId: module.id,
    selector: 'a2c-register-form',
    templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {
    user = new User();
}