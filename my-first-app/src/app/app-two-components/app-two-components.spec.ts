import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTwoComponents } from './app-two-components';

describe('AppTwoComponents', () => {
  let component: AppTwoComponents;
  let fixture: ComponentFixture<AppTwoComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTwoComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTwoComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
