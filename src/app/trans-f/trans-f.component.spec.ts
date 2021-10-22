import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransFComponent } from './trans-f.component';

describe('TransFComponent', () => {
  let component: TransFComponent;
  let fixture: ComponentFixture<TransFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
