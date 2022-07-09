import {NgModule} from '@angular/core';
import {LoginComponent} from "./login/login.component";
import {RouterModule} from "@angular/router";
import {LandingpageComponent} from "./landingpage.component";
import {routes} from "./landingpage.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {CommonModule} from "@angular/common";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RegisterComponent} from "./register/register.component";

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        ReactiveFormsModule,
        CommonModule,
        MatTooltipModule,
    ],
  providers: [],
  declarations: [
    LandingpageComponent,
    LoginComponent,
    ResetPasswordComponent,
    RegisterComponent,
  ],
  exports: [RouterModule],
})
export class LandingPageModule {
}
