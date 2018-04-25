import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import * as _rollupMoment from 'moment';
const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-referal',
  templateUrl: './referal.component.html',
  styleUrls: ['./referal.component.css']
})
export class ReferalComponent implements OnInit {
  dateMy = new FormControl(_moment([2017,0,1]));
  constructor() { }
  
  
  ngOnInit() {
    console.log(this.dateMy);
  }
  changeValue()
  {
    let a = this.dateMy.value;
    console.log(a);
  }
}
