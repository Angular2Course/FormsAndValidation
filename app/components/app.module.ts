import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PasswordMatchDirective } from "../directives/password-match.directive";
import { UsernameService } from "../service/username.service";
import { UniqueUsernameDirective } from "../directives/unique-username.directive";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, RegisterFormComponent, PasswordMatchDirective, UniqueUsernameDirective],
    bootstrap: [AppComponent],
    providers: [UsernameService]
})
export class AppModule {}