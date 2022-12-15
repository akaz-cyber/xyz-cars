import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarserviceService } from '../carservice.service';
import { Car } from '../cars';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailcars',
  templateUrl: './detailcars.component.html',
  styleUrls: ['./detailcars.component.css']
})
export class DetailcarsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private carservice:CarserviceService,
  private location: Location
  ){}


  car:Car | undefined;

  ngOnInit(): void {
  const id=Number(this.route.snapshot.paramMap.get("id"));
 this.car = this.carservice.getcarByid(id);
  //  this.carservice.getcarByid();
  }

  goBack():void{
    this.location.back();
  }


}
