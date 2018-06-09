// app.module.ts is the angular app's ROOT MODULE and the first thing to be executed
// after main.ts has compiled the application

// in smaller apps, the root module may be the only module present.  In more complicated
// apps, the app will be composed of many modules.

// modules allow you to "package" components and services together into a single unit.
// they bring components and the services necessary for their functionality together


// BrowserModule is required by every app running in an internet browser.
import { BrowserModule } from '@angular/platform-browser';
// Import the module system
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Import the 
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';


// Angular is modular.  NgModule is Angulars Module system.
// @NgModule decorator 
@NgModule({
  // define which components, directives, pipes belong to the module
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  // import modules into the current module.  Import statement above isn't enough.
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // register services at the application level (globally).  any component can access it
  providers: [],
  // the bootstrap property identifies which component will be automatically rendered
  // to the DOM once angular has compiled and loaded the app
  bootstrap: [AppComponent]
})

// makes the app.module.ts module available outside of this file
export class AppModule { }
