import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

import { UserDataService } from './services/user-data.service';
import { CourseDataService } from './services/course-data.service';
import { AuthenticationService } from './services/authentication.service';

import { registerElement } from 'nativescript-angular/element-registry';
import { CardView } from 'nativescript-cardview';
registerElement('CardView', () => CardView);

@NgModule({
  imports: [
    HttpClientModule,
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  providers: [
    UserDataService,
    CourseDataService,
    AuthenticationService
  ],
  declarations: [
    AppComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent]
})
/*
Pass your application module to the bootstrapModule function located in main.ts
to start your app
*/
export class AppModule {}
