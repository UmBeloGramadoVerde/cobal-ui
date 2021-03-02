import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerTopComponent } from './home-banner-top.component';

describe('HomeBannerTopComponent', () => {
  let component: HomeBannerTopComponent;
  let fixture: ComponentFixture<HomeBannerTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBannerTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBannerTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
