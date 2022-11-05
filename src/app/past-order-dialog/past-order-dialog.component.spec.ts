import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastOrderDialogComponent } from './past-order-dialog.component';

describe('PastOrderDialogComponent', () => {
  let component: PastOrderDialogComponent;
  let fixture: ComponentFixture<PastOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastOrderDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
