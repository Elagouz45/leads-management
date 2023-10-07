import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialDuplicatesListComponent } from './potential-duplicates-list.component';

describe('PotentialDuplicatesListComponent', () => {
  let component: PotentialDuplicatesListComponent;
  let fixture: ComponentFixture<PotentialDuplicatesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PotentialDuplicatesListComponent]
    });
    fixture = TestBed.createComponent(PotentialDuplicatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
