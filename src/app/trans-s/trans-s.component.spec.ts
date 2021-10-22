import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransSComponent } from './trans-s.component';

describe('TransSComponent', () => {
  let component: TransSComponent;
  let fixture: ComponentFixture<TransSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
