import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from 'src/app/models/phone';
import { PhoneService } from 'src/app/services/phone.service';
//import { ToastrService } from 'ngx-toastr';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  p: number = 1;
  phones: Phone[];
  phone: Phone = new Phone();

  id: number;

  phoneClicked;
  closeResult = '';

 

  constructor(private phoneService: PhoneService, private router: Router, private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllPhone();
    
    /*this.id = this.route.snapshot.params['id'];
    this.phoneService.getPhoneById(this.id).subscribe(data =>{
      this.phone = data;
      
    },
    error => console.log(error));*/

    
  }

 

  getAllPhone(){
    this.phoneService.getPhoneList().subscribe(data => {
      this.phones = data;
      console.log(data);
    })
  }

  savePhone(){
    this.phoneService.createPhone(this.phone).subscribe(data => {
      console.log(data);
      //this.gotoList();
      //this.toastr.success('Phone save Successfully')
      this.reloadPage();
    },
      //error => console.log(this.toastr.error('Error to save : try again')));
      error => console.log(error))
  }

  deletePhone(id: number){
    this.phoneService.deletePhone(id).subscribe(data => {
      console.log(data);
      this.getAllPhone();
      //this.toastr.success(' Delete Successfully')
    })
  }

  

  /*update(){
    this.phoneService.updatePhone(this.id, this.phone).subscribe(data =>{
      this.goToList();
    }, error => console.log(error));
  }

  goToList(){
    this.router.navigate(['/all-phone']);
  }*/

  reloadPage(): void {
    window.location.reload();
  }

  detailsPhone(id: number){
    this.router.navigate(['details-phone', id])
  }

 updatePhone(id: number){
    this.router.navigate(['update-phone', id])
  }
  
  open(content, phone) {
    this.phoneClicked=phone;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

}
