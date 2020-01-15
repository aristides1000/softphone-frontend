import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftphoneComponent } from './softphone.component';

describe('SoftphoneComponent', () => {
  let component: SoftphoneComponent;
  let fixture: ComponentFixture<SoftphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
