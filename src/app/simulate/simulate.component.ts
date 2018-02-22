import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulate',
  templateUrl: './simulate.component.html',
  styleUrls: ['./simulate.component.css']
})
export class SimulateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  insurances = [
    {value: '1', viewValue: 'TOTAL LOSS ONLY'},
    {value: '2', viewValue: 'COMPREHENSIVE'},
    {value: '3', viewValue: 'COMBINATION (1TH COM + nTH TLO)'}
  ];
}
