import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumedalesComponent } from './humedales.component';

describe('HumedalesComponent', () => {
  let component: HumedalesComponent;
  let fixture: ComponentFixture<HumedalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumedalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumedalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
