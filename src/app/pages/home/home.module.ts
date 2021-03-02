import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeBannerBottomComponent } from './shared/home-banner-bottom/home-banner-bottom.component';
import { HomeBannerTopComponent } from './shared/home-banner-top/home-banner-top.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerBottomComponent,
    HomeBannerTopComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
