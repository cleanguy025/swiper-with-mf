import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedUiSwiperSlideModule } from '@swiper-with-mf/shared/ui/swiper-slide';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {
      path: '',
      component: HomeComponent
    }
  ]),
  SharedUiSwiperSlideModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class PagesFeatureHomeModule {}
