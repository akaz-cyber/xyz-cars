import { Injectable } from '@angular/core';
import { Car } from './cars';
import { CARLIST } from './mock-cars';

@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  constructor() { }

  getAllCar():Car[]{
    return CARLIST;
  }

  getcarByid(id:number):Car{
   const car=CARLIST.find(c=>c.carid===id)!;
   return car;
  }
}
