import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  public circularTxt="This is circular txt UI.";
  title = 'Circular App!';

  public bikesList=['Hero spelender',
    'Honda shine',
    'Bajaj discover',
  'Tvs Victor'];

  constructor() { }

  clickMe(){
    this.circularTxt="Click event is getting fire";
  }

  ngOnInit() {
  }

}
