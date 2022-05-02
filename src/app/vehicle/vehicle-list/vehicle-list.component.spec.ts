/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { VehicleListComponent } from './vehicle-list.component';
import { Vehicle } from '../vehicle';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let debug: DebugElement;

  let vehicles: Vehicle[] = [
    new Vehicle(1, "Renault", "Sandero", "StepWay", 2018, 3000, "Blanco", ""),
    new Vehicle(2, "Toyota", "Yaris", "Sport", 2022, 0, "Negro", ""),
    new Vehicle(3, "Toyota", "Prado", "4.0 Tx", 2011, 138000, "Gris humo", "")
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ VehicleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    component.vehicles = vehicles;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain three vehicles', () => {
    let vehcilesList: HTMLElement = debug.nativeElement.querySelector("#vechile-list").querySelector("tbody");
    expect(vehcilesList.querySelectorAll('tr').length).toBe(4) // +1 por los titulos;
  })
});
