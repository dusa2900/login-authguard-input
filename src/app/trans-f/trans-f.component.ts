import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-trans-f',
  templateUrl: './trans-f.component.html',
  styleUrls: ['./trans-f.component.css']
})
export class TransFComponent implements OnInit {

  @Input() failedRecord:any;
  constructor() { }
   

  ngOnInit(): void {
  }

}
