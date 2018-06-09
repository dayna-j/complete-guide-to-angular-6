import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})

// this is how we make the component available outside of this typescript definition
// it will be available under the identifier; 'WarningAlertComponent'

export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
