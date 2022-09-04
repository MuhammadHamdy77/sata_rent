import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {
  isOpenSearch:boolean = false;
  isOpenCarList:boolean = false;
  isTypeOpen:boolean = false;
  dateRental:boolean = false;
  isCatOpen:boolean = false;
  isTypeNoOpen:boolean = false;
  dateForm:any = '';
  dateTo:any = '';
  dateRent = ['2016','2017','2018','2019' , '2020','2021','2022']
  constructor() { }

  ngOnInit(): void {
  }
  
  openSearch(){
    this.isOpenCarList = false;
    this.isTypeOpen = false;
    this.isCatOpen = false;
    this.dateRental = false;
    this.isTypeNoOpen = false;
  if(this.isOpenSearch == false){
    this.isOpenSearch = true
  }else{
    this.isOpenSearch = false
  }
  }
  openCarList(){
    this.isOpenSearch = false;
    this.isCatOpen = false;
    this.isTypeOpen = false;
    this.dateRental = false;
    this.isTypeNoOpen = false;
  if(this.isOpenCarList == false){
    this.isOpenCarList = true;
    
  }else{
    this.isOpenCarList = false;
  }
  }

  openTypeCar(){
    this.isOpenCarList = false
    this.isOpenSearch = false;
    this.isCatOpen = false;
    this.dateRental = false;
    this.isTypeNoOpen = false;
    if(this.isTypeOpen == false){
      this.isTypeOpen = true
    }else{
      this.isTypeOpen = false
    }
  }

  dateRentTo(date:any){
this.dateForm  = date.value
  }
dateRentFrom(date:any){
this.dateTo  = date.value
}


dateRentOpen(){
  this.isTypeOpen = false
  this.isOpenSearch = false;
  this.isOpenCarList = false;
  this.isCatOpen = false;
  this.isTypeNoOpen = false;
  if(this.dateRental == false){
    this.dateRental = true
  } else{
    this.dateRental = false
  }
}
openCatCar(){
  this.isTypeOpen = false
  this.isOpenSearch = false;
  this.isOpenCarList = false;
  this.dateRental = false;
  this.isTypeNoOpen = false;
  if(this.isCatOpen == false){
    this.isCatOpen = true
  } else{
    this.isCatOpen = false
  }
}
openTypeNo(){
  this.isTypeOpen = false
  this.isOpenSearch = false;
  this.isOpenCarList = false;
  this.dateRental = false;
  this.isCatOpen = false
  if(this.isTypeNoOpen == false){
    this.isTypeNoOpen = true
  }else{
    this.isTypeNoOpen = false
  }
}

}
