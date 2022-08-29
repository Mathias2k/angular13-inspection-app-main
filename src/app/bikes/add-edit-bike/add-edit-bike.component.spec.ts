import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBikeComponent } from './add-edit-bike.component';

describe('AddEditBikeComponent', () => {
  let component: AddEditBikeComponent;
  let fixture: ComponentFixture<AddEditBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
