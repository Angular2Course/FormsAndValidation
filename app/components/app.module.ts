import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RegisterFormComponent } from "./register-form/register-form.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, RegisterFormComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}