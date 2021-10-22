import { Component, OnInit } from '@angular/core';
import { TransService } from '../service/trans.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  failedData:any;
  totalData:any;
  successData:any;

  constructor(private tr:TransService) {

    this.tr.getT().subscribe((res:any)=>this.totalData=res)
    this.tr.getF().subscribe((res:any)=>this.failedData=res)
    this.tr.getS().subscribe((res:any)=>this.successData=res)
   }

  ngOnInit(): void {
  }

}
