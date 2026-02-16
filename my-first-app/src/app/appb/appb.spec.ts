import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appb } from './appb';

describe('Appb', () => {
  let component: Appb;
  let fixture: ComponentFixture<Appb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
