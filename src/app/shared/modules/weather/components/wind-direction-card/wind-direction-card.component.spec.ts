import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindDirectionCardComponent } from './wind-direction-card.component';

describe('WindDirectionCardComponent', () => {
  let component: WindDirectionCardComponent;
  let fixture: ComponentFixture<WindDirectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindDirectionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindDirectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
