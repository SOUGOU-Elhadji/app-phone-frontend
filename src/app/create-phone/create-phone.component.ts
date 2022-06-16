import { Component, OnInit, ViewChild } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-phone',
  templateUrl: './create-phone.component.html',
  styleUrls: ['./create-phone.component.css']
})
export class CreatePhoneComponent implements OnInit {
  //@ViewChild('fileInput') fileInput: any;
  selectedValue: string;
  selectedCar: string;

  foods: Food[] = [
    {value: 'NEUF-0', viewValue: 'NEUF'},
    {value: 'RECONDIDIONNE-1', viewValue: 'RECONDITIONNE'},
    {value: 'PERSONALISE-2', viewValue: 'PERSONALISE'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addPhone(){

  }

  cancel(){}

}
