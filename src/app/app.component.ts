import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePhoneComponent } from './create-phone/create-phone.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhoneAppAngular';

  constructor(private dialog: MatDialog) { }

  open() {
    this.dialog.open(CreatePhoneComponent, {
      width: '35%'
    });
  }
}
