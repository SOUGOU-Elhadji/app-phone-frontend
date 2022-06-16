import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhoneComponent } from './component-phone/phone/phone.component';
import { AppRoutingModule } from './app-routing.module';
import { PhoneDetailsComponent } from './component-phone/phone-details/phone-details.component';
//import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { PhoneUpdateComponent } from './component-phone/phone-update/phone-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CarousselComponent } from './component-phone/caroussel/caroussel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { CountdownModule } from 'ngx-countdown';
import { MatDialogModule } from '@angular/material/dialog';
import { CreatePhoneComponent } from './create-phone/create-phone.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    PhoneComponent,
    PhoneDetailsComponent,
    PhoneUpdateComponent,
    CarousselComponent,
    CreatePhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule, BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
    //CountdownModule
    //ToastrModule, ToastNoAnimation, ToastNoAnimationModule.forRoot()


    //BrowserAnimationsModule,
    //ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
