import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Swiper } from "swiper";

SwiperCore.use([Pagination, Navigation]);
@Component({
  selector: 'app-swiper-slide',
  templateUrl: './swiper-slide.component.html',
  styleUrls: ['./swiper-slide.component.css']
})
export class SwiperSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
