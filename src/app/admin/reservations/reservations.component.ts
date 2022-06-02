import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit,AfterViewInit {

  @ViewChild('dataTable',{static:false}) table: any;
  dataTable:any
  reservation:any;
  reservationId:string="";
  // res: Reservation[] | undefined;
  constructor( private http:HttpClient) { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    
  }
  getReservation(){
   console.log("This is ReservationID"+this.reservationId)
   let response =  this.http.get("localhost:8080/hotel-mgt-reservation/v1/reservations/{"+this.reservationId+"}");
    response.subscribe(data=>this.reservation=data);
}
}
