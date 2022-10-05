import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorTablaComponent } from './actor-tabla.component';

describe('ActorTablaComponent', () => {
  let component: ActorTablaComponent;
  let fixture: ComponentFixture<ActorTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
