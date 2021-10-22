import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-trans-s',
  templateUrl: './trans-s.component.html',
  styleUrls: ['./trans-s.component.css']
})
export class TransSComponent implements OnInit {

  @Input() successRecord:any;
  constructor() { 

  }

  ngOnInit(): void {
  }


}
