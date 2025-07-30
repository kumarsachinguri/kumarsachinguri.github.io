import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeDoingRnDComponent } from './me-doing-rn-d.component';

describe('MeDoingRnDComponent', () => {
  let component: MeDoingRnDComponent;
  let fixture: ComponentFixture<MeDoingRnDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeDoingRnDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeDoingRnDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
