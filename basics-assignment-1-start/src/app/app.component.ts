// app.component is the "root" or "bootstrap" component.  When angular launches
// it places the html rendering of AppComponent into the DOM inside the <app-root> tag


// Component needs to be imported from the angular core library
import { Component } from '@angular/core';

// @Component is a typscript decorator.  Decorators provide "enhancements" to classes,
// such as the AppComponent class below

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// We want to use AppComponent outide of this file.  It needs to be exported.
export class AppComponent {
}
