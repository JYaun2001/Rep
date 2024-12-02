import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoshistComponent } from './datoshist.component';

describe('DatoshistComponent', () => {
  let component: DatoshistComponent;
  let fixture: ComponentFixture<DatoshistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatoshistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatoshistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
