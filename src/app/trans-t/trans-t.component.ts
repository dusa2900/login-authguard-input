import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-trans-t',
  templateUrl: './trans-t.component.html',
  styleUrls: ['./trans-t.component.css']
})
export class TransTComponent implements OnInit {

  @Input() totalRecord:any;
  constructor() { 

  }

  ngOnInit(): void {
  }


}
