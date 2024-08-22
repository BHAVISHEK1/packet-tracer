import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketDemoComponent } from './packet-demo.component';

describe('PacketDemoComponent', () => {
  let component: PacketDemoComponent;
  let fixture: ComponentFixture<PacketDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PacketDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacketDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
