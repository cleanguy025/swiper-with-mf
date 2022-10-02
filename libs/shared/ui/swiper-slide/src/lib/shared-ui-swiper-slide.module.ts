import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperSlideComponent } from './swiper-slide/swiper-slide.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [CommonModule, SwiperModule],
  declarations: [SwiperSlideComponent],
  exports: [SwiperSlideComponent]
})
export class SharedUiSwiperSlideModule {}
