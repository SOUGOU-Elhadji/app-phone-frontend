import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from 'src/app/models/phone';
import { PhoneService } from 'src/app/services/phone.service';

@Component({
  selector: 'app-phone-update',
  templateUrl: './phone-update.component.html',
  styleUrls: ['./phone-update.component.css']
})
export class PhoneUpdateComponent implements OnInit {

  id: number;
  phone: Phone = new Phone();

  constructor(private phoneService: PhoneService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.phoneService.getPhoneById(this.id).subscribe(data =>{
      this.phone = data;
    },
    error => console.log(error));
  }

  /*update(){
    this.phoneService.updatePhone(this.id, this.phone).subscribe(data =>{
      this.goToList();
    }, error => console.log(error));
  }*/

  update(){
    this.phoneService.updatePhone(this.phone).subscribe(data =>{
      this.goToList();
    }, error => console.log(error));
  }

  goToList(){
    this.router.navigate(['/all-phone']);
  }
}
