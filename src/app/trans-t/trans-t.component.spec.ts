import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransTComponent } from './trans-t.component';

describe('TransTComponent', () => {
  let component: TransTComponent;
  let fixture: ComponentFixture<TransTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
