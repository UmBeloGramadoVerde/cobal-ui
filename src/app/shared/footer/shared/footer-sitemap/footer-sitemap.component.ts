import { Component, OnInit } from '@angular/core';
import { sitemap, SiteMapEntry } from '../../footer.constants';

@Component({
  selector: 'app-footer-sitemap',
  templateUrl: './footer-sitemap.component.html',
  styleUrls: ['./footer-sitemap.component.scss'],
})
export class FooterSitemapComponent implements OnInit {
  public sitemap: SiteMapEntry[];

  constructor() {}

  ngOnInit(): void {
    this.sitemap = sitemap;
  }
}
