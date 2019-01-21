import { Component } from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSideBarComponent {

  constructor(public app: AppComponent) {}

}
