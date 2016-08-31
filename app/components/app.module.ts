import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { FormsModule } from "@angular/forms";
import { PasswordMatchDirective } from "../directives/password-match.directive";
import { PasswordMatchValidator } from "../validators/password-match.validator";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, RegisterFormComponent, PasswordMatchDirective],
    bootstrap: [AppComponent]
})
export class AppModule {}