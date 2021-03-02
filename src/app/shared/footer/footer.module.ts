import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSitemapComponent } from './shared/footer-sitemap/footer-sitemap.component';
import { FooterSocialsComponent } from './shared/footer-socials/footer-socials.component';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterSitemapComponent,
    FooterSocialsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent],
})
export class FooterModule { }
