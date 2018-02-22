import { Component, OnInit } from '@angular/core';
import { Image } from '../models/images';

@Component({
  selector: 'app-bannercarousel',
  templateUrl: './bannercarousel.component.html',
  styleUrls: ['./bannercarousel.component.css']
})



export class BannercarouselComponent implements OnInit {
  public images = IMAGES;
  constructor() { }

  ngOnInit() {
  }

}
var IMAGES: Image[] = [
  { "title": "", "url": "assets/img/banner1.png" },
  { "title": "", "url": "assets/img/banner2.png" },
  { "title": "", "url": "assets/img/banner3.png" },
  { "title": "", "url": "assets/img/banner4.png" },
  { "title": "", "url": "assets/img/banner5.jpg" },
  { "title": "", "url": "assets/img/banner6.jpg" }
];