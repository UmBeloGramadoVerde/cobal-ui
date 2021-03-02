import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBannerBottomComponent } from './home-banner-bottom.component';

describe('HomeBannerBottomComponent', () => {
  let component: HomeBannerBottomComponent;
  let fixture: ComponentFixture<HomeBannerBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBannerBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBannerBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
