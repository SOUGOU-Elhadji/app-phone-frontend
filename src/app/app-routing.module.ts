import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhoneComponent } from './component-phone/phone/phone.component';
import { PhoneDetailsComponent } from './component-phone/phone-details/phone-details.component';
import { PhoneUpdateComponent } from './component-phone/phone-update/phone-update.component';

const routes: Routes = [
  {path: 'all-phone', component: PhoneComponent},
  {path: 'details-phone/:id', component: PhoneComponent},
  {path: 'update-phone/:id', component: PhoneUpdateComponent},
  {path: '', redirectTo: 'all-phone', pathMatch: 'full' },
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    
    exports: [RouterModule]
})
export class AppRoutingModule { }
